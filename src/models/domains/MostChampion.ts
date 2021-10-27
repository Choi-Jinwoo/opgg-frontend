import KDACalculator from '@src/lib/Calculator/KDACalculator';
import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import KDA from '../KDA';
import WinRate from '../WinRate';
import { ChampionAttributes } from './Champion';

export class MostChampionAttributes extends ChampionAttributes {
  cs: number;
  rank: number;

  constructor(mostChampion: MostChampionAttributes) {
    super(mostChampion);
    this.cs = mostChampion.cs;
    this.rank = mostChampion.rank;
  }
}

class MostChampion extends MostChampionAttributes implements KDA, WinRate {
  static from(mostChampion: MostChampionAttributes): MostChampion {
    return new MostChampion(mostChampion);
  }

  /**
   * @deprecated
   */
  get kda(): string {
    if (this.deaths === 0) return 'Perfect';

    return ((this.kills + this.assists) / this.deaths).toFixed(2);
  }

  /**
   * @deprecated
   */
  get winningRate(): string {
    return ((this.wins / this.games) * 100).toFixed(0);
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

  /**
   * @deprecated
   */
  get killsAvg(): string {
    return (this.kills / this.games).toFixed(1);
  }

  /**
   * @deprecated
   */
  get deathsAvg(): string {
    return (this.deaths / this.games).toFixed(1);
  }

  /**
   * @deprecated
   */
  get assistsAvg(): string {
    return (this.assists / this.games).toFixed(1);
  }
}

export default MostChampion;
