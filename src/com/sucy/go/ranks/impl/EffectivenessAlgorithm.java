package com.sucy.go.ranks.impl;

import com.sucy.go.Move;
import com.sucy.go.Pokemon;
import com.sucy.go.ranks.RankAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.impl.EffectivenessAlgorithm
 */
public class EffectivenessAlgorithm extends RankAlgorithm {
    @Override
    public String getName() {
        return "effectiveness";
    }

    @Override
    public int compute(
            final Pokemon pokemon, final Move quickMove, final Move chargeMove) {
        final double dps = calcMoveDps(pokemon, quickMove, chargeMove);
        return (int)(dps * pokemon.attack() * pokemon.defense() * pokemon.stamina());
    }
}
