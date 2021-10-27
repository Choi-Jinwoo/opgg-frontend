import query from '@src/utils/query';
import { useEffect, useState } from 'react';
import { GameTeam } from '@src/models/domains/Game';
import matchRepository from '@src/repository/matchRepository';

type UseGameTeamsReturns = [GameTeam[] | null];

const useGameTeams = (gameId: string): UseGameTeamsReturns => {
  const [teams, setTeams] = useState<GameTeam[] | null>(null);

  useEffect(() => {
    const summoner = query.get('summoner', location.search);
    if (summoner === null) return;

    matchRepository
      .fetchMatchDetails(summoner, gameId)
      .then(({ data }) => setTeams(data.teams));
  }, [gameId]);

  return [teams];
};

export default useGameTeams;
