import theme from '@src/styles/theme';
import ConditionalColor from './ConditionalColor';

/**
 * @description KDA 평점에 따른 조건부 색상 조회
 */
class KDARateColorCondition implements ConditionalColor<number> {
  value: number;

  constructor(value: number) {
    this.value = value;
  }

  pick(): string {
    // KDA가 Perfect일 경우 0
    if (this.value === 0 || this.value >= 5) return theme.colors.orange;
    if (this.value >= 4) return theme.colors.blue;
    if (this.value >= 3) return theme.colors.green;

    return theme.colors.black;
  }
}

export default KDARateColorCondition;
