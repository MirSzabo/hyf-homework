import React, { useState, createContext } from "react";
import "./App.css";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import GetUsersData from "./components/GetUsersData";
import MyRepos from "./components/MyRepos";
import "./App.css";

export const userListContext = createContext();

function App() {
  const [input, setInput] = useState("");
  const [user, setUser] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      <Header />
      <div className="search-container">
        <userListContext.Provider
          className="user-container"
          value={{
            input,
            setInput,
            user,
            setUser,
            error,
            setError,
            loading,
            setLoading
          }}
        >
          <InputForm />
          <GetUsersData />
        </userListContext.Provider>
        <MyRepos />
      </div>
    </div>
  );
}

export default App;
