import Summoner from '@src/models/domains/Summoner';
import summonerRepository from '@src/repository/summonerRepository';
import { action, makeAutoObservable, observable, runInAction } from 'mobx';

class SummonerStore {
  @observable
  summonerName: string | null = null;

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
