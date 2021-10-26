import { MostChampionAttributes } from '@src/models/mostChampion';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMostInfoResponse = {
  champions: MostChampionAttributes[];
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
