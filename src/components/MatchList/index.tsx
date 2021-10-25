import matchStore from '@src/stores/matchStore';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import MatchItem from './MatchItem';

const MatchList: React.FC = () => {
  const { games } = matchStore;

  if (games === null) {
    // TODO: 없음 처리
    return <div>없음</div>;
  }

  const matchItems = games.map((game) => (
    <MatchItem game={game} key={game.gameId} />
  ));

  return <Container>{matchItems}</Container>;
};

const Container = styled.ul`
  & > * + * {
    margin-top: 8px;
  }
`;

export default observer(MatchList);
