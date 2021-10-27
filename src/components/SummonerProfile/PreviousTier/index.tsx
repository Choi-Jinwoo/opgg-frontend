import TierRank from '@src/models/domains/TierRank';
import React from 'react';
import styled from 'styled-components';
import TierBadge from '../TierBadge';

type Props = {
  tiers: TierRank[];
};

const PreviousTiers: React.FC<Props> = ({ tiers }) => {
  const tierBadges = tiers.map((tier, index) => (
    <TierBadge key={index} tier={tier} />
  ));

  return <Container>{tierBadges}</Container>;
};

const Container = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export default PreviousTiers;
