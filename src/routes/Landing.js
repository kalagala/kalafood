import React from "react";
import AppBarTransparent from "../containers/AppBarTransparent";
import LandingMessage from "../containers/LandingMessage";
import ActionButtons from "../containers/ActionButtons";
import Faq from "../containers/Faq";
class Landing extends React.Component {
  render() {
    return (
      <div>
        <AppBarTransparent />
        <LandingMessage />
        <ActionButtons />
        <Faq />
      </div>
    );
  }
}

export default Landing;
