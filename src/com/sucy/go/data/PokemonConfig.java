package com.sucy.go.data;

import com.sucy.go.Pokemon;
import com.sucy.go.Type;
import com.sucy.go.config.Config;
import com.sucy.go.config.parse.Data;
import com.sucy.go.config.parse.JSONParser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * PokemonGo © 2018
 * com.sucy.go.data.PokemonConfig
 */
public class PokemonConfig {
    private static final String
            HP              = "hp",
            ATTACK          = "atk",
            DEFENSE         = "def",
            SPECIAL_ATTACK  = "spAtk",
            SPECIAL_DEFENSE = "spDef",
            SPEED           = "speed",
            QUICK_MOVES     = "quickMoves",
            CHARGE_MOVES    = "chargeMoves",
            TYPES           = "types";

    private final Map<String, Pokemon> pokemon = new HashMap<>();
    private final List<Pokemon> pokemonList = new ArrayList<>();

    private final MovesConfig movesConfig;

    public PokemonConfig(final MovesConfig movesConfig) {
        this.movesConfig = movesConfig;

        final Data data = new Config("pokemon").getContents();
        for (final String key : data.keys()) {
            final Data pokemonData = data.getSection(key);
            final Pokemon pokemon = new Pokemon();
            pokemon.name = key;
            pokemon.health = pokemonData.getInt(HP);
            pokemon.attack = pokemonData.getInt(ATTACK);
            pokemon.defense = pokemonData.getInt(DEFENSE);
            pokemon.specialAttack = pokemonData.getInt(SPECIAL_ATTACK);
            pokemon.specialDefense = pokemonData.getInt(SPECIAL_DEFENSE);
            pokemon.speed = pokemonData.getInt(SPEED);
            pokemon.quickMoves = pokemonData.getList(QUICK_MOVES).stream()
                    .map(movesConfig::getMove)
                    .collect(Collectors.toList());
            pokemon.chargeMoves = pokemonData.getList(CHARGE_MOVES).stream()
                    .map(movesConfig::getMove)
                    .collect(Collectors.toList());
            pokemon.types = pokemonData.getList(TYPES).stream()
                    .map(Type::valueOf)
                    .collect(Collectors.toList());
            addPokemon(pokemon);
        }
    }

    public List<Pokemon> getPokemon() {
        return pokemonList;
    }

    public Pokemon getPokemon(final String name) {
        return pokemon.get(name.toLowerCase());
    }

    public void addPokemon(final Pokemon pokemon) {
        this.pokemon.put(pokemon.name.toLowerCase(), pokemon);
        this.pokemonList.add(pokemon);
    }

    public void save() {
        final Config config = new Config("pokemon");
        final Data data = config.getContents();
        data.clear();

        for (final Pokemon pokemon : pokemon.values()) {
            final Data pokemonData = data.createSection(pokemon.name);
            pokemonData.set(HP, pokemon.health);
            pokemonData.set(ATTACK, pokemon.attack);
            pokemonData.set(DEFENSE, pokemon.defense);
            pokemonData.set(SPECIAL_ATTACK, pokemon.specialAttack);
            pokemonData.set(SPECIAL_DEFENSE, pokemon.specialDefense);
            pokemonData.set(SPEED, pokemon.speed);
            pokemonData.set(QUICK_MOVES, pokemon.quickMoves.stream()
                    .map(move -> move.name)
                    .collect(Collectors.toList()));
            pokemonData.set(CHARGE_MOVES, pokemon.chargeMoves.stream()
                    .map(move -> move.name)
                    .collect(Collectors.toList()));
            pokemonData.set(TYPES, pokemon.types.stream()
                    .map(Type::name)
                    .collect(Collectors.toList()));
        }

        config.save();
        JSONParser.save(config.getContents(), "config/pokemon.json");
    }
}
