import React, { useState } from "react";
import "./SignupScreen.css";

const SignupScreen = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    console.log("Signing up with:", email, username, password);
    // you can replace with actual API call
  };

  return (
    <div className="signup-container">
      <h1 className="signup-logo">
        <span className="logo-circle">UD</span>
        <span className="logo-text">
          <span className="logo-black">ULao</span>
          <span className="logo-green">Dev</span>
        </span>
      </h1>

      <div className="signup-form">
        <div className="signup-header">
          <h2 className="signup-header-text">Create Your Account</h2>
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Choose a username"
          />
        </div>

        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignupScreen;
