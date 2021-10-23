export enum Positions {
  TOP = 'TOP',
  JNG = 'JNG',
  MID = 'MID',
  ADC = 'ADC',
  SUP = 'SUP',
}

export class SummonerPositionAttributes {
  games!: number;
  wins!: number;
  losses!: number;
  position!: Positions;
  positionName!: string;

  constructor(summonerPosition: SummonerPositionAttributes) {
    this.games = summonerPosition.games;
    this.wins = summonerPosition.wins;
    this.losses = summonerPosition.losses;
    this.position = summonerPosition.position;
    this.positionName = summonerPosition.positionName;
  }
}

class SummonerPosition extends SummonerPositionAttributes {
  static from(summonerPosition: SummonerPositionAttributes): SummonerPosition {
    return new SummonerPosition(summonerPosition);
  }

  get winningRate(): string {
    return ((this.wins / this.games) * 100).toFixed(0);
  }
}
export default SummonerPosition;
