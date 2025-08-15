import React, { useState } from "react";
import "./LoginScreen.css";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Logging in with", username, password);
  };

  return (
    <div className="container">
      <h1 className="logo"> UlaoDev</h1>
      <div className="formContainer">
        <div className="header">
          <h2 className="headerText">Mini Virtual Warehouse System</h2>
        </div>

        <div className="inputGroup">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="inputGroup">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
