import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Authorization } from './components/Authorization/Authorization';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation';
import { PasswordManager } from './components/PasswordManager/PasswordManager';
import { Registration } from './components/Registration/Registration';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigation />} />
        <Route path="/authorization" element={<Authorization />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/passwordManager" element={<PasswordManager />} />
        <Route path="*" element={<h2>Page not found</h2>} />
      </Routes>
    </div>
  );
};
