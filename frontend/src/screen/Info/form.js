import React from 'react';
import boxImg from '../../assets/images/glab.jpg'
import './Info.css'

function Glab() {
    return (
        <div className="glab__container">
            <div className="glab__img">
                <img src={boxImg} alt="huhuh" ></img>
            </div>
            <div className="glab__info">
                <div className="glab__location">
                    <h4>LOCATION</h4>
                    <p>135/58 Tran Hung Dao, District 1, HCM City, Vietnam</p>
                    <p>Call +84945378809</p>
                </div>
                <div className="glab__social">
                    <h4>CONNECT US</h4>
                    <ul className="glab__link">
                        <li><a href="https://www.facebook.com/DigitalMarketingTokyoDeli"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="https://www.instagram.com/digitalmarketingtokyodeli/"><i class="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Glab;