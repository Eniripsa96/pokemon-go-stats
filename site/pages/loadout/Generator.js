import React, {Component} from 'react';
import Card, {CardContent} from 'material-ui/Card';

import DPSOptions from './DPSOptions';
import BuildView from './BuildView';
import {getWeapon, getWeapons} from 'app/data/Weapon';
import Mod, {getModsForWeapon, MOD_LIST, Stat, Type} from 'app/data/Mod';
import {format} from 'app/utils';
import WeaponBuild from "./model/WeaponBuild";
import {applyChanneling, applyMeleeCombo, restrictBerserker} from "pages/loadout/math/melee";
import {applySniperCombo} from "pages/loadout/math/sniper";
import {applyCrits, applyMultishot} from "pages/loadout/math/chance";
import {getCombinations} from "pages/loadout/math/combinations";
import {applyPhysicalProcks, buildStats, generateProcks, getElementOrderOptions} from "pages/loadout/math/status";

const WeaponSource = {
  slot: (item) => getWeapons().filter(weapon => weapon.data.slot == item.toUpperCase()),
  weapon: (item) => [getWeapon(item.replace('%20', ' '))]
};

class Generator extends Component {
  constructor(props) {
    super(props);

    const {match: {params: {type, item}}} = props;
    const source = WeaponSource[type];

    this.weapons = source(item);
    this.state = {results: {}, selectedResult: null, stat: 'DPS'};
  }

  /**
   * @returns {Component} the main loadout generation page
   */
  render() {
    return (
      <div id="generator">
        <aside>
          <DPSOptions weapon={this.weapons[0]} generate={this.generateAllBuilds}/>
        </aside>

        <main>
          {this.state.current
            ? <BuildView build={this.state.current}/>
            : null}
        </main>

        {this.state.builds && this.state.builds.length > 1 ? <aside>
          <Card>
            <CardContent>
              {this.state.builds
                .sort((a, b) => b.dps - a.dps)
                .map((build, i) => this.blockLink(i, `[${format(build.dps / 1000, 0) + 'k'}] ${build.weapon.data.name}`))}
            </CardContent>
          </Card>
        </aside> : null}
      </div>
    );
  }

  /**
   * @param {number} index - the array index of the weapon being shown
   * @param {string} text - the display name of the weapon
   * @returns {Component} text that shows the weapon build on click
   */
  blockLink(index, text) {
    return <div key={text}>
      <a onClick={() => this.setState(({builds}) => ({current: builds[index]}))}>{text}</a>
    </div>
  }

  /**
   * Generates a suggested mod loadout using the provided settings
   *
   * @param {object} settings - the options for generation. See {@link DPSOptions} for definition of the settings
   */
  generateAllBuilds = (settings) => {
    this.setState({progress: 0, target: MOD_LIST.length * this.weapons.length});
    const results = this.weapons.map(weapon => this.generateWeaponBuild(settings, weapon));
    this.setState({builds: results, current: results[0]});
  };

  generateWeaponBuild(settings, weapon) {
    const mods = this.getGroupedMods(weapon);
    const loadout = [];
    let best = null;
    const maxMods = Math.min(8, mods.length);
    for (let i = 0; i < maxMods; i++) {
      const builds = mods.map((mod, j) => ({
        index: j,
        build: this.expandGroupsAndBuildLoadouts(weapon, [...loadout, mod], settings)
          .reduce((a, b) => this.compare(a, b, settings))
      }));
      const { index, build } = builds.reduce((a, b) => this.compare(a, b, settings, x => x.build));

      const mod = mods[index];
      loadout.push(mod);
      if (!mod.quantity || !--mod.quantity) {
        mods.splice(index, 1);
      }
      best = build;
    }

    best.effectiveness = {};
    loadout.forEach((mod, i) => {
      const mods = loadout.slice();
      mods.splice(i, 1);
      const newBuild = this.expandGroupsAndBuildLoadouts(weapon, mods, settings)
        .reduce((a, b) => this.compare(a, b, settings));
      best.effectiveness[loadout[i].name || loadout[i].group] = best.dps / newBuild.dps - 1;
    });

    return best;
  }

