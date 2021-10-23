import { ChampionAttributes } from '@src/models/champion';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMatchListResponse = {
  champions: ChampionAttributes[];
};

class MatchRepository {
  fetchMatches(
    summonerName: string,
  ): Promise<AxiosResponse<FetchMatchListResponse>> {
    return axiosInstance.get(`/summoner/${summonerName}/matches`);
  }
}

export default new MatchRepository();
