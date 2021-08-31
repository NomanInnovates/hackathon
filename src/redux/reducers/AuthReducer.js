import { LOGIN, LOGOUT } from "../constants/constants";

let initialState = {
  isLogin: false,
};

function AuthReducers(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogin: true,
        user: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        user: action.payload,
      };

    default:
      return state;
  }
}
export default AuthReducers;
