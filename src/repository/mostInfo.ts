import { MostChampionAttributes } from '@src/models/mostChampion';
import { RecentChampionAttributes } from '@src/models/recentChampion';
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
