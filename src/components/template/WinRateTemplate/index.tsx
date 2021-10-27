import WinRateColorCondition from '@src/lib/ConditionalColor/WinRateColorCondition';
import React from 'react';
import styled from 'styled-components';

type Props = {
  winRate: number;
};

const WinRateTemplate: React.FC<Props> = ({ winRate }) => {
  return (
    <Container color={new WinRateColorCondition(winRate).pick()}>
      {winRate}%
    </Container>
  );
};

const Container = styled.span`
  color: ${(props) => props.color};
`;

export default WinRateTemplate;
