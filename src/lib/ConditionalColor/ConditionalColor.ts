/**
 * @description 조건부 색상 인터페이스
 */
interface ConditionalColor<T> {
  value: T;

  pick(): string;
}

export default ConditionalColor;
