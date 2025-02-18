
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
    const [data, setData] = useState({ username: "", email: "", password: "", confirmpassword: "" });
    const { username, email, password, confirmpassword } = data;
    const navigate = useNavigate();
  
    const changeHandler = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
    };
  
    const submitHandler = (e) => {
      e.preventDefault();
      if (!username || !email || !password || !confirmpassword) {
        alert("All fields are required");
        return;
      }
      if (password !== confirmpassword) {
        alert("Passwords do not match!");
        return;
      }
      localStorage.setItem("user", JSON.stringify({ username, email, password }));
      alert("Signup successful! Redirecting to login.");
      navigate("/login");
    };
  
    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4 shadow-lg">
              <h2 className="text-center mb-4">Signup</h2>
              <form onSubmit={submitHandler}>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input type="text" name="username" className="form-control" value={username} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input type="email" name="email" className="form-control" value={email} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input type="password" name="password" className="form-control" value={password} onChange={changeHandler} />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm Password:</label>
                  <input type="password" name="confirmpassword" className="form-control" value={confirmpassword} onChange={changeHandler} />
                </div>
                <button type="submit" className="btn btn-primary w-100">Signup</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;