import { useEffect } from 'react';
import mostInfoStore from '@src/stores/mostInfoStore';
import summonerStore from '@src/stores/summonerStore';

const useMostInfo = (): void => {
  useEffect(() => {
    const { summonerName } = summonerStore;
    if (summonerName === null) return;

    mostInfoStore.fetchMostInfo(summonerName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summonerStore.summonerName]);
};

export default useMostInfo;
