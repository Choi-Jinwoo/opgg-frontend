import theme from '@src/styles/theme';
import ConditionalColor from './ConditionalColor';

export class KDARateColorCondition implements ConditionalColor<number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pick(): string {
    if (this.value >= 5) return theme.colors.orange;
    if (this.value >= 4) return theme.colors.blue;
    if (this.value >= 3) return theme.colors.green;

    return theme.colors.black;
  }
}
