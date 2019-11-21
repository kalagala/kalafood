import React from "react";
import AppBarLoginOnly from "../containers/AppBarLogoOnly";
import "../assets/styles/Login.css";

import LoginWithGoogle from "../components/LoginWithGoogle";
import LoginWithFacebook from "../components/LoginWithFacebook";
class Login extends React.Component {
  render() {
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

export default Login;
