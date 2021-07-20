import * as actionTypes from "../constants/ordersConstants";

const orderReducer = (state = {}, action) => {
    switch (action.type) {
      case actionTypes.CREATE_ORDER:
        return { order: action.payload };
      case actionTypes.CLEAR_ORDER:
        return { order: null };
      case actionTypes.FETCH_ORDERS:
        return { orders: action.payload };
      default:
        return state;
    }
  };
  export { orderReducer };