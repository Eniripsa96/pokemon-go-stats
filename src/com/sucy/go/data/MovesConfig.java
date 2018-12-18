package com.sucy.go.data;

import com.sucy.go.Move;
import com.sucy.go.Type;
import com.sucy.go.config.Config;
import com.sucy.go.config.parse.Data;
import com.sucy.go.config.parse.JSONParser;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * PokemonGo © 2018
 * com.sucy.go.data.MovesConfig
 */
public class MovesConfig {
  private static final String
    POWER      = "pow",
    MS         = "ms",
    EPS        = "eps",
    BARS       = "bars",
    TYPE       = "type",
    PVP_POWER  = "pvpPower",
    PVP_ENERGY = "pvpEnergy",
    PVP_TURNS  = "pvpTurns";

  private Map<String, Move> moves = new HashMap<>();

  public MovesConfig() {
    final Data data = new Config("moves").getContents();
    for (final String key : data.keys()) {
      final Data moveData = data.getSection(key);
      final Move move = new Move();
      move.name = key;
      move.pow = moveData.getInt(POWER);
      move.ms = moveData.getInt(MS);
      move.eps = moveData.getFloat(EPS);
      move.bars = moveData.getInt(BARS);
      move.type = Type.valueOf(moveData.getString(TYPE));
      move.pvpPower = moveData.getInt(PVP_POWER);
      move.pvpEnergy = moveData.getInt(PVP_ENERGY);
      move.pvpTurns = moveData.getInt(PVP_TURNS);
      addMove(move);
    }
  }

  public Collection<Move> getMoves() {
    return moves.values();
  }

  public Move getMove(final String name) {
    return moves.get(name.toLowerCase());
  }

  public void addMove(final Move move) {
    moves.put(move.name.toLowerCase(), move);
  }

  public void save() {
    final Config config = new Config("moves");
    final Data data = config.getContents();
    data.clear();

    for (final Move move : moves.values()) {
      final Data moveData = data.createSection(move.name);
      moveData.set(POWER, move.pow);
      moveData.set(MS, move.ms);
      moveData.set(EPS, move.eps);
      moveData.set(BARS, move.bars);
      moveData.set(TYPE, move.type.name());
      moveData.set(PVP_POWER, move.pvpPower);
      moveData.set(PVP_TURNS, move.pvpTurns);
      moveData.set(PVP_ENERGY, move.pvpEnergy);
    }

    config.save();
    JSONParser.save(config.getContents(), "config/moves.json");
  }
}
