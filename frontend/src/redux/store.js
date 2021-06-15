import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// Reducers
import {cartReducers} from './reducers/cartReducers'
import { getProductsReducer,
  getProductDetailsReducer,} from './reducers/productReducers'

const reducers = combineReducers({
  cart:cartReducers,
  getProducts:getProductsReducer,
  getProductDetails:getProductDetailsReducer,
});

const middleware = [thunk];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;