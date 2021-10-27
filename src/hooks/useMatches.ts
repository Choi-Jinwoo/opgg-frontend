import matchStore from '@src/stores/matchStore';
import { useEffect } from 'react';
import summonerStore from '@src/stores/summonerStore';

const useMatches = (): void => {
  useEffect(() => {
    const { summonerName } = summonerStore;
    if (summonerName === null) return;

    matchStore.fetchMatches(summonerName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [summonerStore.summonerName]);
};

export default useMatches;
