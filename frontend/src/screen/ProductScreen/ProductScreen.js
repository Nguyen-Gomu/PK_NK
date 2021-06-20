import React,{useEffect,useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import './ProductScreen.css'
import imgTest from "../../assets/images/pexels-дмитрий-трепольский-8283833.jpg"


// Action
import {getProductDetails} from '../../redux/actions/productActions'
import {addToCart} from '../../redux/actions/cartActions' 


const ProductScreen = ({match,history}) => {

    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);


    const addToCartHandler = () =>{
      dispatch(addToCart(product._id,qty));
      history.push("/cart");
    }

    return (
        <div className="productscreen">
            {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : <>
                <div className="productscreen__left">
                    <div className="left__image">
                    <img src={imgTest} alt={product.name}/>
                    </div>
                    <div className="left__info">
                        <p className="left__name">{product.name}</p>
                        <p>{Intl.NumberFormat('en-US').format(product.price)}₫</p>
                        <p> Description: pla pla pla and pla pla pla</p>
                    </div>  
                </div>
                <div className="productscreen__right">
                    <div className="right__info">
                        <p>{Intl.NumberFormat('en-US').format(product.price)}₫</p>
                        <p>
                            Status:<span>
                                {product.count >0 ? "On stock": "Out of Stock"}
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
                            <button onClick={addToCartHandler}>Add to cart</button>
                        </p>
                    </div>
                </div>
            </>}
        </div>
    )
}

export default ProductScreen
