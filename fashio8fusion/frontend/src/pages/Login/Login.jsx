import axios from "axios";
import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
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
      axios.post("login", formData);
      // Form is valid; you can submit it or perform other actions here
      // For demonstration purposes, let's log the form data to the console
      console.log("Form data submitted:", formData);
    } else {
      // Update the state with validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles["login-page"]}>
      <h2>Login</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <button type="submit">Login</button>
        <p class="message">
          Not registered?{" "}
          <Link className={styles.signup_btn} to="/signup">
            SIGN UP
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
