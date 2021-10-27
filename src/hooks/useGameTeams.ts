import query from '@src/utils/query';
import { useEffect, useState } from 'react';
import matchRepository from '@src/repository/match';
import { GameTeam } from '@src/models/game';
import { useLocation } from 'react-router-dom';

type UseGameTeamsReturns = [GameTeam[] | null];

const useGameTeams = (gameId: string): UseGameTeamsReturns => {
  const { search } = useLocation();
  const [teams, setTeams] = useState<GameTeam[] | null>(null);

  useEffect(() => {
    const summoner = query.get('summoner', search);
    if (summoner === null) return;

    matchRepository
      .fetchMatchDetails(summoner, gameId)
      .then(({ data }) => setTeams(data.teams));
  }, [gameId, search]);

  return [teams];
};

export default useGameTeams;
