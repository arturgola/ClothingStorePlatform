import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.base}>
      <div className={styles.menu} id="category">
        <Link to="/">
          <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        </Link>
        <Link to="/women" className={styles.link}>
          Women
        </Link>
        <Link to="#" className={styles.link}>
          Men
        </Link>
        <Link to="#" className={styles.link}>
          Sale
        </Link>
        <Link to="#" className={styles.link}>
          Search
        </Link>
      </div>
      <div className={styles.menu} id="user-panel">
        <Link to="#" className={styles.link}>
          Question
        </Link>
        <Link to="#" className={styles.link}>
          Profile
        </Link>
        <Link to="#" className={styles.link}>
          Liked
        </Link>
        <Link to="#" className={styles.link}>
          <img src="/assets/cart_logo.svg" alt="cart" className={styles.cart} />
        </Link>
      </div>
    </div>
  );
};
