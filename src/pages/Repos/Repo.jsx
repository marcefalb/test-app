import React from 'react';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {ReactComponent as IcFav} from '../../assets/icons/fav.svg'

const Repo = observer(({repo, key}) => {
  return (
    <li className="repos__item" key={key}>
      <Link repo={repo} to={`/Repo/${repo.login}/${repo.name}`} className="repos__link">
        <IcFav
          className={repo.isFav ? 'repos__like repos__like_active' : 'repos__like'}
          onClick={event => {
            event.preventDefault()
            repo.setFav()
          }}
        />
        <span className="repos__name">{repo.name}</span>
        <p className="repos__description">{repo.description}</p>
        <div className="repos__stars">
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.1713 8.62013L15.9726 7.71925L13.2016 2.10157C13.1259 1.94776 13.0014 1.82325 12.8476 1.74757C12.4619 1.55714 11.9931 1.71583 11.8003 2.10157L9.02926 7.71925L2.83053 8.62013C2.65963 8.64454 2.50338 8.72511 2.38375 8.84718C2.23913 8.99583 2.15943 9.19581 2.16218 9.40319C2.16492 9.61056 2.24989 9.80837 2.3984 9.95313L6.88326 14.3257L5.82369 20.5C5.79885 20.6436 5.81474 20.7914 5.86957 20.9264C5.9244 21.0615 6.01598 21.1785 6.13392 21.2641C6.25186 21.3498 6.39143 21.4007 6.53683 21.411C6.68222 21.4214 6.82761 21.3908 6.9565 21.3228L12.5009 18.4077L18.0454 21.3228C18.1967 21.4033 18.3725 21.4302 18.541 21.4009C18.9658 21.3276 19.2514 20.9248 19.1782 20.5L18.1186 14.3257L22.6035 9.95313C22.7255 9.83351 22.8061 9.67726 22.8305 9.50636C22.8964 9.07911 22.5986 8.6836 22.1713 8.62013V8.62013ZM16.2314 13.7105L17.1128 18.8447L12.5009 16.4229L7.88912 18.8472L8.77047 13.7129L5.04 10.0752L10.1963 9.32569L12.5009 4.65528L14.8056 9.32569L19.9619 10.0752L16.2314 13.7105Z" fill="black"/>
          </svg>
          <span>{repo.stars}</span>
        </div>
      </Link>
    </li>
  );
});

export default Repo;