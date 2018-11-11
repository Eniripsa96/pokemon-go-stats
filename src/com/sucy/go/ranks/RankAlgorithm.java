package com.sucy.go.ranks;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.config.Config;
import com.sun.xml.internal.fastinfoset.Encoder;

import java.io.BufferedWriter;
import java.io.FileOutputStream;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.RankAlgorithm
 */
public abstract class RankAlgorithm {
    private static final Set<String> LEGENDARIES = new HashSet<>(Arrays.asList(
            "Giratina", "Dialga", "Palkia", "Kyogre", "Arceus", "Rayquaza", "Groudon",
            "Ho-Oh", "Regigigas", "Lugia", "Mewtwo", "Heatran", "Regirock", "Jirachi",
            "Regice", "Cresselia", "Latias", "Entei", "Manaphy", "Latios", "Moltres",
            "Raikou", "Zapdos", "Mesprit", "Celebi", "Articuno", "Suicune", "Registeel",
            "Mew", "Uxie", "Darkrai", "Azelf", "Deoxys Defense Form", "Deoxys Attack Form",
            "Deoxys Speed Form", "Deoxys"
    ));

    public void rank(final List<Pokemon> pokemonList) {
        final List<RankResult> rankList = new ArrayList<>();
        final List<RankRange> rangeList = new ArrayList<>();
        pokemonList.forEach(pokemon -> {
            final List<RankResult> pokemonResults = new ArrayList<>();

            final RankRange range = new RankRange();
            range.pokemon = pokemon.name;
            range.min = Integer.MAX_VALUE;
            range.max = Integer.MIN_VALUE;

            pokemon.quickMoves.forEach(quickMove -> {
                pokemon.chargeMoves.forEach(chargeMove -> {
                    final RankResult rankResult = new RankResult();
                    rankResult.pokemon = pokemon.name;
                    rankResult.quickMove = quickMove.name;
                    rankResult.chargeMove = chargeMove.name;
                    rankList.add(rankResult);
                    pokemonResults.add(rankResult);

                    int value = compute(pokemon, quickMove, chargeMove);
                    rankResult.rank = value;

                    range.min = Math.min(range.min, value);
                    range.max = Math.max(range.max, value);
                });
            });

            rangeList.add(range);

            persistResults(pokemonResults, "pokemon/" + pokemon.name + ".txt");
        });

        persistRange(rangeList, "Ranges");
        persistResults(rankList, "All Movesets");
        persistRange(
                rangeList.stream().filter(rank -> !LEGENDARIES.contains(rank.pokemon)).collect(Collectors.toList()),
                "Ranges (no legends)");
        persistResults(
                rankList.stream().filter(rank -> !LEGENDARIES.contains(rank.pokemon)).collect(Collectors.toList()),
                "All Movesets (no legends)");
    }

    private void persistRange(final List<RankRange> results, final String file) {
        results.sort(RankRange::compareTo);
        final int max = results.get(0).max;
        final double multiplier = isPercentage() ? 100.0 / max : 1;
        final StringBuilder builder = new StringBuilder();
        for (RankRange result : results) {
            builder.append("[")
                    .append((int) (result.min * multiplier))
                    .append("-")
                    .append((int) (result.max * multiplier))
                    .append("] ")
                    .append(result.pokemon)
                    .append("\r\n");
        }
        writeToFile(builder.toString(), "ranks/" + getName() + "/" + file);
    }

    private void persistResults(final List<RankResult> results, final String file) {
        results.sort(RankResult::compareTo);
        final int max = results.get(0).rank;
        final double multiplier = isPercentage() ? 100.0 / max : 1;
        final StringBuilder builder = new StringBuilder();
        for (RankResult result : results) {
            builder.append("[")
                    .append((int) (result.rank * multiplier))
                    .append("] ")
                    .append(result.pokemon)
                    .append(" / ")
                    .append(result.quickMove)
                    .append(" / ")
                    .append(result.chargeMove)
                    .append("\r\n");
        }
        writeToFile(builder.toString(), "ranks/" + getName() + "/" + file);
    }

    private void writeToFile(final String data, final String file) {
        new Config(file);
        try (final FileOutputStream out = new FileOutputStream(file)) {
            try (final OutputStreamWriter outWriter = new OutputStreamWriter(out, Encoder.UTF_8)) {
                try (final BufferedWriter writer = new BufferedWriter(outWriter)) {
                    writer.write(data);
                }
            }
        } catch (final Exception ex) {
            System.out.println("Failed to write to file " + file);
        }
    }

    public abstract String getName();
    public abstract int compute(final Pokemon pokemon, final Move quickMove, final Move chargeMove);
    public boolean isPercentage() { return true; }

    protected float calcMoveDps(final Pokemon pokemon, final Move quickMove, final Move chargeMove) {
        float quickStab = pokemon.types.contains(quickMove.type) ? 1.25f : 1;
        float chargeStab = pokemon.types.contains(chargeMove.type) ? 1.25f : 1;

        float quickDps = 1000 * quickMove.pow * quickStab / quickMove.ms;
        float quickTime = 100 / quickMove.eps;

        return (quickDps * quickTime + chargeStab * chargeMove.pow * chargeMove.bars)
                / (quickTime + (chargeMove.ms / 1000) * chargeMove.bars);
    }
}
