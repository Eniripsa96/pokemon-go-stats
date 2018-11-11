package com.sucy.go.ranks;

import com.sucy.go.ranks.impl.CPAlgorithm;
import com.sucy.go.ranks.impl.DPSAlgorithm;
import com.sucy.go.ranks.impl.DefenseAlgorithm;
import com.sucy.go.ranks.impl.EffectivenessAlgorithm;
import com.sucy.go.ranks.impl.MovesetAlgorithm;

/**
 * PokemonGo © 2018
 * com.sucy.go.ranks.Ranking
 */
public enum Ranking {
    CP(new CPAlgorithm()),
    DEFENSE(new DefenseAlgorithm()),
    DPS(new DPSAlgorithm()),
    EFFECTIVENESS(new EffectivenessAlgorithm()),
    MOVESET(new MovesetAlgorithm());

    private final RankAlgorithm algorithm;
    Ranking(final RankAlgorithm algorithm) {
        this.algorithm = algorithm;
    }
    public RankAlgorithm getAlgorithm() {
        return algorithm;
    }
}
