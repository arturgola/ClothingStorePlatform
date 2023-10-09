import { useParams } from 'react-router-dom';
import { useEffect, useReducer } from 'react';

import { REACT_APP_API_URL } from '../../utils/apiConfig';

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

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading product information...</div>}
      {product && (
        <div>
          <h2>{product.name}</h2>
          <img src={REACT_APP_API_URL + product.image} alt={product.name} />
          <p>€{product.price}</p>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
