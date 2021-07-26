import React,{ useEffect ,useState} from 'react'

import './CartScreen.css'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";

// Components
import CartItem from '../../components/CartItem/CartItem'

// Action
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin: 0 auto;
  background-color:#f6f6f6;
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
`;



const CartScreen = () => {
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
        setLoading(false)
        },3000)
    },[])

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const {cartItems} = cart;

    useEffect(() => {},[]);

    const ChangeHandler = (id, qty, sizes) => {
        dispatch(addToCart(id, qty, sizes));
    };

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };


    const getCartCount = () => {
        return cartItems.reduce((qty,item) => Number(item.qty) + qty, 0);
    };



    const getCartTotal = () => {
        return cartItems
            .reduce((price,item) => price + item.price * item.qty + 30000, 0)
            .toFixed(2);
    }

    const getCartSubTotal = () => {
        return cartItems
            .reduce((price,item) => price + item.price * item.qty , 0)
            .toFixed(2);
    }

    return (
        <div>
        {loading 
            ? 
          <BeatLoader
            className="loading"
            color={"#000"} 
            loading={loading} 
            css={override} 
            size={15} 
            margin={2}
          /> :(
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
                            ChangeHandler={ChangeHandler}
                        />
                    ))
                )}
            </div>
            <div className="summary">
                <h4>Summary</h4>
                < div className="summary__Box">
                    <div className="summary__Box--subtotal">
                    <span>Subtotal</span>
                    <p>{Intl.NumberFormat('en-US').format(getCartSubTotal())}₫</p>
                </div>                  
                <div className="summary__Box--ship">
                    <span>Estimated Delivery & Handling</span>
                    <p>30,000₫</p>
                </div>
                <div className="summary__Box--item">
                    <span>Item</span>
                    <p>{getCartCount()}</p>
                </div>
                <div className="summary__Box--total">
                    <span>Total</span>
                    <p>{Intl.NumberFormat('en-US').format(getCartTotal())}₫</p>
                </div>
                {/* <Link type="button" to="/checkout" className="cart" disabled={cartItems.length === 0 }>
                    Guest Checkout
                </Link> */}
                <Link type="button" to={cartItems.length === 0  ? "/" : "/checkout"} className="cart">
                    {/* Guest Checkout */}
                    {cartItems.length === 0  ? "Go Back" : "Guest Checkout"}
                </Link>
            </div>
        </div>
        </div>
          )}
          </div>
    )
}

export default CartScreen
