export class MostChampionAttributes {
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
  cs: number;
  rank: number;

  constructor(mostChampion: MostChampionAttributes) {
    this.id = mostChampion.id;
    this.key = mostChampion.key;
    this.name = mostChampion.name;
    this.imageUrl = mostChampion.imageUrl;
    this.games = mostChampion.games;
    this.kills = mostChampion.kills;
    this.deaths = mostChampion.deaths;
    this.assists = mostChampion.assists;
    this.wins = mostChampion.wins;
    this.losses = mostChampion.losses;
    this.cs = mostChampion.cs;
    this.rank = mostChampion.rank;
  }
}

class MostChampion extends MostChampionAttributes {
  static from(mostChampion: MostChampionAttributes): MostChampion {
    return new MostChampion(mostChampion);
  }

  get kda(): string {
    if (this.deaths === 0) return 'Perfect';

    return ((this.kills + this.assists) / this.deaths).toFixed(2);
  }

  get winningRate(): string {
    return ((this.wins / this.games) * 100).toFixed(0);
  }

  get killsAvg(): string {
    return (this.kills / this.games).toFixed(1);
  }

  get deathsAvg(): string {
    return (this.deaths / this.games).toFixed(1);
  }

  get assistsAvg(): string {
    return (this.assists / this.games).toFixed(1);
  }
}

export default MostChampion;
