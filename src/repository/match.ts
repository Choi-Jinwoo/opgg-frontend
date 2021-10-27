import { ChampionAttributes } from '@src/models/domains/UsedChampion';
import { GameAttributes, GameTeam } from '@src/models/domains/Game';
import { SummonerMatchSummaryAttributes } from '@src/models/domains/SummonerMatchSummary';
import { SummonerPositionAttributes } from '@src/models/domains/SummonerPosition';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMatchListResponse = {
  games: GameAttributes[];
  champions: ChampionAttributes[];
  summary: SummonerMatchSummaryAttributes;
  positions: SummonerPositionAttributes[];
};

type FetchMatchDetailResponse = {
  gameId: string;
  teams: GameTeam[];
};

class MatchRepository {
  fetchMatches(
    summonerName: string,
  ): Promise<AxiosResponse<FetchMatchListResponse>> {
    return axiosInstance.get<FetchMatchListResponse>(
      `/summoner/${summonerName}/matches`,
    );
  }

  fetchMatchDetails(
    summonerName: string,
    gameId: string,
  ): Promise<AxiosResponse<FetchMatchDetailResponse>> {
    return axiosInstance.get<FetchMatchDetailResponse>(
      `/summoner/${summonerName}/matchDetail/${gameId}`,
    );
  }
}

export default new MatchRepository();
