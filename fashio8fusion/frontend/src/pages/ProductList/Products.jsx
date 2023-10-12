import { useEffect, useState } from 'react';
import { ProductList } from './ProductList';
import LoadingBox from '../../components/LoadingBox/LoadingBox';

import { REACT_APP_API_URL } from '../../utils/apiConfig';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const pathName = location.pathname;

  const apiUrl = `${REACT_APP_API_URL}/api${pathName}`;

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
  }, [pathName]);

  return (
    <>
      <Helmet>
        <title>Shop {pathName.split('/')[1]}swear</title>
      </Helmet>
      <h2 style={{ padding: 20, paddingBottom: 0, margin: 0 }}>
        Shop {pathName.split('/')[1]}swear
      </h2>
      <div>
        {isPending ? (
          <LoadingBox />
        ) : error ? (
          <div>{error}</div>
        ) : products.length === 0 ? (
          <div style={{ padding: 20 }}>No product at the moment</div>
        ) : (
          <ProductList products={products} />
        )}
      </div>
    </>
  );
};

export default Products;
