import styles from "./DropdownShoppingBag.module.css";
import { Link } from "react-router-dom";

export const DropdownShoppingBag = () => {
    return (
        <div className={styles.dropdown}>
            <button className={styles.dropbtn}>
                <img
                    img src="/assets/cart_logo.svg"
                    alt="profile"
                    className={styles.profile}
                />
            </button>
            <div className={styles.dropdown_wrapper}>
                <div class={styles.dropdown_content}>
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
                        <button className={styles.view_shopping_btn}>VIEW SHOPPING BAG</button>
                        <button className={styles.checkout_btn}>CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
