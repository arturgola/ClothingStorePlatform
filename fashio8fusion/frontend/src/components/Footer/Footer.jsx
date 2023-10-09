import styles from "./Footer.module.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className={styles.base}>
      <ul className={styles.menu}>
        <img src="/assets/logo.svg" alt="logo" className={styles.logo} />
        <li>
          <Link to="/Aboutus">ABOUT US</Link>
        </li>
        <li>TERMS & CONDITIONS</li>
        <li>FOLLOW US</li>
      </ul>
      <p style={{ fontSize: "10px" }}>© GROUP8, 2023.</p>
    </div>
  );
};
