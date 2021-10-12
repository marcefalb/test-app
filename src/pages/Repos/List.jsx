import React from 'react';
import {observer} from "mobx-react-lite";
import repos from "../../store/repos";
import Repo from "./Repo";

const List = observer( () => {
  return  (
    <ul className="repos__list">
      {repos.list.map((item, index) => {
          const repo = repos.items.get(item.id)
          return (
            <Repo repo={repo} key={index}/>
          )
        }
      )}
    </ul>
  )
});

export default List