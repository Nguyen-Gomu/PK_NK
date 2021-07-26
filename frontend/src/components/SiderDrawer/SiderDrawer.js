import React from 'react'
import {Link} from 'react-router-dom'
import RightImg from '../../assets/images/z2424960418725_6274f07fb01eeb92406b38d4e0e311e9-1_2048x2048.webp'
// CSS
import './SiderDrawer.css'


const SideDrawer = ({show,click}) => {
    const sidedrawerClass = ["sidedrawer"];

    if(show) {
        sidedrawerClass.push("show");
    }


    return (
        <div className={sidedrawerClass.join(" ")}>
            <div className="menu__logo">
                <h1>
                    <Link href="/">PK-K</Link>
                </h1>
            </div>
            <nav className="menu">
                <ul  onClick={click}>
                    <Link className="menu__contact" href="/home">
                        <p>HOME</p>
                    </Link>
                    <li>
                        <Link to="/">PRODUCTS</Link>
                    </li>
                        <li>
                            <Link to="/product" id="footwear">cONSIGNMENT TERM</Link>
                            {/* <div className="menu__right">
                                <ul>
                                    <li><Link to="/">Newest Sneakers</Link></li>
                                    <li><Link to="/">Lifestyle</Link></li>
                                    <li><Link to="/">Running</Link></li>
                                    <li><Link to="/">Basketball</Link></li>
                                    <li><Link to="/">Gym & Training</Link></li>
                                    <li><Link to="/">Sandal</Link></li>
                                </ul>
                            </div> */}
                        </li>
                        <li>
                            <Link to="/home/connect">CONNECT WITH US</Link>
                            {/* <div className="menu__right">
                                <ul>
                                    <li><Link to="/">CONIC®</Link></li>
                                    <li><Link to="/">Hoodies</Link></li>
                                    <li><Link to="/">Shorts</Link></li>    
                                    <li><Link to="/">Pants</Link></li>
                                    <li><Link to="/">Outerwears</Link></li>
                                    <li><Link to="/">Tees</Link></li>
                                    <li><Link to="/">Shirts</Link></li>
                                    <li><Link to="/">Jackets</Link></li>
                                    <li><Link to="/">Sweaters</Link></li>
                                </ul>
                            </div> */}
                        </li>
                        {/* <li>
                        <Link to="/">Accessories</Link>
                            <div className="menu__right">
                                <ul>                       
                                    <li><Link to="/">Socks</Link></li>
                                    <li><Link to="/">Cap</Link></li>    
                                    <li><Link to="/">Backpack and Bag</Link></li>
                                    <li><Link to="/">Shoe Care</Link></li>
                                    <li><Link to="/">Glasses</Link></li>
                                    <li><Link to="/">Miscellaneous</Link></li>
                                    <li><Link to="/">Bearbricks</Link></li>
                                    <li><Link to="/">Face Mask</Link></li>
                                </ul>
                            </div>
                        </li> */}
                </ul>
                {/* <div className="search">
                    <form className="form">
                        <input type="text" placeholder="Search"></input>
                        <button className="btn__arrow"><i class="fas fa-arrow-left"></i></button>
                    </form>
                </div> */}
                <div className="right-img">
                    <img src={RightImg} alt="PK GOMU"></img>
                </div>
            </nav>
        </div>
    )
}

export default SideDrawer
