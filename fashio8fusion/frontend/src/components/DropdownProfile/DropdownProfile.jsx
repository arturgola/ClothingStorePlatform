import styles from "./DropdownProfile.module.css";
import { Link } from "react-router-dom";

export const DropdownProfile = () => {
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <img
          src="/assets/profile_logo.svg"
          alt="profile"
          className={styles.profile}
        />
      </button>
      <div className={styles.dropdown_wrapper}>
        <div class={styles.dropdown_content}>
          <div className={styles.inputs_container}>
            <input type="Email" placeholder="EMAIL" />
            <input type="Password" placeholder="PASSWORD" />
          </div>
          <div className={styles.buttons_container}>
            <Link className={styles.signup_btn} to="/singUp">
              SIGN UP
            </Link>
            <Link className={styles.login_btn} to="/logout">
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
