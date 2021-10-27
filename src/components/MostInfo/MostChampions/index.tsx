import mostInfoStore from '@src/stores/mostInfoStore';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import MostChampionItem from './MostChampionItem';

const MostChampions: React.FC = () => {
  const { mostChampions } = mostInfoStore;
  if (mostChampions === null) {
    return null;
  }

  const mostChampionItems = mostChampions.map((champion, index) => (
    <MostChampionItem champion={champion} key={index} />
  ));

  return <Container>{mostChampionItems}</Container>;
};

const Container = styled.ul`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray2};
`;

export default observer(MostChampions);
