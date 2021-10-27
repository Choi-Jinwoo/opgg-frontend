interface ConditionalColor<T> {
  value: T;

  pick(): string;
}

export default ConditionalColor;
