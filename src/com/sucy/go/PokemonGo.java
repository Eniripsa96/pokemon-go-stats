package com.sucy.go;

import com.sucy.go.data.MovesConfig;
import com.sucy.go.data.PokemonConfig;
import com.sucy.go.ranks.Ranking;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

/**
 * PokemonGo © 2018
 * com.sucy.go.PokemonGo
 */
public class PokemonGo {
    private static final Scanner scanner = new Scanner(System.in);

    private static final MovesConfig   MOVES   = new MovesConfig();
    private static final PokemonConfig POKEMON = new PokemonConfig(MOVES);

    public static void main(final String[] args) {

      MOVES.getMoves().forEach(move -> {
        if (move.pvpPower == 0) promptPvp(move);
      });

        System.out.println("Skip entering pokemon");
        if (scanner.nextLine().contains("n")) {
            prompt();
        }

        MOVES.save();
        POKEMON.save();
        for (final Ranking ranking : Ranking.values()) {
            ranking.getAlgorithm().rank(POKEMON.getPokemon());
        }
    }

    private static void prompt() {
        final Pokemon pokemon = new Pokemon();

        pokemon.name = prompt("Name");
        while (POKEMON.getPokemon(pokemon.name) != null) {
            System.out.println("Already entered.");
            pokemon.name = prompt("Name");
        }
        pokemon.health = promptInt("Health");
        pokemon.attack = promptInt("Attack");
        pokemon.defense = promptInt("Defense");
        pokemon.specialAttack = promptInt("Special Attack");
        pokemon.specialDefense = promptInt("Special Defense");
        pokemon.speed = promptInt("Speed");

        final Type firstType = promptType("Type");
        if (prompt("Dual type").toLowerCase().contains("y")) {
            pokemon.types = Arrays.asList(firstType, promptType("Second Type"));
        } else {
            pokemon.types = Collections.singletonList(firstType);
        }

        pokemon.quickMoves = promptMoves("Quick move");
        pokemon.chargeMoves = promptMoves("Charge move");

        POKEMON.addPokemon(pokemon);

        System.out.println("Pokemon registered.");
        if (prompt("Another").toLowerCase().contains("y")) {
            prompt();
        }
    }

    private static List<Move> promptMoves(final String text) {
        final List<Move> moves = new ArrayList<>();
        String moveName = prompt(text);
        while (!moveName.trim().isEmpty() || moves.isEmpty()) {
            final Move move = MOVES.getMove(moveName);
            if (move != null) {
                moves.add(move);
                moveName = prompt(text);
            } else if (moveName.trim().isEmpty()) {
                moveName = prompt(text);
            } else {
                moves.add(promptMove(moveName));
                moveName = prompt(text);
            }
        }
        return moves;
    }

    private static Move promptMove(final String name) {
        final Move move = new Move();
        move.name = name.trim();
        move.pow = promptInt("> Power");
        move.ms = promptInt("> MS");
        move.eps = promptFloat("> EPS");
        move.bars = promptInt("> Bars");
        move.type = promptType("> Move type");
        move.pvpPower = promptInt("> PVP Power");
        move.pvpEnergy = promptInt("> PVP Energy");
        move.pvpTurns = promptInt("> PVP Turns");
        MOVES.addMove(move);
        return move;
    }

    private static Move promptPvp(final Move move) {
      System.out.println("-= PVP update for " + move.name + " =-");
      move.pvpPower = promptInt("PVP Power");
      move.pvpEnergy = promptInt("PVP Energy");
      move.pvpTurns = promptInt("PVP Turns");
      return move;
    }

    private static Type promptType(final String text) {
        try {
            return Type.valueOf(prompt(text).toUpperCase());
        } catch (IllegalArgumentException ex) {
            System.out.println("That is not a valid type.");
            return promptType(text);
        }
    }

    private static float promptFloat(final String text) {
        try {
            return Float.parseFloat(prompt(text));
        } catch (NumberFormatException ex) {
            System.out.println("That is not a number.");
            return promptFloat(text);
        }
    }

    private static int promptInt(final String text) {
        return (int) promptFloat(text);
    }

    private static String prompt(final String text) {
        System.out.print(text + ": ");
        return scanner.nextLine();
    }
}
