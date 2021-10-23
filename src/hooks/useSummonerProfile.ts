import Summoner from '@src/models/summoner';
import summonerStore from '@src/stores/summonerStore';
import { useEffect } from 'react';

const useSummonerProfile = (): Summoner | null => {
  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const summonerName = query.get('summoner');

    // querystring 없을 경우 처리
    if (summonerName === null) return;

    summonerStore.fetchSummoner(summonerName).catch(); // 오류 처리
  }, []);

  return summonerStore.summoner;
};

export default useSummonerProfile;
