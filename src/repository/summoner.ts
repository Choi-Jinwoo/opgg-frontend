import { SummonerAttributes } from '@src/models/domains/Summoner';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchSummonerResponse = {
  summoner: SummonerAttributes;
};

class SummonerRepository {
  fetchSummoner(
    summonerName: string,
  ): Promise<AxiosResponse<FetchSummonerResponse>> {
    return axiosInstance.get<FetchSummonerResponse>(
      `/summoner/${summonerName}`,
    );
  }
}

export default new SummonerRepository();
