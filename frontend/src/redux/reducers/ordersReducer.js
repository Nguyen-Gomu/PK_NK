import * as actionTypes from "../constants/ordersConstants";

const ORDER_INITIAL_STATE ={
  orderClient:{},
  orderItems:[],
}


export const orderReducer = (state = ORDER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ORDER:
      const item = action.payload;
      const existItem = state.orderItems.find((x) => x.product === item.product);

      if(existItem){
        return{
          ...state,
          // orderClient:state.orderClient.
          orderItems: state.orderItems.map((x) => 
            x.product === existItem.product ? item : x
          )
        }
      }else{
        return {
          ...state,
          orderItems: [...state.orderItems,item]
        };
      }
      
    case actionTypes.CLEAR_ORDER:
      return { order: null };
    case actionTypes.FETCH_ORDERS:
      return { orders: action.payload };
    default:
      return state;
  }
};





// const orderReducer = (state = ORDER_INITIAL_STATE, action) => {
//     switch (action.type) {
//       case actionTypes.CREATE_ORDER:
//         return { order: action.payload };
//       case actionTypes.CLEAR_ORDER:
//         return { order: null };
//       case actionTypes.FETCH_ORDERS:
//         return { orders: action.payload };
//       default:
//         return state;
//     }
//   };
//   export { orderReducer };