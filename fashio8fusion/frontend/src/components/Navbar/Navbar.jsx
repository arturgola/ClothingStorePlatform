import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.base}>
        <ul className={styles.menu}>
            <img src="/assets/logo.svg" alt="logo" className={styles.logo}/>
            <li>Women</li>
            <li>Men</li>
            <li>Sale</li>
            <li>Search</li>
        </ul>
        <ul className={styles.menu}>
            <li>Question</li>
            <li>Profile</li>
            <li>Liked</li>
            <img src="/assets/cart_logo.svg" alt="cart" className={styles.cart}/>
        </ul>
    </div>
  )

}
