import Calculator from './Calculator';

class KDACalculator implements Calculator {
  constructor(
    private kills: number,
    private deaths: number,
    private assists: number,
  ) {}

  calculate(): number {
    if (this.deaths === 0) return 0;

    return Math.round((this.kills + this.assists) / this.deaths) / 100;
  }
}

export default KDACalculator;
