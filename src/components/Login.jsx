import React, { useState } from "react";

const Login = ({ users }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const userExists = users.find(
      (user) => user.username === loginData.username && user.password === loginData.password
    );

    if (userExists) {
      alert("Login Successful!");
    } else {
      alert("Login Failed! Check your credentials.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Username"
        value={loginData.username}
        onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        value={loginData.password}
        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button className="btn btn-success" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
