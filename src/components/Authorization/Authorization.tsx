import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Authorization.scss';
import classNames from 'classnames';

export const Authorization: React.FC = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const [validAuth, setValidAuth] = useState(false);

  const handleSubmit = (event: React.FormEvent): void => {
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
  };

  return (
    <div className="auth">
      <h2 className="auth__title">Log In</h2>

      <form className="form auth__form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="login">
          Login
          <input
            className={classNames('form__input', { 'form__input--error': wrongData })}
            id="login"
            type="text"
            name="login"
            value={userLogin}
            onChange={(event) => {
              setUserLogin(event.target.value);
              setWrongData(false);
            }}
          />
        </label>

        <label className="form__label" htmlFor="login">
          Password
          <input
            className={classNames('form__input', { 'form__input--error': wrongData })}
            id="password"
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
              setWrongData(false);
            }}
          />
        </label>

        {wrongData && (
          <p className="form__message-error">Invalid username or password!</p>
        )}

        <button className="button auth__button" type="submit">
          Submit
        </button>
      </form>

      {validAuth && (
        navigate('/passwordManager', { replace: true, state: { nameFromLocation: userLogin } })
      )}
    </div>
  );
};
