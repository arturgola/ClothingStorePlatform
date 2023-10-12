import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import { SearchBar } from '../SearchBar/SearchBar';
import { DropdownProfile } from '../DropdownProfile/DropdownProfile';
import { DropdownShoppingBag } from '../DropdownShoppingBag/DropdownShoppingBag';
import { useContext } from 'react';
import { Store } from '../../hooks/StoreContext';

export const Navbar = () => {
  const { state } = useContext(Store);
  const { cart } = state;
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
        <SearchBar />
      </div>
      <div className={styles.menu} id={styles['user-panel']}>
        <Link to="/ContactUs" className={styles.link}>
          <img
            src="/assets/question_logo.svg"
            alt="question"
            className={styles.question_logo}
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

        <Link to="/cart" className={styles.link}>
          <img
            src="/assets/cart_logo.svg"
            alt="cart"
            className={styles.cart_logo}
          />
          {cart.cartItems.length > 0 && (
            <div className={styles.cart_quantity}>
              {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
            </div>
          )}
        </Link>
        {/* <DropdownShoppingBag /> */}
      </div>
    </div>
  );
};
