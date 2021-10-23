import theme from '@src/styles/theme';
import ConditionalColor from './conditionalColor';

class KDAColorCondition implements ConditionalColor {
  pick(kda: number): string {
    if (kda >= 5) return theme.colors.orange;
    if (kda >= 4) return theme.colors.blue;
    if (kda >= 3) return theme.colors.green;

    return theme.colors.black;
  }
}

export default new KDAColorCondition();
