import {makeAutoObservable} from "mobx";

class repo {
  name = ''
  description = ''
  stars = ''
  login = ''
  img = ''
  isFav = false

  constructor(item) {
    makeAutoObservable(this)

    this.id = item.id
    this.name = item.name
    this.description = item.description
    this.stars = item.stars
    this.login = item.login
    this.img = item.img
  }

  toggleFav() {
    this.isFav = !this.isFav
  }
}

export default repo