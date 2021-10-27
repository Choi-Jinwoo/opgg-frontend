import KDA from '../KDA';
import WinRate from '../WinRate';

class ChampionAttributes {
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

  get kdaRate(): number {}

  get winRate(): number {
    throw new Error('Method not implemented.');
  }
}

export default Champion;
