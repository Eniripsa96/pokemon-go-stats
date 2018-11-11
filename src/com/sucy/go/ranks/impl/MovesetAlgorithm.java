package com.sucy.go.ranks.impl;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.ranks.RankAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.impl.MovesetAlgorithm
 */
public class MovesetAlgorithm extends RankAlgorithm {
    @Override
    public String getName() {
        return "moveset";
    }

    @Override
    public int compute(
            final Pokemon pokemon, final Move quickMove, final Move chargeMove) {
        return (int)(calcMoveDps(pokemon, quickMove, chargeMove) * 100000);
    }
}
