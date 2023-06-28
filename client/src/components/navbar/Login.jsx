import React from 'react'

//styles
import styles from "./navbar.module.css";

function Login({handleLogin, setShowLogin}) {
  return (
    <div className={styles.loginFormContainer}>
        <form id="loginForm" className={styles.loginForm}>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.emailInput}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.passwordInput}
                />
            </div>
            <button
                type="submit"
                className={styles.loginButton}
                onClick={(e) => {
                    e.preventDefault();
                    setShowLogin(false);
                    handleLogin();
                }}
            >
                Login
            </button>
        </form>
    </div>
  )
}

export default Login