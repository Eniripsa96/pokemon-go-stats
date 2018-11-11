class Move {
  constructor(key, config) {
    this.name = key;
    this.pow = config.pow;
    this.ms = config.ms;
    this.eps = config.eps;
    this.bars = config.bars;
    this.type = config.type;
  }
}

export default Move
