import React, {useState} from 'react';
import Img from './../Repo/Img'
import axios from "axios";
import {useParams} from "react-router-dom";

const Repo = () => {
  const [avatar_url, setAvatarUrl] = useState('')
  const {owner, name} = useParams()

  const fetchToRepoPage = () => {
    return axios.get(`https://api.github.com/repos/${owner}/${name}`)
      .then(({data}) => {
        setAvatarUrl(data.owner.avatar_url)
        console.log(data.owner)
      })
      .catch(error => {
        if (error.response) {
          console.log(error.response);
        }
      })
  }

  return (
    <main className='wrapper main__wrapper'>
      <Img avatar_url={avatar_url} fetchToRepoPage={fetchToRepoPage}/>
    </main>
  )
};

export default Repo