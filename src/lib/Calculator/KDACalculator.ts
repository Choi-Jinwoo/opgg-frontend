import Calculator from './Calculator';

/**
 * KDA 평점 계산
 */
class KDACalculator implements Calculator {
  constructor(
    private kills: number,
    private deaths: number,
    private assists: number,
  ) {}

  calculate(): number {
    if (this.deaths === 0) return 0;

    return (this.kills + this.assists) / this.deaths;
  }
}

export default KDACalculator;
