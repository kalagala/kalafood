import React from "react";
import history from "./history";
import { Route, Router } from "react-router-dom";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./util/firebase-auth";
import { setAuthLoggedInStatus } from "./actions";
import { connect } from "react-redux";
import "./assets/styles/app.css";
import Landing from "./routes/Landing";
import Login from "./routes/Login";
import TermsOfService from "./routes/TermsOfService";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import Home from "./routes/Home";

class App extends React.Component {
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setAuthLoggedInStatus();
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div>
        <Router history={history}>
          <Route path="/" exact component={Landing} />
          <Route path="/login" exact component={Login} />
          <Route path="/terms-of-service" exact component={TermsOfService} />
          <Route path="/privacy-policy" exact component={PrivacyPolicy} />
          <Route path="/home" exact component={Home} />
        </Router>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

export default connect(mapStateToProps, { setAuthLoggedInStatus })(App);
