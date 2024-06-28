import { forgetPassword, loginUser } from "../actions/authAction";
import {
  CREATE_USER,
  FORGET_PASSWORD,
  GET_CURRENT_USER,
  LOGIN_USER,
} from "../type";

const initialState = {
  createUser: [],
  loginUser: [],
  currentUser: [],
  loading: true,
  forgetPassword: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return {
        ...state,
        loading: false,
        createUser: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loading: false,
        loginUser: action.payload,
      };
    case FORGET_PASSWORD:
      return {
        ...state,
        loading: false,
        forgetPassword: action.payload,
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
