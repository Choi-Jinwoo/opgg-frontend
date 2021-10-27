import MostChampion from '@src/models/domains/MostChampion';
import RecentChampion from '@src/models/domains/RecentChampion';
import mostInfoRepository from '@src/repository/mostInfoRepository';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

class MostInfoStore {
  @observable
  mostChampions: MostChampion[] | null = null;

  @observable
  recentChampions: RecentChampion[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fetchMostInfo(summonerName: string) {
    const { data } = await mostInfoRepository.fetchMostInfo(summonerName);

    runInAction(() => {
      this.mostChampions = data.champions
        .map(MostChampion.from)
        .sort((a, b) => b.games - a.games);

      this.recentChampions = data.recentWinRate
        .map(RecentChampion.from)
        .sort((a, b) => b.games - a.games);
    });
  }
}

export default new MostInfoStore();
