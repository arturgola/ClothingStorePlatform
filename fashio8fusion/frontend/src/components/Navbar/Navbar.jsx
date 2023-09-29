import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { DropdownProfile } from '../DropdownProfile/DropdownProfile';
import { DropdownShoppingBag } from '../DropdownShoppingBag/DropdownShoppingBag';


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
        <Link to="/men" className={styles.link}>
          Men
        </Link>
        <Link to="/sale" className={styles.link}>
          Sale
        </Link>
        <SearchBar />
      </div>
      <div className={styles.menu} id={styles['user-panel']}>
        <Link to="/support" className={styles.link}>
          <img
            src="/assets/question_logo.svg"
            alt="question"
            className={styles.question_logo}
          />
        </Link>
        <Link to="favorites" className={styles.link}>
          <img
            src="/assets/liked_logo.svg"
            alt="liked"
            className={styles.liked_logo}
          />
        </Link>
        {/* <Link to="#" className={styles.link}>
          <img
            src="/assets/profile_logo.svg"
            alt="profile"
            className={styles.profile}
          />
        </Link> */}
        <DropdownProfile />
        
        {/* <Link to="#" className={styles.link}>
          <img src="/assets/cart_logo.svg" alt="cart" className={styles.cart} />
        </Link> */}
        <DropdownShoppingBag />
      </div>
    </div>
  );
};
