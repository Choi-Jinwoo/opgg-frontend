import React from 'react';
import mostInfoStore from '@src/stores/mostInfoStore';
import RecentChampionItem from './RecentChampionItem';
import styled from 'styled-components';
import { observer } from 'mobx-react';

const RecentChampions: React.FC = () => {
  const { recentChampions } = mostInfoStore;

  if (recentChampions === null) {
    return null;
  }

  const recentChampionItems = recentChampions.map((recentChampion, index) => (
    <RecentChampionItem key={index} champion={recentChampion} />
  ));

  return <Container>{recentChampionItems}</Container>;
};

const Container = styled.ul`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray2};
`;

export default observer(RecentChampions);
