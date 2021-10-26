import mostInfoStore from '@src/stores/mostInfoStore';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import MostChampionItem from './MostChampionItem';

const MostChampions: React.FC = () => {
  const { mostChampions } = mostInfoStore;
  if (mostChampions === null) {
    return <div>없음</div>;
  }

  const mostChampionItems = mostChampions.map((champion, index) => (
    <MostChampionItem champion={champion} key={index} />
  ));

  return <Container>{mostChampionItems}</Container>;
};

const Container = styled.ul``;

export default observer(MostChampions);
