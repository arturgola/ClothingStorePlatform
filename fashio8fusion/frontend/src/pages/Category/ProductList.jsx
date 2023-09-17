import { Link } from 'react-router-dom';
import styles from './ProductList.module.css';

import { REACT_APP_API_URL } from '../../utils/apiConfig';

const ProductList = ({ products }) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <div className={styles.product} key={product._id}>
          <Link to={`/product/${product._id}`} className={styles.link}>
            <img src={REACT_APP_API_URL + product.image} alt={product.name} />
          </Link>
          <div className={styles['product-info']}>
            <Link to={`/product/${product._id}`} className={styles.link}>
              <p>{product.name}</p>
            </Link>
            <p>
              <strong>€{product.price}</strong>
            </p>
            <button>Add to cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
