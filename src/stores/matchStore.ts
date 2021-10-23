import Champion from '@src/models/champion';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import matchRepository from '@src/repository/match';
import SummonerMatchSummary from '@src/models/summonerMatchSummary';
import SummonerPosition from '@src/models/summonerPosition';

class MatchStore {
  @observable
  mostChampions: Champion[] | null = null;

  @observable
  summonerMatchSummary: SummonerMatchSummary | null = null;

  @observable
  summonerPositions: SummonerPosition[] | null = null;

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
    });
  }
}

export default new MatchStore();
