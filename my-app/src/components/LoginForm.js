// LoginForm.js
import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import "../App.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const history = useHistory();
  const { login } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform authentication logic here
    // For demonstration purposes, just set the username as user data
    login({ username });
    history.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="login-form-container">
      <h2>Login</h2>
      <input
        className="login-form-input"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button type="submit" className="login-form-button">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