  compare(a, b, settings, getter = x => x) {
    return getter(a).dps >= getter(b).dps ? a : b;
  }

  getGroupedMods(weapon) {
    const allMods = getModsForWeapon(weapon);
    const mods = [];
    const groups = {};
    allMods.forEach(mod => {
      const group = mod.stats.group;
      if (group) {
        (groups[group] = groups[group] || []).push(mod);
      } else {
        mods.push(mod);
      }
    });

    Object.keys(groups).forEach(group => this.generateGroupMod(mods, group, groups[group]));

    return mods;
  }

  generateGroupMod(target, group, mods) {
    if (mods.length) {
      const mod = new Mod(name, Type.ALL);
      mod.mods = mods;
      mod.group = group;
      mod.quantity = mods.length;
      target.push(mod);
    }
  }

  /**
   * Simulates a set of mods, determining average sustained DPS among
   * other statistics.
   *
   * @param {Weapon} weapon - the weapon generating a build for
   * @param {array} loadout - the list of mods to apply
   * @param {object} settings - generation settings
   * @returns {WeaponBuild[]} the simulated details
   */
  expandGroupsAndBuildLoadouts(weapon, loadout, settings) {
    const baseMods = loadout.filter(mod => !mod.mods);
    if (baseMods.length === loadout.length) {
      return this.buildLoadout(weapon, loadout, settings);
    }

    const groups = loadout.filter(mod => mod.mods).reduce((grouped, {group, mods}) => {
      (grouped[group] = (grouped[group] || {count: 0, mods})).count++;
      return grouped;
    }, {});

    const combinations = Object.keys(groups).map(group => getCombinations(groups[group].mods, groups[group].count));
    const builds = combinations.reduce((a, b) => a * b.length, 1);
    const results = [];
    for (let i = 0; i < builds; i++) {
      let path = i;
      const newLoadout = baseMods.slice();
      for (let j = 0; j < combinations.length; j++) {
        const combo = combinations[j];
        combo[path % combo.length].forEach(groupMod => newLoadout.push(groupMod));
        path = (path / combo.length) | 0;
      }
      this.buildLoadout(weapon, newLoadout, settings)
        .forEach(build => results.push(build));
    }

    return results;
  }

  buildLoadout(weapon, loadout, settings) {
    const common = new WeaponBuild(weapon, loadout);
    const context = buildStats(common);
    const elementOrders = this.generateElementOrders(common);

    return elementOrders.map(order => {
      const weaponBuild = new WeaponBuild(weapon, loadout);

      // Pandero special fire rate
      /*
      if (weapon.data.name === 'Pandero') {
        rate = (5.34 + 1.2 * Math.log(mag)) * weaponBuild.get('rate', 1);
      }*/

      // General bonuses
      applyCrits(weaponBuild, settings);

      // Sniper bonuses
      if (!weapon.isMelee()) {
        applyMultishot(weaponBuild);
        applySniperCombo(weaponBuild, settings);
      }

      // Melee bonuses
      if (weapon.isMelee()) {
        applyMeleeCombo(weaponBuild, settings);
        restrictBerserker(weaponBuild, settings);
        applyChanneling(weaponBuild, settings);
      }

      if (settings.statusProcks) {
        applyPhysicalProcks(weaponBuild, settings);
        generateProcks(context, order, weaponBuild.get(Stat.STATUS_CHANCE, 1) / weaponBuild.statusWeight)
          .forEach(prock => weaponBuild.procks.push(prock));
      }

      return weaponBuild;
    });
  }

  /**
   * @param {WeaponBuild} weaponBuild
   */
  generateElementOrders(weaponBuild) {
    const {weapon, elements} = weaponBuild;
    if (elements.has(weapon.data.elementType)) {
      elements.add("NONE", 0);
    }
    if (weapon.data.element > 0) {
      elements.add(weapon.data.elementType, 1);
    }
    const array = weaponBuild.elements.asArray(weaponBuild.baseDmg);
    return getElementOrderOptions(array);
  }
}

export default Generator;
