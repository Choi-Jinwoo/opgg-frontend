import summonerStore from '@src/stores/summonerStore';
import query from '@src/utils/query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type T = {
  summoner: string;
};

const useSummonerProfile = (): void => {
  const { search } = useLocation();

  useEffect(() => {
    const summonerName = query.get('summoner', search);

    // TODO: querystring 없을 경우 처리
    if (summonerName === null) return;

    summonerStore.fetchSummoner(summonerName).catch(); // 오류 처리
  }, [search]);
};

export default useSummonerProfile;
