import React from 'react';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

  const Img = observer((repo) => {
    console.log(repo.repo.img)
    return (
      <div>
        <div className="avatar">
          <img src={repo.repo.img} alt="Avatar"/>
        </div>
        <Link to={`/`} className='back'>Вернуться</Link>
      </div>
    );
});

export default Img;