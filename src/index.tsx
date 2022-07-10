import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Authorization } from './components/Authorization/Authorization';
import { Header } from './components/Header/Header';
import { PasswordManager } from './components/PasswordManager/PasswordManager';
import { Registration } from './components/Registration/Registration';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/passwordManager" element={<PasswordManager userLogin="" />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
