import React from 'react'
import './CartItem.css'

import {Link} from 'react-router-dom'

const CartItem = ({item,removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5a636763-c983-4173-8228-dcae17a32466/mercurial-vapor-14-elite-fg-football-boot-mBw0QS.png" alt="/"></img>
            </div>

            <Link to={`/product/${111}`} className="cartitem__name">
                <p>Product 1</p>
            </Link>

            <p className="cartitem__price">$499.99</p>

            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
            <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default CartItem