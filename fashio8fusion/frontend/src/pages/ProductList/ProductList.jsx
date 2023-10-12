import styles from './ProductList.module.css';
import { REACT_APP_API_URL } from '../../utils/apiConfig';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useState } from 'react';

export const ProductList = ({ products }) => {
  const [sortOrder, setSortOrder] = useState('newest');
  const [sortedProducts, setSortedProducts] = useState(products);

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOrder(selectedOption);

    if (selectedOption === 'newest') {
      // Sort by date added key (assuming products have a 'dateAdded' property)
      const sorted = products
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setSortedProducts(sorted);
    } else {
      // Sort by price (ascending or descending)
      const isAscending = selectedOption === 'priceAsc';
      const sorted = products
        .slice()
        .sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
      setSortedProducts(sorted);
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.filter_container}>
        {/* <button className={styles.unstyle_button}>FILTERS</button>
        <button className={styles.unstyle_button}>SORT</button> */}
        <select
          value={sortOrder}
          onChange={handleSortChange}
          className={styles.sort_selector}
        >
          <option value="newest">Newest</option>
          <option value="priceAsc">Price (Low to High)</option>
          <option value="priceDesc">Price (High to Low)</option>
        </select>
      </div>
      <div className={styles.product_container}>
        {sortedProducts.map((product) => (
          <div className={styles.product} key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img
                src={REACT_APP_API_URL + product.image}
                alt={product.name}
                className={styles.product_picture}
              />
            </Link>
            <Link
              to={`/product/${product._id}`}
              className={styles.product_header}
            >
              <p>{product.name}</p>
            </Link>
            <p className={styles.product_price}>€{product.price}</p>
            {/* <button className={styles.product_button}>Add to cart</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};
