import matchStore from '@src/stores/matchStore';
import { useEffect } from 'react';
import query from '@src/utils/query';
import { useLocation } from 'react-router-dom';

const useMatches = (): void => {
  const { search } = useLocation();

  useEffect(() => {
    const summonerName = query.get('summoner', search);

    if (summonerName === null) return;

    matchStore.fetchMatches(summonerName);
  }, [search]);
};

export default useMatches;
