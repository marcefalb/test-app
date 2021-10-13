import React, {useEffect, useState} from 'react';
import Img from './Repo/Img'
import {useParams} from "react-router-dom";
import repos from "../store/repos";

const Repo = () => {
  const {login, name} = useParams()
  useEffect(() => {
    repos.fetchToRepo(login, name)
    return (() => {
      repos.items.clear()
      repos.totalCount = 0
    })
  })

  return (
    <main className='wrapper main__wrapper'>
      <Img repo={repos.list[0]}/>
    </main>
  )
};

export default Repo