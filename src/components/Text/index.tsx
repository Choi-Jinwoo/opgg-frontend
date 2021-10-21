import React from 'react';
import theme from '@/styles/theme';
import styled from 'styled-components';
import { FontWeight } from '@/styles/types';

type Props = {
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeight;
};

const Text: React.FC<Props> = ({
  children,
  color = theme.colors.black,
  fontSize = theme.fontSizes.regular,
  fontWeight = 'normal',
}) => {
  return (
    <Span color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Span>
  );
};

const Span = styled.span<{
  color: string;
  fontSize: string;
  fontWeight: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export default Text;
