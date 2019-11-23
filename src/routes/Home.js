import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Home extends React.Component {
  render() {
    if (!this.props.authed) {
      return (
        <Redirect
          to={{ pathname: "/login", state: { from: this.props.location } }}
        />
      );
    }
    return <h1>Its a protected Route</h1>;
  }
}

const mapStateToProps = state => {
  return {
    authed: state.auth.loggedIn
  };
};
export default connect(mapStateToProps, null)(Home);
