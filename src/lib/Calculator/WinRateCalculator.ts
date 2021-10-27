import Calculator from './Calculator';

class WinRateCalculator implements Calculator {
  constructor(private wins: number, private games: number) {}

  calculate(): number {
    return Math.round((this.wins / this.games) * 100);
  }
}

export default WinRateCalculator;
