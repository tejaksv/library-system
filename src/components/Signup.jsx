import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Signup = () => {
  const [data, setData] = useState({ username: "", email: "", password: "", confirmpassword: "" });
  const { username, email, password, confirmpassword } = data;
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    
    if (!username) {
      formErrors.username = "Username is required.";
      isValid = false;
    } else if (username.length < 3) {
      formErrors.username = "Username must be at least 3 characters.";
      isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email) {
      formErrors.email = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      formErrors.email = "Enter a valid email address.";
      isValid = false;
    }

    // Password validation
    if (!password) {
      formErrors.password = "Password is required.";
      isValid = false;
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    // Confirm Password validation
    if (password !== confirmpassword) {
      formErrors.confirmpassword = "Passwords do not match.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      localStorage.setItem("user", JSON.stringify({ username, email, password }));
      alert("Signup successful! Redirecting to login.");
      navigate("/login");
    }
  };

  const navigateToLogin = () => {
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-lg">
            <h2 className="text-center mb-4">React course</h2>
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Username:</label>
                <input type="text" name="username" className="form-control" value={username} onChange={changeHandler} />
                {errors.username && <div className="text-danger">{errors.username}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Email:</label>
                <input type="email" name="email" className="form-control" value={email} onChange={changeHandler} />
                {errors.email && <div className="text-danger">{errors.email}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Password:</label>
                <input type="password" name="password" className="form-control" value={password} onChange={changeHandler} />
                {errors.password && <div className="text-danger">{errors.password}</div>}
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password:</label>
                <input type="password" name="confirmpassword" className="form-control" value={confirmpassword} onChange={changeHandler} />
                {errors.confirmpassword && <div className="text-danger">{errors.confirmpassword}</div>}
              </div>
              <button type="submit" className="btn btn-primary w-100">Signup</button>
            </form>
            <div className="mt-3 text-center">
              <p>Already have an account? 
                <button onClick={navigateToLogin} className="btn btn-link p-0">Log In</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
