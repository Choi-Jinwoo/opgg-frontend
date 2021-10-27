import { GameTypes } from '@src/models/domains/Game';
import matchStore, { MatchFilter } from '@src/stores/matchStore';
import { observer } from 'mobx-react';
import React from 'react';
import styled from 'styled-components';
import MatchItem from './MatchItem';
import MatchListSkeletonUI from './MatchListSkeletonUI';

const MATCH_FILTER_MAP_TO_GAME_TYPE: {
  [key in MatchFilter]: null | GameTypes;
} = {
  all: null,
  solo: GameTypes.SOLO_RANK,
  free: GameTypes.FREE_RANK,
};

const MatchList: React.FC = () => {
  const { games, currentFilter } = matchStore;

  if (games === null) {
    return <MatchListSkeletonUI />;
  }

  const filteredGames = games.filter(
    (game) =>
      currentFilter === 'all' ||
      game.gameType === MATCH_FILTER_MAP_TO_GAME_TYPE[currentFilter],
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
