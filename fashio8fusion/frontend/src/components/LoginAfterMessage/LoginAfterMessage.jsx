import React from "react";
import styles from "./LoginAfterMessage.module.css";
import { useAuth } from "../../hooks/AuthContext";

function LoginAfterMessage({ children }) {
    const { user } = useAuth();

    return (
        <div className={styles.login_container}>
            {user ? (
                <div>
                    <h2>Welcome to AfterLogin Page! 😃</h2>
                    <p>Welcome, {user.name}! 👋</p>
                    <p>Email: {user.email} 📧</p>
                </div>
            ) : (
                children
            )}
        </div>
    );
}

export default LoginAfterMessage;
