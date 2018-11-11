package com.sucy.go.ranks.impl;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.ranks.RankAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.impl.CPAlgorithm
 */
public class CPAlgorithm extends RankAlgorithm {
    private static final double MAX_CPM = 0.79030001;

    @Override
    public String getName() {
        return "cp";
    }

    @Override
    public int compute(
            final Pokemon pokemon, final Move quickMove, final Move chargeMove) {
        return (int)(pokemon.attack() * Math.sqrt(pokemon.defense()) * Math.sqrt(pokemon.stamina()) * MAX_CPM * MAX_CPM / 10);
    }

    @Override
    public boolean isPercentage() {
        return false;
    }
}
