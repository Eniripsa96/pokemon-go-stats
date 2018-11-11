package com.sucy.go.ranks.impl;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.ranks.RankAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.impl.DefenseAlgorithm
 */
public class DefenseAlgorithm extends RankAlgorithm {
    @Override
    public String getName() {
        return "defenders";
    }

    @Override
    public int compute(
            final Pokemon pokemon, final Move quickMove, final Move chargeMove) {

        double moveRating = 0.1 * (quickMove.pow * 5 + chargeMove.pow * chargeMove.bars);
        return (int)(moveRating * pokemon.attack() * pokemon.defense() * pokemon.stamina());
    }
}
