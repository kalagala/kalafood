import React from "react";
import { connect } from "react-redux";
class ProfilePicture extends React.Component {
  render() {
    return (
      <img src={this.props.photoUrl} alt={`picha ya ${this.props.name}'`} />
    );
  }
}

const mapStateToProps = state => {
  return {
    photoUrl: state.user.photoUrl,
    name: state.user.name
  };
};

export default connect(mapStateToProps, null)(ProfilePicture);
