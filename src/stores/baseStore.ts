import { makeAutoObservable } from 'mobx';

class BaseStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export default new BaseStore();
