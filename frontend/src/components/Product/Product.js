import "./Product.css";
import imgTest from "../../assets/images/nike0.jpg"
import { Link } from "react-router-dom";


const Product = ({ src, kind, price, name, productId ,brand}) => {
  return (
    <Link className="product" to={`/product/${productId}`}>
      <img src={src} alt={name}/>
      <div className="product__info">
      <div className="product__top">
        <span className="info__brand">{brand}</span>
        <p className="info__kind">{kind}</p>
      </div>
      <span className="info__name">{name}</span>
      <p className="info__price">{Intl.NumberFormat('en-US').format(price)}₫</p>
      </div>
    </Link>
  ); 
};

export default Product;