import {makeAutoObservable} from "mobx";

class List {
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  setItems(dataItems) {
    this.items = dataItems
    return this.items
  }
}

export default new List()