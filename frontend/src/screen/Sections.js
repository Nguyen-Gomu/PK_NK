import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import CartScreen from './CartScreen/CartScreen'
import Checkout from './Checkout/Checkout'
import HomeScreen from "./HomeScreen/homeScreen"
import ConnectGlab from './Info/Connect'
import ConsignmentTerm from './Info/ConsignmentTerm'
import Delivery from './Info/Delivery'
import FAQs from './Info/FAQs'
import Glab from './Info/form'
import MainPage from './MainPage'
import ProductScreen from './ProductScreen/ProductScreen'
import SignIn from './User/Signin/Signin'
import SingUp from './User/Signup/Signup'




export class Sections extends Component {
    render() {
        return (
            <section>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SingUp} />
                <Route path="/checkout" component={Checkout}/>

                <Route exact path="/product" component={HomeScreen}/>
                <Route exact path="/product/:id" component={ProductScreen}/>
                <Route exact path="/cart" component={CartScreen}/>
                <Route path="/" component={MainPage} exact/>
                <Route path="/glab" component={Glab}/>
                <Route path="/home/consignmentterm" component={ConsignmentTerm}/>
                <Route path="/home/connect" component={ConnectGlab}/>
                <Route path="/home/delivery" component={Delivery}/>
                <Route path="/home/faqs" component={FAQs} />
            </section>
        )
    }
}

export default Sections
