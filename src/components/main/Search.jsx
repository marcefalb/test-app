import React, {useState} from 'react';

const Search = ({setSearch, fetchToRepos}) => {
  const [value, setValue] = useState('')
  const toSearch = () => {
    setSearch(value)
    fetchToRepos()
  }

  return (
    <div>
      <h1 className="search__title">Поиск по репозиториям GitHub</h1>
      <div className="search">
        <input type="text" className="input" value={value} onChange={event => setValue(event.target.value)}/>
        <button onClick={() => toSearch()} className="btn-search btn">Поиск</button>
      </div>
    </div>
  )
};

export default Search