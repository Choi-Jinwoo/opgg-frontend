import { useEffect } from 'react';
import query from '@src/utils/query';
import mostInfoStore from '@src/stores/mostInfoStore';
import { useLocation } from 'react-router-dom';

const useMostInfo = (): void => {
  const { search } = useLocation();

  useEffect(() => {
    const summonerName = query.get('summoner', search);

    // TODO: querystring 없을 경우 처리
    if (summonerName === null) return;

    mostInfoStore.fetchMostInfo(summonerName);
  }, [search]);
};

export default useMostInfo;
