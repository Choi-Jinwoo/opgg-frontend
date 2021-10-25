import { ChampionAttributes } from '@src/models/champion';
import { GameAttributes, GameTeam } from '@src/models/game';
import { SummonerMatchSummaryAttributes } from '@src/models/summonerMatchSummary';
import { SummonerPositionAttributes } from '@src/models/summonerPosition';
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
