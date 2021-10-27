import recentSearchStorage from '@src/storage/recentSearchStorage';
import { action, makeAutoObservable, observable } from 'mobx';

class RecentSearchStore {
  @observable
  searchKeywords: string[] = [];

  constructor() {
    makeAutoObservable(this);
    this.searchKeywords = recentSearchStorage.read() ?? [];
  }

  @action
  add(keyword: string) {
    const index = this.searchKeywords.findIndex((item) => item === keyword);
    if (index !== -1) {
      this.searchKeywords.splice(index, 1);
    }

    this.searchKeywords.unshift(keyword);
    recentSearchStorage.save(this.searchKeywords);
  }

  @action
  remove(keyword: string) {
    const index = this.searchKeywords.findIndex((item) => item === keyword);
    this.searchKeywords.splice(index, 1);
    recentSearchStorage.save(this.searchKeywords);
  }
}

export default new RecentSearchStore();
