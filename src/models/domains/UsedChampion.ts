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

  static from(champion: UsedChampionAttrs): UsedChampion {
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
    return this.kills / this.games;
  }

  get avgDeaths(): number {
    return this.deaths / this.games;
  }

  get avgAssists(): number {
    return this.assists / this.games;
  }
}

export default UsedChampion;
