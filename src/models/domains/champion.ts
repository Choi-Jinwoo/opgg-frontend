import KDACalculator from '@src/lib/Calculator/KDACalculator';
import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import KDA from '../KDA';
import WinRate from '../WinRate';

export class ChampionAttributes {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  games: number;
  kills: number;
  deaths: number;
  assists: number;
  wins: number;
  losses: number;

  constructor(champion: ChampionAttributes) {
    this.id = champion.id;
    this.key = champion.key;
    this.name = champion.name;
    this.imageUrl = champion.imageUrl;
    this.games = champion.games;
    this.kills = champion.kills;
    this.deaths = champion.deaths;
    this.assists = champion.assists;
    this.wins = champion.wins;
    this.losses = champion.losses;
  }
}

class Champion extends ChampionAttributes implements KDA, WinRate {
  static from(champion: ChampionAttributes): Champion {
    return new Champion(champion);
  }

  constructor(champion: ChampionAttributes) {
    super(champion);
  }

  get winningRate() {
    return '0';
  }

  get kda() {
    return '0';
  }

  get kdaRate(): number {
    return new KDACalculator(this.kills, this.deaths, this.assists).calculate();
  }

  get winRate(): number {
    return new WinRateCalculator(this.wins, this.games).calculate();
  }
}

export default Champion;
