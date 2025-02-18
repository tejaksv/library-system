import React, { useState } from "react";

const SignIn = ({ onSignIn }) => {
  const [signInData, setSignInData] = useState({
    username: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleSignIn = () => {
    if (
      signInData.username &&
      signInData.email &&
      signInData.password === signInData.rePassword
    ) {
      onSignIn(signInData);
      alert("Sign In Successful! You can now log in.");
      setSignInData({ username: "", email: "", password: "", rePassword: "" });
    } else {
      alert("Please check your details and try again!");
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <input
        type="text"
        className="form-control my-2"
        placeholder="Username"
        value={signInData.username}
        onChange={(e) => setSignInData({ ...signInData, username: e.target.value })}
      />
      <input
        type="email"
        className="form-control my-2"
        placeholder="Email ID"
        value={signInData.email}
        onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Password"
        value={signInData.password}
        onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
      />
      <input
        type="password"
        className="form-control my-2"
        placeholder="Re-enter Password"
        value={signInData.rePassword}
        onChange={(e) => setSignInData({ ...signInData, rePassword: e.target.value })}
      />
      <button className="btn btn-primary" onClick={handleSignIn}>
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
