import * as actionTypes from "../constants/userContants";
import axios from "axios";


export const createUser = (user) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.REGISTER_REQUEST,
      payload: user
    });

    const { data } = await axios.post("http://localhost:5000/api/users/signup", user);
    
    dispatch({
      type: actionTypes.REGISTER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      payload: error.message
    });
  }
}


export const login = (user) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.LOGIN_REQUEST,
      payload: user
    });

    const { data } = await axios.post("http://localhost:5000/api/users/login", user);
    
    dispatch({
      type: actionTypes.LOGIN_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      payload: error.message
    });
  }
}