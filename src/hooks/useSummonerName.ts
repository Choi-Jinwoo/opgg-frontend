import summonerStore from '@src/stores/summonerStore';
import query from '@src/utils/query';
import { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const useSummonerName = (): void => {
  const { search } = useLocation();
  const history = useHistory();

  useEffect(() => {
    summonerStore.summonerName = query.get('summoner', search);
  }, [search]);

  useEffect(() => {
    if (
      summonerStore.summonerName === null ||
      summonerStore.summonerName === ''
    ) {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, summonerStore.summonerName]);
};

export default useSummonerName;
