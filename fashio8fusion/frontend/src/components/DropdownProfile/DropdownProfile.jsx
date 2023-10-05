import { useState } from "react";
import styles from "./DropdownProfile.module.css";
import { Link } from "react-router-dom";

export const DropdownProfile = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    const newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (Object.keys(newErrors).length === 0) {
      const res = await login(formData.email, formData.password);
      console.log("Form data submitted:", res);
    } else {

      setErrors(newErrors);
    }
  };
  return (
    <div className={styles.dropdown}>
      <button className={styles.dropbtn}>
        <img
          src="/assets/profile_logo.svg"
          alt="profile"
          className={styles.profile_logo}
        />
      </button>
      <div className={styles.dropdown_wrapper}>
        <div className={styles.dropdown_content}>
          <div className={styles.inputs_container}>
            <input
              type="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="EMAIL"
            />
            <input
              type="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="PASSWORD"
            />
          </div>
          <div className={styles.buttons_container}>
            <Link className={styles.signup_btn} to="/signup">
              SIGN UP
            </Link>
            <button type="button" onClick={handleSubmit}>
              <Link to="/login">Login</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
