import React from 'react';
import search from './../../store/search'
import {observer} from "mobx-react-lite";

const Search = observer(() => {
  return (
    <div>
      <h1 className="search__title">Поиск по репозиториям GitHub</h1>
      <div className="search">
        <input type="text" className="input" value={search.value} onChange={event => search.setValue(event.target.value)}/>
        <button onClick={() => {
          search.fetchToRepos()
        }} className="btn-search btn">Поиск</button>
      </div>
    </div>
  )
})

export default Search