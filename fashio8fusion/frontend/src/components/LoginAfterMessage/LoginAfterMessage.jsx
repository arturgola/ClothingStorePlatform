import React from "react";
import styles from "./LoginAfterMessage.module.css";
import { useAuth } from "../../hooks/AuthContext";

function LoginAfterMessage({ children }) {
  const { user } = useAuth();

  return (
    <div className={styles.login_container}>
      {user ? (
        <div>
          <p>Welcome, {user.name}! 👋</p>
          <p>Email: {user.email} 📧</p>
          <h2>You have now logged in ! 😃</h2>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default LoginAfterMessage;
