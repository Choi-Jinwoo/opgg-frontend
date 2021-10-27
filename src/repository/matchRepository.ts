import { GameAttrs, GameTeam } from '@src/models/domains/Game';
import { SummonerMatchSummaryAttrs } from '@src/models/domains/SummonerMatchSummary';
import { SummonerPositionAttrs } from '@src/models/domains/SummonerPosition';
import { UsedChampionAttrs } from '@src/models/domains/UsedChampion';
import { AxiosResponse } from 'axios';
import axiosInstance from './axios';

type FetchMatchListResponse = {
  games: GameAttrs[];
  champions: UsedChampionAttrs[];
  summary: SummonerMatchSummaryAttrs;
  positions: SummonerPositionAttrs[];
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
