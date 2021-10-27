import summonerStore from '@src/stores/summonerStore';
import query from '@src/utils/query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSummonerName = (): void => {
  const { search } = useLocation();

  useEffect(() => {
    summonerStore.summonerName = query.get('summoner', search);
  }, [search]);
};

export default useSummonerName;
