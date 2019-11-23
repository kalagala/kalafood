import { combineReducers } from "redux";

const authReducer = (
  state = {
    loggedIn: false
  },
  action
) => {
  switch (action.type) {
    case "USER_LOGGED_IN":
      return {
        ...state,
        loggedIn: true
      };
    default:
      return state;
  }
};
export default combineReducers({
  auth: authReducer
});
