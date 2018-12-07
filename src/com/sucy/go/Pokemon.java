package com.sucy.go;

import java.util.List;

/**
 * PokemonGo © 2018
 * com.sucy.go.Pokemon
 */
public class Pokemon {
    public String     name;
    public int        health;
    public int        attack;
    public int        defense;
    public int        specialAttack;
    public int        specialDefense;
    public int        speed;
    public List<Move> quickMoves;
    public List<Move> chargeMoves;
    public List<Type> types;

    public int attack() {
        final int higherAtk = Math.max(attack, specialAttack);
        final int lowerAtk = Math.min(attack, specialAttack);
        final double scaledAttack = Math.round(2 * (7 * higherAtk / 8 + lowerAtk / 8));
        return (int) Math.round(scaledAttack * speedMod() + 15);
    }

    public int stamina() {
        return (int) Math.floor(health * 1.75 + 65);
    }

    public int defense() {
        final int higherDef = Math.max(defense, specialDefense);
        final int lowerDef = Math.min(defense, specialDefense);
        final double scaledDefense = Math.round(2 * (5 * higherDef / 8 + 3 * lowerDef / 8));
        return (int) Math.round(scaledDefense * speedMod() + 15);
    }

    private double speedMod() {
        return 1 + (speed - 75) / 500.0;
    }
}
