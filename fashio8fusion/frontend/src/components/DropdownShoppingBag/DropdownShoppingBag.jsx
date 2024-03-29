import styles from './DropdownShoppingBag.module.css';
import { Link } from 'react-router-dom';

export const DropdownShoppingBag = () => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <img
          src="/assets/cart_logo.svg"
          alt="cart"
          className={styles.cart_logo}
        />
      </button>
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_content}>
          <p>SHOPPING BAG</p>
          <div className={styles.dropdown_parent_pic_text}>
            <div className={styles.dropdown_item_picture}>
              <img src="/assets/dropdown_picture.png" alt="arrow" />
            </div>
            <div className={styles.dropdown_item_text}>
              <p>QUANTITY: </p>
              <p>SIZE: </p>
              <p>TOTAL: </p>
            </div>
          </div>
          <div className={styles.bottom_item_container}>
            <p>SUB-TOTAL:</p>
            <button className={styles.view_shopping_btn}>
              VIEW SHOPPING BAG
            </button>
            <Link to="/shoppingbag" className={styles.checkout_btn}>CHECKOUT</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
