import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../util/firebase-auth";
import { setAuthLoggedOutStatus } from "../actions";
import "../assets/styles/home.scss";
import BottomNavigation from "../containers/BottomNavigation";
import AppBarHome from "../containers/AppBarHome";
class Home extends React.Component {
  logout = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          // Sign-out successful.
          this.props.setAuthLoggedOutStatus();
        },
        error => {
          // An error happened.
          console.log("error occured during signout" + error);
        }
      );
  };
  render() {
    console.log(this.props);
    if (!this.props.authed) {
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: this.props.location } }}
        />
      );
    }
    return (
      <div className="home-page">
        <AppBarHome />
        <BottomNavigation />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authed: state.auth.loggedIn
  };
};
export default connect(mapStateToProps, { setAuthLoggedOutStatus })(Home);
