import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">

      <Link to="/authorization">
        <button type="button">Log in</button>
      </Link>
      <Link to="/registration">
        <button type="button">Create new account</button>
      </Link>

    </div>
  );
};
