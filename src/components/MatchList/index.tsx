import { GameTypes } from '@src/models/game';
import matchStore from '@src/stores/matchStore';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import MatchItem from './MatchItem';

const FILTER_TYPE_GAME_TYPE_MAP: { [key: string]: GameTypes | null } = {
  all: null,
  solo: GameTypes.SOLO_RANK,
  free: GameTypes.FREE_RANK,
};

const MatchList: React.FC = () => {
  const { games, filterType } = matchStore;

  if (games === null) {
    // TODO: 없음 처리
    return <div>없음</div>;
  }

  const filteredGames = games.filter(
    (game) =>
      filterType === 'all' ||
      game.gameType === FILTER_TYPE_GAME_TYPE_MAP[filterType],
  );

  const matchItems = filteredGames.map((game) => (
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
