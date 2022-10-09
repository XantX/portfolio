import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './shared/font-firacode.css'
import App from './App';
import { HashRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='*' element={<App />} />
    </Routes>
  </HashRouter>
);
