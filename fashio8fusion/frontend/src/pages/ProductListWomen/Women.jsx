import { useEffect, useState } from 'react';
import { ProductListWomen } from './ProductListWomen';
import LoadingBox from '../../components/LoadingBox/LoadingBox';

import { REACT_APP_API_URL } from '../../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/women`;

const Women = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(apiUrl);

        if (!res.ok) {
          throw Error('Could not fetch data for that resource');
        }

        const data = await res.json();

        setIsPending(false);
        setProducts(data);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  return isPending ? (
    <LoadingBox />
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="women">
      {products && <ProductListWomen products={products} />}
    </div>
  );
};

export default Women;
