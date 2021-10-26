import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import MostChampion from '@src/models/mostChampion';
import mostInfoRepository from '@src/repository/mostInfo';

class MostInfoStore {
  @observable mostChampions: MostChampion[] | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fetchMostInfo(summonerName: string) {
    const { data } = await mostInfoRepository.fetchMostInfo(summonerName);

    runInAction(() => {
      this.mostChampions = data.champions.map(MostChampion.from);
    });
  }
}

export default new MostInfoStore();
