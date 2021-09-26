import React from 'react';
import {Link} from "react-router-dom";

  const Img = ({avatar_url, fetchToRepoPage}) => {
  const getImg = () => {
    fetchToRepoPage()
  }
  getImg()

  return (
    <div>
      <div className="avatar">
        <img src={avatar_url} alt="Avatar"/>
      </div>
      <Link to={`/`} className='back'>Вернуться</Link>
    </div>
  );
};

export default Img;