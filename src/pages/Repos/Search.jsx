import React from 'react';
import {observer} from "mobx-react-lite";
import repos from "../../store/repos";

const Search = observer(() => {
  return (
    <div>
      <h1 className="search__title">Поиск по репозиториям GitHub</h1>
      <div className="search">
        <input type="text" className="input" value={repos.value} onChange={event => repos.setValue(event.target.value)}/>
        <button onClick={() => {repos.fetchToRepos()}} className="btn-search btn">Поиск</button>
      </div>
    </div>
  )
})

export default Search