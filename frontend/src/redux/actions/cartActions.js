import axios from "axios";
import * as actionTypes from "../constants/cartConstants";

export const addToCart = (id, qty, sizes) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      src: data.src,
      price: data.price,
      count: data.count,
      brand: data.brand,
      imgDetail: data.imgDetail,
      size: data.size,
      content: data.content,
      sizes,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: actionTypes.CART_SAVE_SHIPPING, payload: data });
}
