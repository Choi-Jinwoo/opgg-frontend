import React from 'react';
import { observer } from 'mobx-react';
import matchStore from '@src/stores/matchStore';
import MostUsedChampionItem from './MostUsedChampionItem';
import styled from 'styled-components';
import NoChampionData from './NoChampionData';

const MAX_MOST_USED_CHAMPIONS = 3;

const MostUsedChampions: React.FC = () => {
  const { mostChampions } = matchStore;

  if (mostChampions === null) {
    return <div>없음</div>;
  }

  const mostUsedChampionItems = mostChampions.map((champion) => (
    <MostUsedChampionItem key={champion.id} champion={champion} />
  ));

  const NoChampionDataItems = new Array(
    MAX_MOST_USED_CHAMPIONS - mostChampions.length,
  )
    .fill(null)
    .map((_, index) => <NoChampionData key={index} />);

  return (
    <Container>
      {mostUsedChampionItems}
      {NoChampionDataItems}
    </Container>
  );
};

const Container = styled.ul``;

export default observer(MostUsedChampions);
