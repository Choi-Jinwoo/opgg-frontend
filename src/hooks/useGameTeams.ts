import { useEffect, useState } from 'react';
import { GameTeam } from '@src/models/domains/Game';
import matchRepository from '@src/repository/matchRepository';
import summonerStore from '@src/stores/summonerStore';

type UseGameTeamsReturns = [GameTeam[] | null];

const useGameTeams = (gameId: string): UseGameTeamsReturns => {
  const [teams, setTeams] = useState<GameTeam[] | null>(null);

  useEffect(() => {
    let isMounted = true;

    const { summonerName } = summonerStore;
    if (summonerName === null) return;

    matchRepository
      .fetchMatchDetails(summonerName, gameId)
      .then(({ data }) => isMounted && setTeams(data.teams));

    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameId, summonerStore.summonerName]);

  return [teams];
};

export default useGameTeams;
