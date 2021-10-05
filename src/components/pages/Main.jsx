import React from 'react'
import Search from './../main/Search'
import Counter from './../main/Counter'
import List from './../main/List'

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