import "./Product.css";
import imgTest from "../../assets/images/nike0.jpg"
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img src={imgTest} alt='/' />

      <div className="product__info">
        <p className="info__name">Name</p>

        <p className="info__description">description</p>

        <p className="info__price">$500</p>

        <Link to='/' className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;