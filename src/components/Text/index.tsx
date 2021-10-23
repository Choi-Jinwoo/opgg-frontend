import React from 'react';
import styled from 'styled-components';
import theme from '@src/styles/theme';
import { FontWeight } from '@src/styles/types';

type Props = {
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeight;
  // margin: pixel
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
};

const Text: React.FC<Props> = ({
  children,
  color = '',
  fontSize = theme.fontSizes.regular,
  fontWeight = '',
  marginLeft = 0,
  marginRight = 0,
  marginTop = 0,
  marginBottom = 0,
}) => {
  return (
    <Span
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      marginLeft={marginLeft}
      marginRight={marginRight}
      marginTop={marginTop}
      marginBottom={marginBottom}
    >
      {children}
    </Span>
  );
};

const Span = styled.span<{
  color: string;
  fontSize: string;
  fontWeight: string;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
}>`
  display: inline-block;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
  margin-top: ${(props) => props.marginTop}px;
  margin-bottom: ${(props) => props.marginBottom}px;
`;

export default Text;
