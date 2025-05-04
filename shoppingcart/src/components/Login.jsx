import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("hello");
    e.preventDefault();
    const res = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
      body: JSON.stringify({
        email: userName,
        password: pass,
      }),
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
    navigate("/");
  };

  return (
    <div className="login-container">
      <h3>User Login</h3>
      <div className="handleForm">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            value={pass}
            placeholder="Enter Your Password"
            onChange={(e) => setPass(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
