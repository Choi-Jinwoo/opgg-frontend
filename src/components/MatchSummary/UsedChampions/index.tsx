import React from 'react';
import { observer } from 'mobx-react';
import matchStore from '@src/stores/matchStore';
import UsedChampionItem from './UsedChampionItem';
import styled from 'styled-components';
import NoChampionData from './NoChampionData';
import UsedChampionsSkeletonUI from './UsedChampionsSkeletonUI';

const MAX_MOST_USED_CHAMPIONS = 3;

const UsedChampions: React.FC = () => {
  const { mostChampions } = matchStore;

  if (mostChampions === null) {
    return <UsedChampionsSkeletonUI />;
  }

  const mostUsedChampionItems = mostChampions.map((champion) => (
    <UsedChampionItem key={champion.id} champion={champion} />
  ));

  const noChampionDataItems = new Array(
    MAX_MOST_USED_CHAMPIONS - mostChampions.length,
  )
    .fill(null)
    .map((_, index) => <NoChampionData key={index} />);

  return (
    <Container>
      {mostUsedChampionItems}
      {noChampionDataItems}
    </Container>
  );
};

const Container = styled.ul``;

export default observer(UsedChampions);
