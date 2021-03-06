import React, { Component }from 'react';
import {Link} from 'react-router-dom'
import '../css/MainPage.css'


import clothing from '../assets/images/hero_closther.jpg'
import shoe from '../assets/images/hero_shoe.jpg'
import justdoit from '../assets/images/nike-just-do-it.jpg'

import shirt from '../assets/images/nike-shirt.jpg'
import sandal from '../assets/images/nike-sandal.jpg'
import clothers from '../assets/images/nike-clothers.jpg'

import man from '../assets/images/man.jpg'
import woman from '../assets/images/woman.jpg'
import Products from '../components/Product/Product';


import adidas from '../assets/videos/adiasssss.mp4'
// import HeroSection  from '../components/Hero/index' 

// //////

export class MainPage extends Component{
    render() {
        return (
            <section className="home" id="home">
                <div className="main__container">  
                    <div className="video" >
                        <video width="100%" height="100%" mute src={adidas} autoPlay mute loop/>
                        <div className="video__info">
                            <div className="video__info-detail">
                                <img className="home__logo" src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/00-fw21-ivy-park-tease-cp-d_tcm221-703945.png"></img>
                                <h2 className="home__title">FLEX PARK</h2>
                                <button className="home__btn"><a className="home__btn-link" href="http://localhost:3000/product">SHOP NOW</a></button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Start Home */}
                {/* <div className="home__container">
                    <div className="home__data">
                        <h1 className="home__title">YOUR WORKHORSE <br/> WITH WINGS</h1>
                        <p className="home__description">nearly four decade and millions of miles later,<br/> the Pegasus 38 is really to run</p>
                        <Link href="/" className="button">Shop</Link>
                    </div>
                    <Link href="/"><img src={justdoit} alt="" className="home__img"></img></Link>
                </div> */}
                {/* End Home */}

                {/* Start Hero */}
                {/* <div className="hero">
                    <h1 className="hero__Logo">Trending Now</h1>
                    <div className="hero__container">
                        <div className="hero__right">
                            <div className="hero__data--right">
                                <h1 className="hero__title">Shoes</h1>
                                <Link href="/" className="button">Shop</Link>
                            </div>
                            <Link href="/"><img src={shoe} alt="" className="hero__img"/></Link>
                        </div>
                        <div className="hero__left">
                            <div className="hero__data--left">
                                <h1 className="hero__title">clothes</h1>
                                <Link href="/" className="button-right">Shop</Link>
                            </div>
                            <Link href="/"><img src={clothing} alt="" className="hero__img"/></Link>
                        </div>
                    </div>
                </div> */}
                {/* End Hero */}
                
                {/* List Product */}
                {/* End List Product */}

                {/* Kind Products */}
                {/* <div className="kind">
                    <h1 className="kind__title">Summer Essentials</h1>
                    <div className="kind__container">
                        <div className="kind__data">
                            <div className="row-1">
                                <Link href="/">
                                    <img className="kind__img" src={shirt}/>
                                    <p className="kind__description">Top & T-Shirt</p>
                                </Link>
                            </div>
                            <div className="row-2">
                                <Link href="/">
                                    <img className="kind__img" src={sandal}/>
                                    <p className="kind__description">Sandals & Slides</p>
                                </Link>
                            </div>
                            <div className="row-3">
                                <Link href="/">
                                    <img className="kind__img" src={clothers}/>
                                    <p className="kind__description">Shorts</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div> */}
                {/* End Kind */}


                {/* Men-Woman */}
                {/* <div className="who">
                    <h1>WHO ARE YOU SHOPPING FOR?</h1>
                    <div className="who__container">
                        <div className="who__right">
                            <Link href="/">
                                <img className="who__img" src={man}/>
                                <p>Man</p>
                            </Link>
                        </div>
                        <div className="who__left">
                            <Link href="/">
                                <img className="who__img" src={woman}/>
                                <p>Woman</p>
                            </Link>
                        </div>
                    </div>
                </div> */}


            </section>
        )
    }
}

export default MainPage;