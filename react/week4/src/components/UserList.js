import React, { useContext } from "react";
import { userListContext } from "../App";
import EmptyResult from "./EmptyResult";

const UserList = () => {
  const { user } = useContext(userListContext);
  return (
    <ul>
      {!user.total_count ? (
        <EmptyResult />
      ) : (
        user.items.map(list => {
          return (
            <>
              <img
                src={list.avatar_url}
                alt="user"
                height="42"
                width="42"
              ></img>
              <a href={list.html_url} target="_">
                <div>{list.login}</div>

              </a>
            </>
          );
        })
      )}
    </ul>
  );
};

export default UserList;
