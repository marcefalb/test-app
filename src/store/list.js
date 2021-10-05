import {makeAutoObservable} from "mobx";

class List {
  items = []

  constructor() {
    makeAutoObservable(this)
  }

  setItems(dataItems) {
    this.items = dataItems
    console.log(this.items)
    return this.items
  }
}

export default new List()