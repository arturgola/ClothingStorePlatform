import styles from './ProductListWomen.module.css'
import { REACT_APP_API_URL } from '../../utils/apiConfig';
import { Link } from 'react-router-dom';

export const ProductListWomen = ({ products }) => {
    return (
        <div className={styles.main_container}>
            <div className={styles.filter_container}>
                <button className={styles.unstyle_button}>FILTERS</button>
                <button className={styles.unstyle_button}>SORT</button>
            </div>
            <div className={styles.product_container}>
                {products.map((product) => (
                    <div className={styles.product}>
                        <Link to={`/product/${product._id}`}>
                            <img src={REACT_APP_API_URL + product.image} alt={product.name} className={styles.product_picture} />
                        </Link>
                        <p className={styles.product_header_category}>TOP WOMAN</p>
                        <Link to={`/product/${product._id}`} className={styles.product_header}>
                            <p>{product.name}</p>
                        </Link>
                        <p className={styles.product_price}>€{product.price}</p>
                        <button className={styles.product_button}>Add to cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
