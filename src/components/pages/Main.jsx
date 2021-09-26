import React, {useState} from 'react';
import axios from 'axios'
import Search from './../main/Search'
import Counter from './../main/Counter'
import List from './../main/List'

const Main = () => {
  const [search, setSearch] = useState('')
  const [items, setItems] = useState([])
  const [total_count, setTotalCount] = useState(0)

  const fetchToRepos = () => {
    return axios.get(`https://api.github.com/search/repositories?q=${search}&sort=stars&order=desc`)
      .then(({data}) => {
        setItems(data.items)
        setTotalCount(data.total_count)
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      })
  }

  return (
    <main className="wrapper main__wrapper">
      <Search setSearch={setSearch} fetchToRepos={fetchToRepos}/>
      <Counter total_count={total_count}/>
      <List items={items}/>
    </main>
  )
};

export default Main