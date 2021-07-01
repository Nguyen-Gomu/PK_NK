import React from 'react'

import './CartScreen.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";

// Components
import CartItem from '../../components/CartItem/CartItem'

// Action
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

const CartScreen = ({ item, qtyChangeHandler, removeHandler }) => {
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
            <div className="summary">
                <h4>Summary</h4>
                < div className="summary__Box">
                    <div className="summary__Box--subtotal">
                    <span>Subtotal</span>
                    <p>$20</p>
                </div>                  
                <div className="summary__Box--ship">
                    <span>Estimated Delivery & Handling</span>
                    <p>30,000₫</p>
                </div>
                <div className="summary__Box--total">
                    <span>Total</span>
                    <p>$15</p>
                </div>
                <Link to="/product" className="cart" >
                    Guest Checkout
                </Link>
            </div>
        </div>
        </div>
    )
}

export default CartScreen
