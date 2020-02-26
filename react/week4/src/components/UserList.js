import React, { useContext } from "react";
import { userListContext } from "../App";
import EmptyResult from "./EmptyResult";

const UserList = () => {
  const { users } = useContext(userListContext);
  return (
    <ul>
      {!users.total_count ? (
        <EmptyResult />
      ) : (
        users.items.map(user => {
          return (
            <li key={user.id}>
              <img
                src={user.avatar_url}
                alt="user"
                height="42"
                width="42"
              ></img>
              <a href={user.html_url} target="_">
                <div>{user.login}</div>
              </a>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default UserList;
