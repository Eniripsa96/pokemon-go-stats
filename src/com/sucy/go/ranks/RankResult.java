package com.sucy.go.ranks;

import java.util.Comparator;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.RankResult
 */
public class RankResult implements Comparable<RankResult> {
    public String pokemon;
    public String quickMove;
    public String chargeMove;
    public int     rank;

    @Override
    public int compareTo(final RankResult o) {
        return COMPARATOR.compare(this, o);
    }

    private static final Comparator<RankResult> COMPARATOR =
            Comparator.<RankResult>comparingInt(r -> -r.rank)
                    .thenComparing(r -> r.pokemon)
                    .thenComparing(r -> r.chargeMove)
                    .thenComparing(r -> r.quickMove);
}
