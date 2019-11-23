export const setAuthLoggedInStatus = () => dispatch => {
  dispatch({
    type: "USER_LOGGED_IN"
  });
};
