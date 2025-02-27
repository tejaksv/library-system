import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HelloWorld from './HelloWorld';
import reportWebVitals from './reportWebVitals';
import TableRender from './TableRender';
import Main from './Main/main.css';
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header className='mainHeader'>
      <h1>Company Details</h1>
    </header>
    <TableRender />
    <footer id='mainFooter'>
      React JS practice
    </footer>
    
  </React.StrictMode>
);


reportWebVitals();