import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import WinRate from '../WinRate';
import Champion, { ChampionAttrs } from './Champion';

export type RecentChampionAttrs = ChampionAttrs & {
  wins: number;
  losses: number;
};

class RecentChampion extends Champion implements WinRate {
  wins: number;
  losses: number;

  static from(recentChampion: RecentChampionAttrs): RecentChampion {
    return new RecentChampion(recentChampion);
  }

  constructor(recentChampion: RecentChampionAttrs) {
    super(recentChampion);
    this.wins = recentChampion.wins;
    this.losses = recentChampion.losses;
  }

  get winRate(): number {
    return new WinRateCalculator(this.wins, this.games).calculate();
  }

  get games(): number {
    return this.wins + this.losses;
  }
}

export default RecentChampion;
