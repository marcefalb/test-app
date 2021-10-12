import React from 'react'
import {observer} from "mobx-react-lite";
import repos from "../../store/repos";

const Counter = observer(() => {
  return (
    <div className="counter">
      <span className="counter__title">Количество репозиториев:</span>
      <span className="counter__num">{repos.totalCount}</span>
    </div>
  )
})

export default Counter