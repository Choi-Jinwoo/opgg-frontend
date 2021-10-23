import matchStore from '@src/stores/matchStore';
import { useEffect } from 'react';
import query from '@src/utils/query';

const useMatches = (): void => {
  useEffect(() => {
    const summonerName = query.get('summoner');

    if (summonerName === null) return;

    matchStore.fetchMatches(summonerName);
  }, []);
};

export default useMatches;
