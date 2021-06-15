import * as actionTypes from '../constants/cartConstants'

import axios from 'axios'

export const addToCart = (id,qty) => async (dispatch,getState) => {
    const {data} = await axios.get(`/api/product${id}`);

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload:{
            product:data._id,
            name:data._name,
            url:data._url,
            price:data._price,
            description:data._description,
            count:data.count,
            qty
        }
    })


    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => (dispatch,getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload:id,
    });

    localStorage.setItem("cart",JSON.stringify(getState().cart.cartItems));
};