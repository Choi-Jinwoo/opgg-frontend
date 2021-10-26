import { useEffect } from 'react';
import query from '@src/utils/query';
import mostInfoStore from '@src/stores/mostInfoStore';

const useMostInfo = (): void => {
  useEffect(() => {
    const summonerName = query.get('summoner');

    // TODO: querystring 없을 경우 처리
    if (summonerName === null) return;

    mostInfoStore.fetchMostInfo(summonerName);
  }, []);
};

export default useMostInfo;
