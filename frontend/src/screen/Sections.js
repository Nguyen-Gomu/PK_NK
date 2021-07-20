import React, { Component } from 'react'

import MainPage from './MainPage'


import SignIn from './User/Signin/Signin'
import SingUp from './User/Signup/Signup'
import Checkout from './Checkout/Checkout'
import ProductScreen from './ProductScreen/ProductScreen'
import CartScreen from './CartScreen/CartScreen'
import HomeScreen from "./HomeScreen/homeScreen";
import {Route} from 'react-router-dom'

export class Sections extends Component {
    render() {
        return (
            <section>
                <Route path="/user/signin" component={SignIn}/>
                <Route path="/signup" component={SingUp} />
                <Route path="/checkout" component={Checkout}/>

                <Route exact path="/" component={HomeScreen}/>
                <Route exact path="/product/:id" component={ProductScreen}/>
                <Route exact path="/cart" component={CartScreen}/>
                <Route path="/home" component={MainPage} exact/>

            </section>
        )
    }
}

export default Sections
