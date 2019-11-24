import { combineReducers } from "redux";
const userReducer = (
  state = {
    name: null,
    email: null,
    isEmailVerified: null,
    uuid: null,
    photoUrl: null
  },
  action
) => {
  switch (action.type) {
    case "USER_DETAILS_SET":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        isEmailVerified: action.payload.verified,
        uuid: action.payload.uuid,
        photoUrl: action.payload.photoUrl
      };
    default:
      return state;
  }
};
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
    case "USER_LOGGED_OUT":
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
export default combineReducers({
  auth: authReducer,
  user: userReducer
});
