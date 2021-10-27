import WinRateCalculator from '@src/lib/Calculator/WinRateCalculator';
import WinRate from '../WinRate';

export enum Positions {
  TOP = 'TOP',
  JNG = 'JNG',
  MID = 'MID',
  ADC = 'ADC',
  SUP = 'SUP',
}

export type SummonerPositionAttrs = {
  games: number;
  wins: number;
  losses: number;
  position: Positions;
  positionName: string;
};

class SummonerPosition implements WinRate {
  games: number;
  wins: number;
  losses: number;
  position: Positions;
  positionName: string;

  static from(summonerPosition: SummonerPositionAttrs): SummonerPosition {
    return new SummonerPosition(summonerPosition);
  }

  constructor(summonerPosition: SummonerPositionAttrs) {
    this.games = summonerPosition.games;
    this.wins = summonerPosition.wins;
    this.losses = summonerPosition.losses;
    this.position = summonerPosition.position;
    this.positionName = summonerPosition.positionName;
  }

  get winRate(): string {
    return new WinRateCalculator(this.wins, this.games).calculate().toFixed(0);
  }
}

export default SummonerPosition;
