export class SummonerMatchSummaryAttributes {
  wins!: number;
  losses!: number;
  kills!: number;
  deaths!: number;
  assists!: number;

  constructor(summonerMatchSummary: SummonerMatchSummaryAttributes) {
    this.wins = summonerMatchSummary.wins;
    this.losses = summonerMatchSummary.losses;
    this.kills = summonerMatchSummary.kills;
    this.deaths = summonerMatchSummary.deaths;
    this.assists = summonerMatchSummary.assists;
  }
}

export default class SummonerMatchSummary extends SummonerMatchSummaryAttributes {
  static from(
    summonerMatchSummary: SummonerMatchSummaryAttributes,
  ): SummonerMatchSummary {
    return new SummonerMatchSummary(summonerMatchSummary);
  }

  get kda(): string {
    return ((this.assists + this.kills) / this.deaths).toFixed(2);
  }

  get winningRate(): string {
    return ((this.wins / (this.wins + this.losses)) * 100).toFixed(0);
  }

  get totalGames(): number {
    return this.wins + this.losses;
  }
}
