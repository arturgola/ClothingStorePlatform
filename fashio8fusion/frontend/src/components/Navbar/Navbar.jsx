import styles from "./Navbar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { DropdownProfile } from "../DropdownProfile/DropdownProfile";

export const Navbar = () => {
  return (
    <div className={styles.base}>
      <ul className={styles.menu}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <li>Women</li>
        <li>Men</li>
        <li>Sale</li>
        <SearchBar />
      </ul>
      <ul className={styles.menu}>
        <img
          src="/assets/question_logo.svg"
          alt="question"
          className={styles.question}
        />
        {/* <img
          src="/assets/profile_logo.svg"
          alt="profile"
          className={styles.profile}
        /> */}
        <DropdownProfile />
        <img
          src="/assets/liked_logo.svg"
          alt="liked"
          className={styles.liked}
        />
        <img src="/assets/cart_logo.svg" alt="cart" className={styles.cart} />
      </ul>
    </div>
  );
};
