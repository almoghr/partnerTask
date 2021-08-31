import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "./styles.module.scss";

const AuthForm = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const auth = useSelector((state) => state.auth.user);

  const handleLogin = () => {
    if (username === auth.username && password === auth.password) {
      const timeStored = Date.now();
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      localStorage.setItem("timeStored", timeStored);
      setIsLoggedIn(true);
    } else {
      setError("credentials are not valid");
    }
  };

  useEffect(() => {
    setError("");
  }, [username, password]);

  return (
    <div className={styles.authContainer}>
      <div className={styles.inputAndLabelBox}>
        <label>username</label>
        <input
          type="text"
          placeholder="enter your username here"
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className={styles.inputAndLabelBox}>
        <label>password</label>
        <input
          type="password"
          placeholder="enter your password here"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleLogin}>
        LOGIN
      </button>
     <p>{error}</p>
    </div>
  );
};

export default AuthForm;
