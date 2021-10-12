import {makeAutoObservable, observable, values} from "mobx";
import fetches from "../breakpoints/fetches";
import repo from "../store/repo";

class repos {
  value = ''
  totalCount = 0
  items = observable.map()

  constructor() {
    makeAutoObservable(this)
  }

  setValue(value) {
    this.value = value
  }

   async fetchToRepos() {
    const response = await fetches.toRepos(this.value)
     response.data.items.forEach((item) => {
       const repoItem = new repo(item)
       this.items.set(item.id, repoItem)
     })

    this.totalCount = response.data.total_count
  }

  get list() {
    return values(this.items)
  }
}

export default new repos()
