export class ChampionAttributes {
  id!: number;
  key!: string;
  name!: string;
  imageUrl!: string;
  games!: number;
  kills!: number;
  deaths!: number;
  assists!: number;
  wins!: number;
  losses!: number;

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

class Champion extends ChampionAttributes {
  static from(champion: ChampionAttributes): Champion {
    return new Champion(champion);
  }

  get winningRate(): string {
    return ((this.wins / this.games) * 100).toFixed(0);
  }

  get kda(): string {
    return (this.kills + this.assists / this.deaths).toFixed(2);
  }
}

export default Champion;
