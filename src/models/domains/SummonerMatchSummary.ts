import KDACalculator from '@src/lib/Calculator/KDACalculator';
import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import KDA from '../KDA';
import WinRate from '../WinRate';

export type SummonerMatchSummaryAttrs = {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;
};

class SummonerMatchSummary implements KDA, WinRate {
  wins: number;
  losses: number;
  kills: number;
  deaths: number;
  assists: number;

  static from(
    summonerMatchSummary: SummonerMatchSummaryAttrs,
  ): SummonerMatchSummary {
    return new SummonerMatchSummary(summonerMatchSummary);
  }

  constructor(summonerMatchSummary: SummonerMatchSummaryAttrs) {
    this.wins = summonerMatchSummary.wins;
    this.losses = summonerMatchSummary.losses;
    this.kills = summonerMatchSummary.kills;
    this.deaths = summonerMatchSummary.deaths;
    this.assists = summonerMatchSummary.assists;
  }

  get games(): number {
    return this.wins + this.losses;
  }

  get winRate(): number {
    return new WinRateCalculator(this.wins, this.games).calculate();
  }

  get kdaRate(): number {
    return new KDACalculator(this.kills, this.deaths, this.assists).calculate();
  }
}

export default SummonerMatchSummary;
