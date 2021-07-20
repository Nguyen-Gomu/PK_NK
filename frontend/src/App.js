import './App.css';
import React,{useState} from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header/Header'

import MainPage from './screen/MainPage'

import Section from './screen/Sections'
// import ForgotPassword from './screen/User/ForgotPassword/ForgotPassword'

// component
// import ImageSlider from './screen/Slider/ImageSlider'
import HomeScreen from "./screen/HomeScreen/homeScreen";
import Backdrop from './components/Backdrop/Backdrop'
import SideDrawer from './components/SiderDrawer/SiderDrawer'
// import Footer from './components/Footer'

function App() {

  const [sideToggle,setSideToggle] = useState(false)


  return (
        <main>
          <Router>
            <Header click={() => setSideToggle(true)}/>
            <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
            <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
            <Switch>
             <Section/>
             {/* <ImageSlider/> */}
            </Switch>
            {/* <Footer/> */}
          </Router>
        </main>
  );
}

export default App;
