import React from 'react';

const Counter = ({total_count}) => {
  return (
    <div className="counter">
      <span className="counter__title">Количество репозиториев:</span>
      <span className="counter__num">{total_count}</span>
    </div>
  )
};

export default Counter