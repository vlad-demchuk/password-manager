import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

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
    <div className="registration">
      <h1>Registration</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="login">
          Login
          <input
            type="text"
            name="login"
            value={userLogin}
            onChange={(event) => {
              setUserLogin(event.target.value);
            }}
          />
        </label>

        <label htmlFor="login">
          Password
          <input
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
        </label>

        <button type="submit">
          Submit
        </button>

      </form>
      {registered && (
        <Navigate to="/passwordManager" replace />
      )}

    </div>
  );
};
