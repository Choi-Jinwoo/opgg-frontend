import summonerStore from '@src/stores/summonerStore';
import query from '@src/utils/query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSummonerProfile = (): void => {
  const { search } = useLocation();

  useEffect(() => {
    summonerStore.summonerName = query.get('summoner', search);
  }, [search]);

  useEffect(() => {
    const { summonerName } = summonerStore;
    if (summonerName === null) return;

    summonerStore.fetchSummoner(summonerName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summonerStore.summonerName]);
};

export default useSummonerProfile;
