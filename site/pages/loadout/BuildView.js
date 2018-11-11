import React from 'react';
import Card, {CardContent} from 'material-ui/Card';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import {format} from 'app/utils';
import {Stat as Stat} from "app/data/Mod";

const BuildView = ({build}) => {
  const { weapon } = build;
  const data = weapon.data;

  return <Card>
    <CardContent>
      <h2>{`${data.name} (${format(build.dps, 0)} DPS)`}</h2>
      <Table>
        {createHeader([ 'Stat', 'Base', 'Modded' ])}
        <TableBody>
          <TableRow>
            <TableCell>Damage</TableCell>
            <TableCell>
              <ul>
                {formatDmg('Impact', data.impact)}
                {formatDmg('Puncture', data.puncture)}
                {formatDmg('Slash', data.slash)}
                {formatDmg('Elemental', data.element)}
              </ul>
            </TableCell>
            <TableCell>
              <ul>
                {formatDmg('Impact', build.iDmg)}
                {formatDmg('Puncture', build.pDmg)}
                {formatDmg('Slash', build.sDmg)}
                {formatDmg('Elemental', build.eDmg)}
              </ul>
            </TableCell>
          </TableRow>
          {formatRow('Fire Rate', data.rate, build.get(Stat.RATE, 1), 1)}
          {formatRow('Magazine', data.mag, build.get(Stat.MAGAZINE_SIZE, 1))}
          {formatRow('Reload Speed', data.reload, build.getInverse(Stat.RELOAD_SPEED), 1)}
          {formatRow('Multishot', 1, build.get(Stat.MULTISHOT, 1), 1)}
          {formatRow('Crit Chance', data.crit, build.get(Stat.CRIT_CHANCE, 1), 0, '%', 100)}
          {formatRow('Crit Damage', data.critM, build.get(Stat.CRIT_DAMAGE, 1), 1, 'x')}
          {formatRow('Status Chance', data.status, build.get(Stat.STATUS_CHANCE, 1), 0, '%', 100)}
        </TableBody>
      </Table>

      <h3>Mods</h3>
      <Table>
        {createHeader([ 'Mod', 'Effectiveness' ])}
        <TableBody>
          {build.loadout
            .map((mod, i) => <TableRow key={mod.name}>
              <TableCell>{mod.name}</TableCell>
              <TableCell>{format((build.effectiveness[mod.name] || build.effectiveness[mod.stats.group]) * 100, 0)}%</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
      <h3>Procks</h3>
      <Table>
        {createHeader([ 'Prock Type', 'Chance', 'Avg. Effective Damage' ])}
        <TableBody>
          {build.procks.map(({source, chance, bonusChance, damage}) =>
            createRow(source, (1 - (1 - chance) * (1 - bonusChance)) * 100, 1, '%', damage, 0, ''))}
        </TableBody>
      </Table>
    </CardContent>
  </Card>
};

function createHeader(titles) {
  return <TableHead>
    <TableRow>
      {titles.map(title => <TableCell key={title}>{title}</TableCell>)}
    </TableRow>
  </TableHead>
}

function formatRow(name, before, after, decimals = 0, unit, factor) {
  if (factor) {
    before *= factor;
    after *= factor;
  }
  unit = unit || '';
  return createRow(name, before, decimals, unit, after, decimals, unit)
}

function createRow(name, first, firstDecimals, firstUnit, second, secondDecimals, secondUnit) {
  return <TableRow key={name}>
    <TableCell>{name}</TableCell>
    <TableCell>{format(first, firstDecimals) + firstUnit}</TableCell>
    <TableCell>{format(second, secondDecimals) + secondUnit}</TableCell>
  </TableRow>
}


function formatDmg(name, amount) {
  return amount > 0 ? <li>{`${format(amount, 1)} ${name}`}</li> : null;
}

export default BuildView;
