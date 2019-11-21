import React from "react";
import facebookIcon from "../assets/icons/facebook.svg";
import "../assets/styles/login-option.css";

import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import firebaseConfig from "../util/firebase-auth";
class LoginWithFacebook extends React.Component {
  login = () => {
    console.log("were loging your ass in");
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    let provider = new firebase.auth.FacebookAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        if (user) {
          console.log("signed in successfully");
          console.log(user);
          console.log(token);
        } else {
          console.log("some error occured");
        }
        // ...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.table([errorCode, errorMessage, email, credential]);
        // ...
      });
  };
  render() {
    return (
      <div className="login-option" onClick={this.login}>
        <img src={facebookIcon} />
        <span>Facebook</span>
      </div>
    );
  }
}

export default LoginWithFacebook;
