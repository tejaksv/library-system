import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
 import Authform from './components/Authform';
import reportWebVitals from './reportWebVitals';
import TableRender from './TableRender';
import MainCss from './css/main.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {<TableRender /> }
    {<Authform />
  }
=======
    <header className='mainHeader'>
      <h1>Company Details</h1>
    </header>
      <TableRender />
    <footer id='mainFooter'>
      React JS practice
    </footer>
>>>>>>> fa4b5cd7e61153fa034b4f76eda2f24eeeb9ccd5
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
