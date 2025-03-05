import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function Main() {
  const [page, setPage] = useState('Signup'); 

  return (
      <div className="container text-center mt-4">
          
          <div className="mt-3">
              <button 
                  className={`btn ${page === 'Login' ? 'btn-primary' : 'btn-outline-primary'} m-2`} 
                  onClick={() => setPage('Login')}
              >
                  Login
              </button>
              <button 
                  className={`btn ${page === 'Signup' ? 'btn-primary' : 'btn-outline-secondary'} m-2`} 
                  onClick={() => setPage('Signup')}
              >
                  Signup
              </button>
          </div>

          
          <div className="mt-4">
              {page === 'Login' ? <Login /> : <Signup />}
          </div>
      </div>
  );
}

export default Main;
