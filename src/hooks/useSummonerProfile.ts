import summonerStore from '@src/stores/summonerStore';
import { useEffect } from 'react';

const useSummonerProfile = (): void => {
  useEffect(() => {
    const { summonerName } = summonerStore;
    if (summonerName === null) return;

    summonerStore.fetchSummoner(summonerName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summonerStore.summonerName]);
};

export default useSummonerProfile;
