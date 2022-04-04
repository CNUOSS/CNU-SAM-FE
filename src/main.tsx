import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Helmet from './libs/Helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
