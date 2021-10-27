import { MostChampionAttributes } from '@src/models/domains/mostChampion';
import { RecentChampionAttributes } from '@src/models/domains/recentChampion';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMostInfoResponse = {
  champions: MostChampionAttributes[];
  recentWinRate: RecentChampionAttributes[];
};

class MostInfoRepository {
  fetchMostInfo(
    summonerName: string,
  ): Promise<AxiosResponse<FetchMostInfoResponse>> {
    return axiosInstance.get<FetchMostInfoResponse>(
      `/summoner/${summonerName}/mostInfo`,
    );
  }
}

export default new MostInfoRepository();
