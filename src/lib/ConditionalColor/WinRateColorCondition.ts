import theme from '@src/styles/theme';
import ConditionalColor from './ConditionalColor';

class WinRateColorCondition implements ConditionalColor<number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pick(): string {
    if (this.value >= 60) return theme.colors.red;

    return theme.colors.black;
  }
}

export default WinRateColorCondition;
