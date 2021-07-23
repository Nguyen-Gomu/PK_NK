import React from 'react';
import {Link} from 'react-router-dom'
import Glab from './form';
import './Info.css'

function ConnectGlab() {
    return (
        <div className="ConnectGlab__container">
            <div className="ConnectGlab__info">
                <div className="ConnectGlab__Link">
                    {/* <Link href="http://localhost:3000/">Home</Link> */}
                </div>
                <p className="ConnectGlab__content">
                    <h3 className="ConnectGlab__title">CONNECT WITH US</h3><br/>
                    <span className="ConnectGlab__item">
                        Không dừng lại ở việc xây dựng nên một cửa hàng sneaker thông thường. G-LAB còn là nơi chứa đựng rất nhiều những cảm hứng, những ý tưởng và câu chuyện xoay quanh nền văn hoá sát mặt đất.<br/>
                        Hãy đến, trải nghiệm và cùng chia sẻ câu chuyện thú vị của bạn xoay quanh những đôi giày nhé!
                    </span>
                </p>
            </div>
            <Glab/>
        </div>
    );
}   

export default ConnectGlab;