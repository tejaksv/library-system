import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';

import Signup from './WebPage-Project/signup';
import SignIn from './WebPage-Project/signIn';
import TableRender from './TableRender';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import TableForm from './TableForm';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TableRender />
    
  </React.StrictMode>
//   <Router>
//   <Routes>
//     <Route path="/" element={<Navigate to="/WebPage-Project/signup" />} />
//     <Route path="/WebPage-Project/signup" element={<Signup />} />
//     <Route path="/WebPage-Project/signIn" element={<SignIn />} />
   
//   </Routes>
// </Router>

);
reportWebVitals();
