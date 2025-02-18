import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";
import SignIn from "./components/SignIn";

const Main = () => {
  const [users, setUsers] = useState([]);
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = (user) => {
    setUsers([...users, { username: user.username, password: user.password }]);
    setIsSignIn(false); 
  };

  return (
    <div className="container mt-5">
      
      <div className="d-flex justify-content-center mb-3">
        <button
          className={`btn ${!isSignIn ? "btn-primary" : "btn-secondary"} mx-2`}
          onClick={() => setIsSignIn(false)}
        >
          Login
        </button>
        <button
          className={`btn ${isSignIn ? "btn-primary" : "btn-secondary"} mx-2`}
          onClick={() => setIsSignIn(true)}
        >
          Sign In
        </button>
      </div>

      <div className="card p-4">{isSignIn ? <SignIn onSignIn={handleSignIn} /> : <Login users={users} />}</div>
    </div>
  );
};

export default Main;
