import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <div className="navigate">
      <div className="navigate__buttons">
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
