import React from 'react';
import styled from 'styled-components';
import theme from '@/styles/theme';
import { FontWeight } from '@/styles/types';

type Props = {
  color?: string;
  fontSize?: string;
  fontWeight?: FontWeight;
};

const Heading: React.FC<Props> = ({
  children,
  color = theme.colors.black,
  fontSize = theme.fontSizes.large,
  fontWeight = 'bold',
}) => {
  return (
    <StyledHeading color={color} fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </StyledHeading>
  );
};

const StyledHeading = styled.h1<{
  color: string;
  fontSize: string;
  fontWeight: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;

export default Heading;
