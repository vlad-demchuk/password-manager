import React, { useState } from 'react';
import './NewPassword.scss';

type Props = {
  addNewPassword: (data: Password) => void,
};

export const NewPassword: React.FC<Props> = ({ addNewPassword }) => {
  const [nameOfApp, setNameOfApp] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  return (
    <form
      className="add-form"
      onSubmit={(event) => {
        event.preventDefault();

        const data = {
          id: Date.now(),
          nameOfApp,
          userLogin,
          userPassword,
        };

        addNewPassword(data);
      }}
    >
      <label className="add-form__label" htmlFor="nameOfApp">
        App name
        <input
          type="text"
          name="nameOfApp"
          value={nameOfApp}
          onChange={(event) => {
            setNameOfApp(event.target.value);
          }}
        />
      </label>

      <label className="add-form__label" htmlFor="login">
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

      <label className="add-form__label" htmlFor="login">
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
        Add
      </button>
    </form>
  );
};
