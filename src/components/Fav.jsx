import React from 'react';
import {observer} from "mobx-react-lite";

const Fav = observer((isFav, color) => {
  return (
    <svg width="25" height="25" viewBox="0 0 25 25" {...isFav ? 'fill="#2d2d2d"' : 'fill="none"'} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.81266 4.16602C4.6486 4.16602 2.0835 6.73112 2.0835 9.89518C2.0835 15.6244 8.85433 20.8327 12.5002 22.0441C16.146 20.8327 22.9168 15.6244 22.9168 9.89518C22.9168 6.73112 20.3517 4.16602 17.1877 4.16602C15.2502 4.16602 13.5366 5.128 12.5002 6.60039C11.9719 5.84789 11.27 5.23377 10.4541 4.81002C9.63813 4.38627 8.73209 4.16537 7.81266 4.16602Z" stroke="#2D2D2D" strokeWidth="2.08333" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
});

export default Fav;