import "./homeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../../components/Product/Product";

//Actions
import { getProducts as listProducts } from "../../redux/action/productAction";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="homescreen">
      <h2 className="homescreen__title">Latest Products</h2>
      <div className="homeScreen__products">
        {/* {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product/>
          ))
        )} */}
        <Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/><Product/>
      </div>
    </div>
  );
};

export default HomeScreen;