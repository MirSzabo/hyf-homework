import React, { useEffect, useContext } from "react";
import { userListContext } from "../App";
import SearchLoader from "./SearchLoader";
import UserList from "./UserList";

function GetUsersData() {
  const { setUsers, input, error, setError, loading, setLoading } = useContext(
    userListContext
  );
  useEffect(() => {
    setLoading(true);
    const SEARCH_URL = `https://api.github.com/search/users?q=${input}`;
    (async () => {
      if (input !== "") {
        try {
          const userData = await fetch(SEARCH_URL);
          const users = await userData.json();
          setUsers(users);
        } catch (e) {
          if (e) {
            setError(e.message);
            console.log(error);
          }
        }
        setLoading(!loading);
      }
    })();
  }, [input, setUsers, error, setError, setLoading]);

  return (
    <div className="list-container">
      {loading ? <SearchLoader /> : <UserList />}
    </div>
  );
}

export default GetUsersData;
