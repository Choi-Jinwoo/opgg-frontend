import Champion from '@src/models/domains/Champion';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import matchRepository from '@src/repository/match';
import SummonerMatchSummary from '@src/models/domains/SummonerMatchSummary';
import SummonerPosition from '@src/models/domains/SummonerPosition';
import Game from '@src/models/domains/Game';

export type FilterTypes = 'all' | 'solo' | 'free';

class MatchStore {
  @observable
  filterType: FilterTypes = 'all';

  @observable
  mostChampions: Champion[] | null = null;

  @observable
  summonerMatchSummary: SummonerMatchSummary | null = null;

  @observable
  summonerPositions: SummonerPosition[] | null = null;

  @observable
  games: Game[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fetchMatches(summonerName: string) {
    const { data } = await matchRepository.fetchMatches(summonerName);

    runInAction(() => {
      this.mostChampions = data.champions.map(Champion.from);
      this.summonerMatchSummary = SummonerMatchSummary.from(data.summary);
      this.summonerPositions = data.positions.map(SummonerPosition.from);
      this.games = data.games.map(Game.from);
    });
  }

  selectFilter(type: FilterTypes) {
    this.filterType = type;
  }
}

export default new MatchStore();
