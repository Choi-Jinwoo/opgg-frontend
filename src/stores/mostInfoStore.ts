import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import MostChampion from '@src/models/mostChampion';
import mostInfoRepository from '@src/repository/mostInfo';
import RecentChampion from '@src/models/recentChampion';

class MostInfoStore {
  @observable mostChampions: MostChampion[] | null = null;
  @observable recentChampions: RecentChampion[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fetchMostInfo(summonerName: string) {
    const { data } = await mostInfoRepository.fetchMostInfo(summonerName);

    runInAction(() => {
      this.mostChampions = data.champions.map(MostChampion.from);
      this.recentChampions = data.recentWinRate.map(RecentChampion.from);
    });
  }
}

export default new MostInfoStore();
