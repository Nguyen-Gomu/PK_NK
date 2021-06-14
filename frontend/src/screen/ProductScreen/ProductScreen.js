import React from 'react'
import './ProductScreen.css'
import imgTest from "../../assets/images/pexels-дмитрий-трепольский-8283833.jpg"

const ProductScreen = () => {
    return (
        <div className="productscreen">
            <div className="productscreen__left">
                <div className="left__image">
                    <img src={imgTest} alt='/' />
                </div>
                <div className="left__info">
                    <p className="left__name">Product 1</p>
                    <p>Price: $499.99</p>
                    <p> Description: pla pla pla and pla pla pla</p>
                </div>  
            </div>
            <div className="productscreen__right">
                <div className="right__info">
                    <p>Price: $499.99</p>
                    <p>
                        Status:<span>
                            In Stock
                        </span>
                    </p>
                    <p>
                        Qty
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </p>
                    <p>
                        <button>Add to cart</button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
