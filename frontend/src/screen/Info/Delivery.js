import React from 'react';
import {Link} from 'react-router-dom'
import Glab from './form';
import './Info.css'

function Delivery() {
    return (
        <div className="Delivery__container">
            <div className="Delivery__info">
                <div className="Delivery__Link">
                    {/* <Link href="http://localhost:3000/">Home</Link> */}
                </div>
                <p className="Delivery__content">
                    <h3 className="Delivery__title">DELIVERY AND EXCHANGE</h3><br/>
                    <span className="Delivery__item">
                        Những sản phẩm mua trực tiếp tại cửa hàng hoặc trực tuyến trên Fanpage đều đi kèm theo hoá đơn bán hàng.<br/>
                        Đối với các đơn hàng ngoại thành, khách hàng sau khi chốt sản phẩm cần mua, sẽ thanh toán 100% giá trị sản phẩm thông qua số tài khoản mà G-LAB cung cấp.<br/>
                        Khách hàng có quyền đổi sản phẩm khác trong vòng 3 NGÀY kể từ lúc mua (3 ngày kể từ lúc nhận đối với các đơn hàng ngoại thành).<br/>
                        Sản phẩm được đổi phải có giá trị bằng hoặc cao hơn sản phẩm đổi và chỉ được đổi một lần.<br/>
                    </span>
                </p>
            </div>
            <Glab/>
        </div>
    );
}   

export default Delivery;