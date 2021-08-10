import * as actionTypes from "../constants/userContants";

export const userCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_REQUEST:
      return {
        loading: true
      };
    case actionTypes.REGISTER_SUCCESS:
      return { 
        loading: false,
        user: action.payload,
      };
    case actionTypes.REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}

export const loginRedecer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_REQUEST:
      return {
        loading: true
      };
    case actionTypes.LOGIN_SUCCESS:
      return { 
        loading: false,
        user: action.payload,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default: return state;
  }
}