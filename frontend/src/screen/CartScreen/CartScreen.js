import React from 'react'

import './CartScreen.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";

// Components
import CartItem from '../../components/CartItem/CartItem'

// Action
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

const CartScreen = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
      };

    return (
        <div className="cartscreen">
            <div className="cartscreen__left">
                <h2>Shopping Cart</h2>
                {/* {
                    cartItems.length === 0 ?(
                        <div>
                            Your cart is empty <Link to="/">Go Back</Link>
                        </div>
                    ): cartItems.map(item =>(
                        <CartItem/>
                    ))
                } */}
                {cartItems.length === 0 ? (
                    <div>
                    Your Cart Is Empty <Link to="/">Go Back</Link>
                    </div>
                ) : (
                    cartItems.map((item) => (
                    <CartItem
                        key={item.product}
                        item={item}
                        removeHandler={removeFromCartHandler}
                    />
                    ))
                )}
            </div>
            <div className="cartscreen__right">
                <div className="cartscreen__info">
                    <p>Subtotal (0) items</p
                    >
                    <p>$499.99</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen
