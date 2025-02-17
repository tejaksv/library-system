import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./components/SignIn";
import Login from "./components/Login";   


const Main = () => {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const handleSignIn = (user) => {
    setUsers([...users, user]);
    setIsLogin(true);
  };

  return (
    <div className="container mt-5">
      {!isLogin ? <SignIn onSignIn={handleSignIn} /> : <Login users={users} />}
    </div>
  );
};

export default Main;
