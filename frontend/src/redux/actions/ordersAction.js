import * as actionTypes from "../constants/ordersConstants";


export const createOrder = (order) => (dispatch) => {
  fetch("/api/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(order),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type:actionTypes.CREATE_ORDER, payload: data });
      localStorage.clear("cartItems");
      dispatch({ type: actionTypes.CLEAR_CART });
    });
};
export const clearOrder = () => (dispatch) => {
  dispatch({ type: actionTypes.CLEAR_ORDER });
};
export const fetchOrders = () => (dispatch) => {
  fetch("/api/orders")
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: actionTypes.FETCH_ORDERS, payload: data });
    });
};





// export const createOrder = (order) => (dispatch) => {
//     fetch("/api/orders", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(order),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({ type:actionTypes.CREATE_ORDER, payload: data });
//         localStorage.clear("cartItems");
//         dispatch({ type: actionTypes.CLEAR_CART });
//       });
//   };
//   export const clearOrder = () => (dispatch) => {
//     dispatch({ type: actionTypes.CLEAR_ORDER });
//   };
//   export const fetchOrders = () => (dispatch) => {
//     fetch("/api/orders")
//       .then((res) => res.json())
//       .then((data) => {
//         dispatch({ type: actionTypes.FETCH_ORDERS, payload: data });
//       });
//   };
  