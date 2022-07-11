import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authorization.scss';

export const Authorization: React.FC = () => {
  const navigate = useNavigate();

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

  return (
    <div className="auth">
      <h2 className="auth__title">Authorization</h2>

      <form className="form auth__form" onSubmit={handleSubmit}>
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
            id="password"
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

      {wrongData && 'Something was wrong'}

      {validAuth && (
        navigate('/passwordManager', { replace: true, state: { nameFromLocation: userLogin } })
      )}
    </div>
  );
};
