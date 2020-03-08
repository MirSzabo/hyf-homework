import React, { useState } from "react";
import WorkReport from "../WorkReport";
import "../App.css";
const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

async function signin(user, password) {
  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(user, password);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

async function signout() {
  await firebase.auth().signOut();
  console.log("signed out");
}

function InputForm() {
  const [user, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      {" "}
      <form
        onSubmit={event => {
          event.preventDefault();
          signin(user, password);
          setUsername("");
          setPassword("");
        }}
      >
        <label>Email:</label>
        <input
          value={user}
          onChange={e => setUsername(e.target.value)}
          type="email"
        ></input>
        <label>Password:</label>
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="text"
        ></input>
      </form>
      <button onClick={() => signin(user, password)}>Log in</button>
      <button onClick={() => signout()}>Log out</button>
    </div>
  );
}

function SignUpWithEmail() {
  return (
    <div>
      <InputForm />
    </div>
  );
}

export default SignUpWithEmail;
