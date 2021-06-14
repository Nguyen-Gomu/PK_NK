import React from 'react'
import './homeScreen.css'

import Product from '../../components/Product/Product'

const homeScreen = () => {
  return (
    <div className="homeScreen">
      <h2 className="homescreen__title">Latest Products</h2>

      <div className="homeScreen__products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  )
}

export default homeScreen
