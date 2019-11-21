import React from "react";
import AppBarTransparent from "../containers/AppBarTransparent";
import LandingMessage from "../containers/LandingMessage";
import ActionButtons from "../containers/ActionButtons";
import Faq from "../containers/Faq";
import ActionFinal from "../containers/ActionFinal";
import Footer from "../components/Footer";
class Landing extends React.Component {
  render() {
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

export default Landing;
