import { useParams } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';
import styles from './ProductPage.module.css';
import { ProductSizeButton } from '../../components/ProductSizeButton/ProductSizeButton';
import { QuantityCounter } from '../../components/QuantityCounter/QuantityCounter';

import { REACT_APP_API_URL } from '../../utils/apiConfig';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../../components/LoadingBox/LoadingBox';
import { Store } from '../../hooks/StoreContext';

const apiUrl = `${REACT_APP_API_URL}/api/product/`;

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const initialState = {
  product: [],
  loading: true,
  error: '',
};

const ProductScreen = () => {
  const params = useParams();
  const { id } = params;

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [{ loading, error, product }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const res = await fetch(`${apiUrl}${id}`);
        const data = await res.json();
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchProduct();
  }, [id]);

  const [errorMessage, setErrorMessage] = useState('');

  const { state, dispatch: contextDispatch } = useContext(Store);
  const { cart } = state;

  const addToCartHandler = async () => {
    if (!selectedSize) {
      setErrorMessage('Please select a size.');
      return;
    }

    const existItem = cart.cartItems.find(
      (item) => item._id === product._id && item.size === selectedSize
    );

    const quantity = existItem ? existItem.quantity + 1 : 1;

    const res = await fetch(`${apiUrl}${id}`);
    const data = await res.json();
    //console.log(quantity);
    if (
      quantity > data.sizes.find((size) => size.size === selectedSize).quantity
    ) {
      setErrorMessage('Out of stock for this size');
      return;
    }
    contextDispatch({
      type: 'CART_ADD_ITEM',
      payload: { ...product, size: selectedSize, quantity },
    });

    setErrorMessage('');
  };

  return loading ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className={styles.main_container}>
      <>
        <Helmet>
          <title>{product.name}</title>
        </Helmet>
        <div className={styles.product_picture_container}>
          <img src={REACT_APP_API_URL + product.image} alt={product.name} />
        </div>
        <div>
          <div className={styles.product_description_container}>
            <p className={styles.header_container}>{product.name}</p>
            <p className={styles.text_container}>SELECT SIZE (Centimeters)</p>
            <div className={styles.size_button_container_main}>
              {product.sizes.map((sizeItem) => (
                <ProductSizeButton
                  key={sizeItem.size}
                  onSelect={handleSizeSelect}
                  selected={sizeItem.size === selectedSize}
                >
                  {sizeItem.size}
                </ProductSizeButton>
              ))}
              {/* <ProductSizeButton>XS</ProductSizeButton>
              <ProductSizeButton>S</ProductSizeButton>
              <ProductSizeButton>M</ProductSizeButton>
              <ProductSizeButton>L</ProductSizeButton>
              <ProductSizeButton>XL</ProductSizeButton> */}
            </div>
            <div className={styles.text_price_container}>
              <div>
                <p className={styles.text_container}>QUANTITY</p>
                <QuantityCounter />
              </div>
              <div>
                <p className={styles.text_container}>PRICE TOTAL</p>
                <p className={styles.price_tag}>€{product.price}</p>
                <p>{product.description}</p>
              </div>
            </div>
            <div>
              <button
                className={styles.add_bag_button}
                onClick={addToCartHandler}
              >
                ADD TO BAG
              </button>
              {errorMessage && <div>{errorMessage}</div>}
            </div>
            <div className={styles.description_text_container}>
              <p>FREE SHIPPING</p>
              <p>PRODUCT CODE: {product._id}</p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default ProductScreen;
