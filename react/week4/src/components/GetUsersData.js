import React, { useEffect, useContext } from "react";
import { userListContext } from "../App";
import SearchLoader from "./SearchLoader";
import UserList from "./UserList";

function GetUsersData() {
  const { setUser, input, error, setError, loading, setLoading } = useContext(
    userListContext
  );
  useEffect(() => {
    const SEARCH_URL = `https://api.github.com/search/users?q=${input}`;
    (async () => {
      try {
        const userData = await fetch(SEARCH_URL);
        const users = await userData.json();
        setUser(users);
        setLoading(!loading);
      } catch (e) {
        if (e) {
          setError(e.message);
          console.log(error);
        }
      }
    })();
  }, [input, setUser, error, setError, setLoading]);

  return (
    <div className="list-container">
      {loading ? <SearchLoader /> : <UserList />}
    </div>
  );
}

export default GetUsersData;