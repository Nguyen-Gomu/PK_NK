import React from 'react'
import './CartItem.css'

import {Link} from 'react-router-dom'

const CartItem = ({item,removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.src} alt={item.name}></img>
            </div>
            <div className="cartitem__info">
              <div className="cartitem__info--top">
                <Link to={`/product/${item.product}`} className="cartitem__name">
                    <p>{item.name}</p>
                </Link>

                <p className="cartitem__price">{Intl.NumberFormat('en-US').format(item.price)}₫</p>
              </div>
              <p>{item.content}</p>
              <div className="qty">
                <p>Quantity:</p>
                <select className="cartitem__select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
              </div>

              <div className="size">
                <p>Size:</p>
                <p>....</p>
              </div>

              <p className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
                  remove
              </p>
            </div>
            
        </div>
    )
}

export default CartItem