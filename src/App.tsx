import React from 'react';
import { Link } from 'react-router-dom';
import './App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      <div className="App__buttons">
        <Link to="/authorization">
          <button className="button" type="button">Log in</button>
        </Link>
        <Link to="/registration">
          <button className="button" type="button">Create new account</button>
        </Link>
      </div>
    </div>
  );
};
