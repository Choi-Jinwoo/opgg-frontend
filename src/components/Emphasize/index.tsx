import { FontWeight } from '@src/styles/types';
import React from 'react';
import styled from 'styled-components';

type Props = {
  fontWeight?: FontWeight;
  color?: string;
};

const Emphasize: React.FC<Props> = ({
  children,
  fontWeight = 'bold',
  color = '',
}) => {
  return (
    <Strong fontWeight={fontWeight} color={color}>
      {children}
    </Strong>
  );
};

type StrongProps = {
  fontWeight: FontWeight;
  color: string;
};

const Strong = styled.strong<StrongProps>`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export default Emphasize;
