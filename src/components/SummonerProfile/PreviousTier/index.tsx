import { TierRank } from '@src/models/domains/Summoner';
import React from 'react';
import styled from 'styled-components';
import TierBadge from '../TierBadge';

type Props = {
  tiers: TierRank[];
};

const PreviousTiers: React.FC<Props> = ({ tiers }) => {
  const iterBadgeItems = tiers.map((tier, index) => (
    <TierBadge key={index} tier={tier} />
  ));

  return <Container>{iterBadgeItems}</Container>;
};

const Container = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

export default PreviousTiers;
