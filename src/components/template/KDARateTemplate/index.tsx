import KDARateColorCondition from '@src/lib/ConditionalColor/KDARateColorCondition';
import React from 'react';
import styled from 'styled-components';

type Props = {
  kdaRate: number;
  hasHighlight?: boolean;
  hasPostfix?: boolean;
};

const KDARateTemplate: React.FC<Props> = ({
  kdaRate,
  hasHighlight = true,
  hasPostfix = true,
}) => {
  const color = new KDARateColorCondition(kdaRate).pick();
  const postfix = hasPostfix ? ':1' : '';

  if (kdaRate === 0) {
    return <Container color={hasHighlight ? color : ''}>Perfect</Container>;
  }

  return (
    <Container color={hasHighlight ? color : ''}>
      {kdaRate.toFixed(2)}
      {postfix}
    </Container>
  );
};

const Container = styled.span`
  color: ${(props) => props.color};
`;

export default KDARateTemplate;
