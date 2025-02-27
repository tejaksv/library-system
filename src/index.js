import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';
import TableRender from './TableRender';
import Main from './CSS/Main.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='mainHeader'>
      <h1>Company Details</h1>
    </header>
    <TableRender />
    <footer id='mainFooter' class="bg-dark text-white text-center py-3 fixed-bottom">
      React JS practice
    </footer>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
