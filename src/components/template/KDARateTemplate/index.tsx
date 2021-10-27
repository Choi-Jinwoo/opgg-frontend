import { KDARateColorCondition } from '@src/lib/ConditionalColor/KDARateColorCondition';
import React from 'react';
import styled from 'styled-components';

type Props = {
  kdaRate: number;
};

const KDARateTemplate: React.FC<Props> = ({ kdaRate }) => {
  if (kdaRate === 0) {
    return (
      <Container color={new KDARateColorCondition(kdaRate).pick()}>
        Perfect
      </Container>
    );
  }

  return (
    <Container color={new KDARateColorCondition(kdaRate).pick()}>
      {kdaRate}
    </Container>
  );
};

const Container = styled.span`
  color: ${(props) => props.color};
`;

export default KDARateTemplate;
