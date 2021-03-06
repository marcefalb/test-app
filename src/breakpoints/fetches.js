import React from 'react';
import axios from "axios";

class Fetches {
  static async toRepos(value) {
    return (
      await axios.get(`https://api.github.com/search/repositories?q=${value}&sort=stars&order=desc`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )}

  static async toRepo(login, name) {
    return (
      await axios.get(`https://api.github.com/repos/${login}/${name}`)
      .catch(error => {
        if (error.res) {
          console.log(error.res);
        }
      })
    )}
}

export default Fetches;