import React from 'react'
import counter from './../../store/counter'
import search from './../../store/search'
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className="counter">
      <span className="counter__title">Количество репозиториев:</span>
      <span className="counter__num">{counter.setTotalCount(search.response.total_count)}</span>
    </div>
  )
})

export default Counter