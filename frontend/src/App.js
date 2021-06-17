import './App.css';
import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header/Header'

import MainPage from './screen/MainPage'


import SignIn from './screen/User/Signin/Signin'
import Checkout from './screen/Checkout/Checkout'
import ProductScreen from './screen/ProductScreen/ProductScreen'
import CartScreen from './screen/CartScreen/CartScreen'


// component
import HomeScreen from "./screen/HomeScreen/homeScreen";
import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/SiderDrawer/SiderDrawer'
import Footer from "./components/Footer";


function App() {

  const [sideToggle,setSideToggle] = useState(false)


  return (
        <main>
          <Router>
            <Header click={() => setSideToggle(true)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
            <Switch>
              {/* <Route path="/home" component={HomeScreen} />
              
              <Route path="/signin" component={SignIn}/> 
              <Route path="/checkout" component={Checkout}/> */}

              <Route exact path="/home" component={HomeScreen}/>
              <Route exact path="/product" component={ProductScreen}/>
              <Route exact path="/cart" component={CartScreen}/>
              <Route path="/" component={MainPage} exact/>
            </Switch>
            {/* <Footer/> */}
          </Router>
        </main>
  );
}

export default App;
