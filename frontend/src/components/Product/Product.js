import "./Product.css";
import imgTest from "../../assets/images/nike0.jpg"
import { Link } from "react-router-dom";


const Product = ({ src, kind, price, name, _id ,count,brand}) => {
  return (
    <div className="product">
      <img src={src[0]} alt='/' />
      {/* 
      <Link to={`/products/${111}`} className="info__button">
        View
      </Link> */}
      <div className="product__info">

      <div className="product__top">
        <span className="info__brand">{brand}</span>
        <p className="info__  ">{kind}</p>
      </div>
      <span className="info__name">{name}</span>
      <p className="info__price">{Intl.NumberFormat('en-US').format(price)}₫</p>

      </div>
    </div>
  ); 
};



export default Product;