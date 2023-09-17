import { useEffect, useState } from 'react';
import { REACT_APP_API_URL } from '../../utils/apiConfig';

const apiUrl = `${REACT_APP_API_URL}/api/women`;

const Women = () => {
  const [products, setProducts] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
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

    fetchProduct();
  }, []);

  return (
    <div className="women">
      {error && <div>{error}</div>}
      {isPending && <div>Loading resources...</div>}
      {products &&
        products.map((product) => (
          <img src={REACT_APP_API_URL + product.image} alt={product.name} />
        ))}
    </div>
  );
};

export default Women;
