import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './Registration.scss';

export const Registration: React.FC = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const userData = {
      userLogin,
      userPassword,
      savedPasswords: [],
    };

    localStorage.setItem(userData.userLogin, JSON.stringify(userData));
    setRegistered(true);
  };

  return (
    <div className="reg">
      <h2 className="reg__title">Registration</h2>

      <form className="form reg__form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="login">
          Login
          <input
            className="form__input"
            id="login"
            type="text"
            name="login"
            value={userLogin}
            onChange={(event) => {
              setUserLogin(event.target.value);
            }}
          />
        </label>

        <label className="form__label" htmlFor="login">
          Password
          <input
            className="form__input"
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
        </label>

        <button className="button" type="submit">
          Submit
        </button>

      </form>
      {registered && (
        <Navigate to="/passwordManager" replace />
      )}

    </div>
  );
};
