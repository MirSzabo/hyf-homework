import React, { useContext } from "react";
import { userListContext } from "../App";
import EmptyResult from "./EmptyResult";

const UserList = () => {
  const { user } = useContext(userListContext);
  return (
    <ul>
    {user.total_count === undefined ? 
     <EmptyResult />
    : 
      user.items.map(list => {
        return (
          <a href={list.html_url} target="_">
            <li key={list.id}>{list.login}</li>
          </a>);
      })}
</ul>
  )
};

export default UserList;
