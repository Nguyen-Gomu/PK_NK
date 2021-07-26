import { css } from "@emotion/react";
import querystring from "query-string";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BeatLoader from "react-spinners/BeatLoader";
// Components
import Product from "../../components/Product/Product";
import Pagination from "../../components/Pagination/pagination";
import Search from "../../components/Search/Search";
//Actions
import { getProducts as listProducts } from "../../redux/actions/productActions";
import "./homeScreen.css";


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

  function handleSearchNameChange(newFilter){
    console.log("New filter", newFilter);
    setFilter({
      ...filter,
      page: 1,
      name: newFilter.q,
    })
  }

  return (
    <div className="homescreen">
      <div className="homescreen__products">
        <Search
          onSubmit={handleSearchNameChange}
        />
      {loading ? 
          <BeatLoader
            className="loading"
            color={"#000"} 
            loading={loading} 
            css={override} 
            size={15} 
            margin={2}
          />
         : error ? (
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
