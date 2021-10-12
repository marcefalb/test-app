import React from 'react'
import Search from './Repos/Search'
import Counter from './Repos/Counter'
import List from './Repos/List'

const Main = () => {
  return (
    <main className="wrapper main__wrapper">
      <Search/>
      <Counter/>
      <List/>
    </main>
  )
};

export default Main