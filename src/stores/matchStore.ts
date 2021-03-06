import Game from '@src/models/domains/Game';
import SummonerMatchSummary from '@src/models/domains/SummonerMatchSummary';
import SummonerPosition from '@src/models/domains/SummonerPosition';
import UsedChampion from '@src/models/domains/UsedChampion';
import matchRepository from '@src/repository/matchRepository';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

export type MatchFilter = 'all' | 'solo' | 'free';

class MatchStore {
  @observable
  currentFilter: MatchFilter = 'all';

  @observable
  mostChampions: UsedChampion[] | null = null;

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
    this.mostChampions = null;
    this.summonerMatchSummary = null;
    this.summonerPositions = null;
    const { data } = await matchRepository.fetchMatches(summonerName);

    runInAction(() => {
      this.mostChampions = data.champions.map(UsedChampion.from);
      this.summonerMatchSummary = SummonerMatchSummary.from(data.summary);
      this.summonerPositions = data.positions.map(SummonerPosition.from);
      this.games = data.games.map(Game.from);
    });
  }

  changeFilter(filter: MatchFilter) {
    this.currentFilter = filter;
  }
}

export default new MatchStore();
