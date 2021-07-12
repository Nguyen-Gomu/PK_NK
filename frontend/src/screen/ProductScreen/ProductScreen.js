import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";



const ProductScreen = ({ match, history }) => {
  const [qty, setQty] = useState(1);
  const [sizes, setSizes] = useState("");
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    } 
  }, [dispatch, match, product]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img src={product.src} alt="/" />
            </div>
            <div>
              {product.imgDetail && product.imgDetail.map((Img) => (
                <img key={product._id} src={Img.toString()} />
              ))}
            </div>
          </div>
          <div className="productscreen__right">
            <div className="left__info">
              <p className="left__kind">{product.gender} • {product.kind}</p>
              <p className="left__name">{product.name}</p>
              <p>{product.brand} / {product.type}</p>
              <p className="left__price">Price: {Intl.NumberFormat('en-US').format(product.price)}₫</p>
              <p>{product.content}</p>
            </div>
            <div className="right__info">
              <div className="size">
              <p>
                size:
                    {/* nó giống giống như thằng Qty */}
              </p>
              </div>
              <p>
                Status:
                <span>
                   {product.count > 0 ? "In Stock" : "Out of Stock"}

                </span>
              </p>
              <p>
                Qty  
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.count).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))} 
                </select>

              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Add To Cart
                </button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductScreen;