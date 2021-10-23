import { ChampionAttributes } from '@src/models/champion';
import { SummonerMatchSummaryAttributes } from '@src/models/summonerMatchSummary';
import { SummonerPositionAttributes } from '@src/models/summonerPosition';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMatchListResponse = {
  champions: ChampionAttributes[];
  summary: SummonerMatchSummaryAttributes;
  positions: SummonerPositionAttributes[];
};

class MatchRepository {
  fetchMatches(
    summonerName: string,
  ): Promise<AxiosResponse<FetchMatchListResponse>> {
    return axiosInstance.get(`/summoner/${summonerName}/matches`);
  }
}

export default new MatchRepository();
