import styles from "./Navbar.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { DropdownProfile } from "../DropdownProfile/DropdownProfile";
import { DropdownShoppingBag } from "../DropdownShoppingBag/DropdownShoppingBag";

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
        <DropdownProfile />
        <img
          src="/assets/liked_logo.svg"
          alt="liked"
          className={styles.liked}
        />
        <DropdownShoppingBag />
      </ul>
    </div>
  );
};
