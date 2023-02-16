import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './shared/font-firacode.css'
import App from './App';
// eslint-disable-next-line no-unused-vars
import i18n from './traslations/traslate-config';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
