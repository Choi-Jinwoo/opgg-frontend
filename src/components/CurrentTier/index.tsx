import summonerStore from '@src/stores/summonerStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled from 'styled-components';
import TierBox from './TierBox';
const CurrentTier = () => {
  const { summoner } = summonerStore;

  if (summoner === null) {
    return <div>없음</div>;
  }

  const [soloRank, freeRank] = summoner.leagues;

  return (
    <Container>
      <TierBox
        name={soloRank.tierRank.name}
        tier={soloRank.tierRank.tier}
        imageUrl={soloRank.tierRank.imageUrl}
        lp={soloRank.tierRank.lp}
        wins={soloRank.wins}
        loses={soloRank.losses}
      />
      <TierBox
        name={freeRank.tierRank.name}
        tier={freeRank.tierRank.tier}
        imageUrl={freeRank.tierRank.imageUrl}
        lp={freeRank.tierRank.lp}
        wins={freeRank.wins}
        loses={freeRank.losses}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > * + * {
    margin-top: 8px;
  }
`;

export default observer(CurrentTier);
