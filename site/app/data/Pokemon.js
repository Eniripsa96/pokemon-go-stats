class Pokemon {
  constructor(key, config, moves) {
    this.name = key;
    this.health = config.hp;
    this.attack = config.atk;
    this.defense = config.def;
    this.specialAttack = config.spAtk;
    this.specialDefense = config.spDef;
    this.speed = config.speed;
    this.quickMoves = config.quickMoves.map(name => moves[name]);
    this.chargeMoves = config.chargeMoves.map(name => moves[name]);
    this.types = config.types;
    this.atkIv = 15;
    this.defIv = 15;
    this.staIv = 15;

    const higherAtk = Math.max(this.attack, this.specialAttack);
    const lowerAtk = Math.min(this.attack, this.specialAttack);
    console.log(this.name + ' - ' + this.getAttack() + ' / ' + this.getDefense() + ' / ' + this.getStamina() + " : " + (Math.round(2 * (7 * higherAtk / 8 + lowerAtk / 8))));
  }

  getAttack() {
    const higherAtk = Math.max(this.attack, this.specialAttack);
    const lowerAtk = Math.min(this.attack, this.specialAttack);
    const scaledAttack = Math.round(2 * (7 * higherAtk / 8 + lowerAtk / 8));
    return Math.round(scaledAttack * this.getSpeedMod() + this.atkIv);
  }

  getStamina() {
    return (this.health * 1.75 + 50 + this.staIv) | 0
  }

  getDefense() {
    const higherDef = Math.max(this.defense, this.specialDefense);
    const lowerDef = Math.min(this.defense, this.specialDefense);
    const scaledDefense = Math.round(2 * (5 * higherDef / 8 + 3 * lowerDef / 8));
    return Math.round(scaledDefense * this.getSpeedMod() + this.defIv);
  }

  getSpeedMod() {
    return 1 + (this.speed - 75) / 500;
  }
}

export default Pokemon
