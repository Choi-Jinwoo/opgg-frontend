import { MostChampionAttrs } from '@src/models/domains/MostChampion';
import { RecentChampionAttrs } from '@src/models/domains/RecentChampion';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMostInfoResponse = {
  champions: MostChampionAttrs[];
  recentWinRate: RecentChampionAttrs[];
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
