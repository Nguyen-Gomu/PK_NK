import * as actionTypes from "../constants/ordersConstants";
import axios from "axios";


export const createOrder = (order) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST,
      payload: order
    });

    const { data: { data: newOrder } } = await axios.post("http://localhost:5000/api/orders", order);
    
    dispatch({
      type: actionTypes.ORDER_CREATE_SUCCESS,
      payload: newOrder
    });
    
    localStorage.clear('cart');
    dispatch({
      type: actionTypes.CLEAR_CART
    })
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload: error.message
    });
  }
}