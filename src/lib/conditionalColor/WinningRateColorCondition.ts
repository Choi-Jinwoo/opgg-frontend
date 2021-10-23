import theme from '@src/styles/theme';
import ConditionalColor from './conditionalColor';

class WinningRateColorCondition implements ConditionalColor {
  pick(data: number): string {
    if (data >= 60) return theme.colors.red;

    return theme.colors.black;
  }
}

export default new WinningRateColorCondition();
