import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Authorization: React.FC = () => {
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const [validAuth, setValidAuth] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const userData = localStorage.getItem(userLogin);

    if (userData === null) {
      setWrongData(true);

      return;
    }

    const objectData = JSON.parse(userData);

    if (objectData.userPassword !== userPassword) {
      setWrongData(true);

      return;
    }

    setValidAuth(true);
    setWrongData(false);
  };

  // eslint-disable-next-line no-console
  console.log(validAuth);

  return (
    <div className="registration">
      <h1>Authorization</h1>

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
      {wrongData && 'Something was wrong'}
      {validAuth && (
        <Navigate to="/passwordManager" replace />
      )}
    </div>
  );
};
