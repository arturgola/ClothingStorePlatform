import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { login } from "../../services/authService";
import LoginAfterMessage from "../../components/LoginAfterMessage/LoginAfterMessage";
import { useAuth } from "../../hooks/AuthContext";

function Login() {
  const { setUser } = useAuth();
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
      setUser(res.user);
    } else {
      setErrors(newErrors);
    }
  };



  return (
    <LoginAfterMessage>
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
    </LoginAfterMessage>
  );
}

export default Login;
