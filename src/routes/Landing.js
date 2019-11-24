import React from "react";
import AppBarTransparent from "../containers/AppBarTransparent";
import LandingMessage from "../containers/LandingMessage";
import ActionButtons from "../containers/ActionButtons";
import Faq from "../containers/Faq";
import ActionFinal from "../containers/ActionFinal";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Landing extends React.Component {
  render() {
    if (this.props.authed) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        <AppBarTransparent />
        <LandingMessage />
        <ActionButtons />
        <Faq />
        <ActionFinal />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authed: state.auth.loggedIn
  };
};
export default connect(mapStateToProps, null)(Landing);
