package com.sucy.go.ranks;

import java.util.Comparator;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.RankRange
 */
public class RankRange implements Comparable<RankRange> {
    public String pokemon;
    public int    min;
    public int    max;

    @Override
    public int compareTo(final RankRange o) {
        return COMPARATOR.compare(this, o);
    }

    private static final Comparator<RankRange> COMPARATOR =
            Comparator.<RankRange>comparingInt(r -> -r.max)
                    .thenComparingInt(r -> r.min)
                    .thenComparing(r -> r.pokemon);
}
