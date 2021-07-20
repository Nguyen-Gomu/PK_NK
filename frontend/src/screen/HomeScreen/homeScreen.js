import "./homeScreen.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import querystring from "query-string"

// Components
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/pagination";

//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch([]);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    totalRows: 2
  });

  const [filter, setFilter] = useState({
    limit: 12,
    page: 1,
    totalRows: 253
  });

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    const paramstring = querystring.stringify(filter);
    dispatch(listProducts(paramstring));
    setPagination(filter);
  }, [dispatch, filter]);

  function handlePageChange(newPage){
    console.log('New page: ', newPage);
    setFilter({
      ...filter,
      page: newPage
    });
  }

  return (
    <div className="homescreen">
      <div className="homescreen__products">
      {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              name={product.name}
              brand={product.brand}
              kind={product.kind}
              price={product.price}
              src={product.src}
              productId={product._id}
            />
          ))
        )}
        <Pagination 
          pagination={pagination}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default HomeScreen;
