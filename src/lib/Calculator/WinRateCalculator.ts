import Calculator from './Calculator';

/**
 * 승률 계산
 */
class WinRateCalculator implements Calculator {
  constructor(private wins: number, private games: number) {}

  calculate(): number {
    if (this.games === 0) return 0;

    return (this.wins / this.games) * 100;
  }
}

export default WinRateCalculator;
