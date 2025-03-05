import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const { username, password } = data;
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    
    }
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("User not found! Please sign up.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">Login To React course</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input type="text" name="username" className="form-control" value={username} onChange={changeHandler} />
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" name="password" className="form-control" value={password} onChange={changeHandler} />
              </div>
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
            <div className="text-center mt-3">
              <button className="btn btn-link" onClick={() => navigate("/signup")}>
                Forgot Password?
              </button>
            </div>
            <div className="text-center mt-3">
              <p>Don't have an account? 
                <button className="btn btn-link p-0" onClick={() => navigate("/signup")}>
                  Signup
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
