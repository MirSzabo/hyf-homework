import React from "react";
import WorkReport from "../WorkReport"
import "../App.css"

function GoogleOAuth(props) {
  return (
    <div className="App">
      <header className="App-header">
        {props.user ? (
          <>
            <WorkReport />
          </>
        ) : (
          <p>Please sign in</p>
        )}
        {props.user ? (
          <button onClick={props.signOut}>Sign out</button>
        ) : (
          <button className="button-google" onClick={props.signInWithGoogle}></button>
        )}
      </header>
    </div>
  );
}

export default GoogleOAuth
