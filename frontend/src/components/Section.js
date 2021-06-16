import React, { Component } from 'react'
import {Route} from 'react-router-dom'


import CheckOut from '../screen/Checkout/Checkout'

export class Section extends Component {
    render() {
        return (
            <section>
                
                {/* <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/bag" component={Bag}/>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/> */}
                <Route path="/" component={CheckOut}/>

            </section>
        )
    }
}

export default Section
