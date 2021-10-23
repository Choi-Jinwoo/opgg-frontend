import React from 'react';
import ConditionalColor from '@src/lib/conditionalColor/conditionalColor';
import styled from 'styled-components';

type Props = {
  conditionalColor: ConditionalColor;
  value: unknown;
};

const ConditionalColorFont: React.FC<Props> = ({
  children,
  conditionalColor,
  value,
}) => {
  const color = conditionalColor.pick(value);

  return <Container color={color}>{children}</Container>;
};

type ContainerProps = {
  color: string;
};

const Container = styled.span<ContainerProps>`
  color: ${(props) => props.color} !important;
`;

export default ConditionalColorFont;
