package com.sucy.go;

import com.sucy.go.data.MovesConfig;
import com.sucy.go.data.PokemonConfig;

import java.util.Scanner;

/**
 * PokemonGo © 2018
 * com.sucy.go.PokemonGo
 */
public class PokemonGoIv {
    private static final Scanner scanner = new Scanner(System.in);

    private static final MovesConfig   MOVES   = new MovesConfig();
    private static final PokemonConfig POKEMON = new PokemonConfig(MOVES);

    public static void main(final String[] args) {
      final Pokemon giratina = POKEMON.getPokemon("Kyogre");
        System.out.println(giratina.attack());
        System.out.println(giratina.defense());
        System.out.println(giratina.stamina());

        while (true) {
            final Pokemon pokemon = POKEMON.getPokemon(prompt("Pokemon"));
            final int hp = promptInt("HP IV");
            final int atk = promptInt("ATK IV");
            final int def = promptInt("DEF IV");

            final double best = pokemon.attack() * pokemon.defense() * pokemon.stamina();
            final double diff =
                    (pokemon.attack() - 15 + atk)
                            * (pokemon.defense() - 15 + def)
                            * (pokemon.stamina() - 15 + hp);

            final double percent = (int) (diff / best * 1000) / 10.0;

            System.out.println(percent + "% Effective");
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
