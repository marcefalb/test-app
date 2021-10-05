import {makeAutoObservable} from "mobx";

class Counter {
  total_count = 0

  constructor() {
    makeAutoObservable(this)
  }

  setTotalCount(count) {
    this.total_count = count
    return this.total_count
  }
}

export default new Counter()