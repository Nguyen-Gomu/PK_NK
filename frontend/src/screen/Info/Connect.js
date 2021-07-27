import {Link} from 'react-router-dom'
import Glab from './form';
import './Info.css'

import React,{useEffect,useState} from 'react';
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";

const override = css`
  display: flex;
  margin: 0 auto;
  background-color:#f6f6f6;
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items:center;
`;

function ConnectGlab() {

    const [loading,setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },1000)
    },[])

    return (
        <div>
          {loading 
            ? 
          <BeatLoader
            className="loading"
            color={"#000"} 
            loading={loading} 
            css={override} 
            size={15} 
            margin={2}
          /> :(
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
        )}
        </div>
    );
}   

export default ConnectGlab;