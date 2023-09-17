import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';

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
        <SearchBar />
      </div>
      <div className={styles.menu} id="user-panel">
        <Link to="#" className={styles.link}>
          <img
            src="/assets/question_logo.svg"
            alt="question"
            className={styles.question}
          />
        </Link>
        <Link to="#" className={styles.link}>
          <img
            src="/assets/liked_logo.svg"
            alt="liked"
            className={styles.liked}
          />
        </Link>
        <Link to="#" className={styles.link}>
          <img
            src="/assets/profile_logo.svg"
            alt="profile"
            className={styles.profile}
          />
        </Link>
        <Link to="#" className={styles.link}>
          <img src="/assets/cart_logo.svg" alt="cart" className={styles.cart} />
        </Link>
      </div>
    </div>
  );
};
