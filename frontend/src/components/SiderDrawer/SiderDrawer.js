import React from 'react'
import {Link} from 'react-router-dom'

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
                    <Link className="menu__contact" href="/">
                        <p>Account</p>
                        <i class="fas fa-user"></i>
                    </Link>
                    <li>
                        <Link to="/">FEATURES</Link>
                    </li>
                        <li>
                            <Link to="/product" id="footwear">Footwear </Link>
                            <div className="menu__right">
                                <ul>
                                    <li><Link to="/">Newest Sneakers</Link></li>
                                    <li><Link to="/">Lifestyle</Link></li>
                                    <li><Link to="/">Running</Link></li>
                                    <li><Link to="/">Basketball</Link></li>
                                    <li><Link to="/">Gym & Training</Link></li>
                                    <li><Link to="/">Sandal</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="\">Apparel</Link>
                            <div className="menu__right">
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
                            </div>
                        </li>
                        <li>
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
                        </li>
                    <li><Link to="/login">Used</Link></li>
                </ul>
                <div className="search">
                    <form className="form">
                        <input type="text" placeholder="Search"></input>
                        <button className="btn__arrow"><i class="fas fa-arrow-left"></i></button>
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default SideDrawer
