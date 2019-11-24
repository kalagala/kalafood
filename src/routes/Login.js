import React from "react";
import AppBarLoginOnly from "../containers/AppBarLogoOnly";
import "../assets/styles/Login.css";

import LoginWithGoogle from "../components/LoginWithGoogle";
import LoginWithFacebook from "../components/LoginWithFacebook";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends React.Component {
  render() {
    if (this.props.authed) {
      console.log("no need to login already authed");
      if (this.props.history.action === "REPLACE") {
        //this.props.history.push(this.props.location.state.from);
        //console.log(this.props.location.state.from);
        return (
          <Redirect
            to={{
              pathname: this.props.location.state.from.pathname,
              state: { from: this.props.location }
            }}
          />
        );
      } else {
        return (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: this.props.location }
            }}
          />
        );
      }
      // if (this.props.location.state.from) {
      //   console.log(this.props);
      //   this.props.history.push(this.props.location.state.from);
      // }
    }
    return (
      <div>
        <AppBarLoginOnly />
        <div className="login-options">
          <h3>Ingia KalaFood kwa kutumia account yako ya</h3>
          <LoginWithGoogle />
          <LoginWithFacebook />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authed: state.auth.loggedIn
  };
};
export default connect(mapStateToProps, null)(Login);
