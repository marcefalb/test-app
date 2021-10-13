import {makeAutoObservable} from "mobx";

class repo {
  name = ''
  description = ''
  stars = ''
  owner = ''
  login = ''
  img = ''
  isFav = false

  constructor(item) {
    makeAutoObservable(this)

    this.id = item.id
    this.name = item.name
    this.description = item.description
    this.stars = item.stargazers_count
    this.login = item?.owner.login
    this.img = item?.owner.avatar_url
  }

  setFav() {
    this.isFav = !this.isFav
  }
}

export default repo