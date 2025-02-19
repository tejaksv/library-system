import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/signin";
import Login from "./components/login";

const Main = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate(); 

  const handleSignIn = (user) => {
    setUsers([...users, user]);
    alert("Sign-up successful");
    navigate("/Login");
  };

  const handleLogin = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (user) {
      alert("Login successful!");
      navigate("/dashboard"); // Redirect to a dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="container mt-5">
      <SignIn onSignIn={handleSignIn} />
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default Main;
