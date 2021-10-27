export class RecentChampionAttributes {
  id: number;
  key: string;
  name: string;
  imageUrl: string;
  wins: number;
  losses: number;

  constructor(recentChampion: RecentChampionAttributes) {
    this.id = recentChampion.id;
    this.key = recentChampion.key;
    this.name = recentChampion.name;
    this.imageUrl = recentChampion.imageUrl;
    this.wins = recentChampion.wins;
    this.losses = recentChampion.losses;
  }
}

class RecentChampion extends RecentChampionAttributes {
  static from(recentChampion: RecentChampionAttributes): RecentChampion {
    return new RecentChampion(recentChampion);
  }

  get winningRate(): string {
    return ((this.wins / (this.wins + this.losses)) * 100).toFixed(0);
  }

  get games(): number {
    return this.wins + this.losses;
  }
}

export default RecentChampion;
