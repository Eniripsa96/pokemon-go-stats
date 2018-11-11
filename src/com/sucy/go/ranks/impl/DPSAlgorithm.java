package com.sucy.go.ranks.impl;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.ranks.RankAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.impl.DPSAlgorithm
 */
public class DPSAlgorithm extends RankAlgorithm {
    @Override
    public String getName() {
        return "dps";
    }

    @Override
    public int compute(
            final Pokemon pokemon, final Move quickMove, final Move chargeMove) {

        float moveDps = calcMoveDps(pokemon, quickMove, chargeMove);
        return (int)(10000 * pokemon.attack() * moveDps);
    }
}
