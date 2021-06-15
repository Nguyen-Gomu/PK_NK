import * as actionTypes from '../constants/cartConstants'

export const cartReducers = (state = {cartIteams: [] }, action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;
      
      const exisItem = state.cartIteams.find((x) => x.product === item.product);

      if(exisItem) {
        return {
          ...state,
          cartIteams:state.cartIteams.map((x) => x.product === exisItem.product ? item : x)
        }
      }else{
        return{
          ...state,
          cartIteams:[...state.cartIteams,item],
        };
      }
      case actionTypes.REMOVE_FROM_CART:
        return {
          ...state,
          cartIteams:state.cartIteams.filter((x) => x.product !== action.payload)
        }
    default:
      return state;
  }
}