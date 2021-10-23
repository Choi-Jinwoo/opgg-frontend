import summonerStore from '@src/stores/summonerStore';
import { useEffect } from 'react';
import query from '@src/utils/query';

const useSummonerProfile = (): void => {
  useEffect(() => {
    const summonerName = query.get('summoner');

    // TODO: querystring 없을 경우 처리
    if (summonerName === null) return;

    summonerStore.fetchSummoner(summonerName).catch(); // 오류 처리
  }, []);
};

export default useSummonerProfile;
