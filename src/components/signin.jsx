import React, { useState } from "react";

const SignIn = ({ onSignIn }) => {
  // Correct useState usage and variable naming
  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSignInData = (e) => {
    e.preventDefault(); // prevent form submission from refreshing the page

    // Check if passwords match
    if (
      signInData.username &&
      signInData.email &&
      signInData.password === signInData.rePassword
    ) {
      onSignIn(signInData);
      alert("Sign In Successful! You can now log in.");
      setSignInData({
        username: "",
        email: "",
        password: "",
        rePassword: "",
      });
    } else {
      alert("Please check your details and try again!");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 mt-5">
            <h2 className="text-center mb-4">Sign In</h2>
            <form onSubmit={handleSignInData}>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  UserName
                </label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={signInData.username}
                  onChange={(e) =>
                    setSignInData({ ...signInData, username: e.target.value })
                  }
                  placeholder="Enter your username"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={signInData.email}
                  onChange={(e) =>
                    setSignInData({ ...signInData, email: e.target.value })
                  }                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={signInData.password}
                  onChange={(e) =>
                    setSignInData({ ...signInData, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="rePassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="rePassword"
                  className="form-control"
                  value={signInData.rePassword}
                  onChange={(e) =>
                    setSignInData({ ...signInData, rePassword: e.target.value })
                  }
                  placeholder="Confirm your password"
                  required  
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn; 
