import React from 'react'
import './CartItem.css'

import {Link} from 'react-router-dom'

const CartItem = ({item,removeHandler,ChangeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.src} alt={item.name}></img>
            </div>
            <div className="cartitem__info">
              <div className="cartitem__info--top">
                <Link to={`/product/${item.product}`} className="cartitem__name">
                    <p className="cartitem__name">{item.name}</p>
                </Link>
                <p className="cartitem__price">{Intl.NumberFormat('en-US').format(item.price)}₫</p>
              </div>
              <p>{item.content}</p>
              <div className="qty">
                <p>Quantity:</p>
                <select
                  value={item.qty}
                  onChange={(e) => ChangeHandler(item.product, e.target.value, item.sizes)}
                  className="cartItem__select"
                >
                  {[...Array(item.count).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div className="size">
                <p>Size: </p>
                <select
                  value={item.sizes}
                  onChange={(e) => ChangeHandler(item.product, item.qty, e.target.value)}
                  className="cartItem__select"
                >
                  {item.size.map((x) => (
                    <option key={item.product} value={x}>
                      {x}
                    </option>
                  ))}
                </select>
              </div>

              <p className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>
                  Remove
              </p>
            </div>
            
        </div>
    )
}

export default CartItem