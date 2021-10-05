import {makeAutoObservable} from "mobx";
import axios from "axios";

class Search {
  value = ''
  response = []

  constructor() {
    makeAutoObservable(this)
  }

   fetchToRepos() {
    axios.get(`https://api.github.com/search/repositories?q=${this.value}&sort=stars&order=desc`)
      .then(res => this.setResponse(res.data))
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
  }

  setValue(inputValue) {
    this.value = inputValue
  }

  setResponse(resp) {
    this.response = resp
  }
}

export default new Search()