import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to={`/`} className="wrapper header__wrapper">
        <div className="logo">
          <span className="logo__img">m</span>
        </div>
      </Link>
    </header>
  )
};

export default Header