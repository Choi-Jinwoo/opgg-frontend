import KDACalculator from '@src/lib/Calculator/KDACalculator';
import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import KDA from '../KDA';
import WinRate from '../WinRate';
import Champion, { ChampionAttrs } from './Champion';

export type UsedChampionAttrs = ChampionAttrs & {
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;
};

class UsedChampion extends Champion implements KDA, WinRate {
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;

  static from(champion: UsedChampionAttrs): Champion {
    return new UsedChampion(champion);
  }

  constructor(usedChampion: UsedChampionAttrs) {
    super(usedChampion);
    this.games = usedChampion.games;
    this.kills = usedChampion.kills;
    this.deaths = usedChampion.deaths;
    this.assists = usedChampion.assists;
    this.wins = usedChampion.wins;
    this.losses = usedChampion.losses;
  }

  get kdaRate(): number {
    return new KDACalculator(this.kills, this.deaths, this.assists).calculate();
  }

  get winRate(): number {
    return new WinRateCalculator(this.wins, this.games).calculate();
  }

  get avgKills(): number {
    return Math.round((this.kills / this.games) * 10) / 10;
  }

  get avgDeaths(): number {
    return Math.round((this.deaths / this.games) * 10) / 10;
  }

  get avgAssists(): number {
    return Math.round((this.assists / this.games) * 10) / 10;
  }
}

export default UsedChampion;
