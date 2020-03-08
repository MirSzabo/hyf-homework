import React from "react";
import GoogleOAuth from "./GoogleOAuth";
import SignUpWithEmail from "./SignUpWithEmail";
import firebaseConfig from "./config";
import * as firebase from "firebase/app";
import withFirebaseAuth from "react-with-firebase-auth";
import "firebase/auth";

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();

const GoogleAuthFirebase = withFirebaseAuth({
  providers,
  firebaseAppAuth
})(GoogleOAuth);

const Firebase = () => {
  return (
    <div className="signin">
      <GoogleAuthFirebase />
      <SignUpWithEmail />
    </div>
  );
};

export default Firebase;
