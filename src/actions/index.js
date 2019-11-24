export const setAuthLoggedInStatus = () => dispatch => {
  dispatch({
    type: "USER_LOGGED_IN"
  });
};

export const setAuthLoggedOutStatus = () => dispatch => {
  dispatch({
    type: "USER_LOGGED_OUT"
  });
};

export const setUserDetails = (
  email,
  verified,
  uuid,
  name,
  photoUrl
) => dispatch => {
  dispatch({
    type: "USER_DETAILS_SET",
    payload: {
      email: email,
      name: name,
      uuid: uuid,
      verified: verified,
      photoUrl: photoUrl
    }
  });
};
