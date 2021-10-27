import Summoner from '@src/models/domains/summoner';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';
import summonerRepository from '@src/repository/summoner';

class SummonerStore {
  @observable
  summoner: Summoner | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  @action
  async fetchSummoner(summonerName: string) {
    const { data } = await summonerRepository.fetchSummoner(summonerName);

    runInAction(() => {
      this.summoner = Summoner.from(data.summoner);
    });
  }
}

export default new SummonerStore();
