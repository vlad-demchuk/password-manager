import classNames from 'classnames';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.scss';

export const Registration: React.FC = () => {
  const navigate = useNavigate();

  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [wrongData, setWrongData] = useState(false);
  const [registered, setRegistered] = useState(false);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();

    if (userLogin.length < 6
      || userPassword.length < 6) {
      setWrongData(true);

      return;
    }

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
      <h2 className="reg__title">Sign Up</h2>

      <form className="form reg__form" onSubmit={handleSubmit}>
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
            }}
          />
        </label>

        <label className="form__label" htmlFor="login">
          Password
          <input
            className={classNames('form__input', { 'form__input--error': wrongData })}
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
            }}
          />
        </label>

        {wrongData && (
          <p className="form__message-error">Login and password lenght must be more than 6!</p>
        )}

        <button className="button reg__button" type="submit">
          Submit
        </button>

      </form>

      {registered && (
        navigate('/passwordManager', { replace: true, state: { nameFromLocation: userLogin } })
      )}
    </div>
  );
};
