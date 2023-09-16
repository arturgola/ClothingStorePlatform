import React from "react";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  return (
    <div className={styles.search_bar}>
      <img
        src="/assets/search_logo.svg"
        alt="SearchBar"
        className={styles.search_logo}
      />
    </div>
  );
};
