import React, { useState } from 'react';
import './NewPassword.scss';

type Props = {
  addNewPassword: (data: Password) => void,
};

export const NewPassword: React.FC<Props> = ({ addNewPassword }) => {
  const [nameOfApp, setNameOfApp] = useState('');
  const [userLogin, setUserLogin] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const [added, setAdded] = useState(false);

  return (
    <div className="newPassword">
      <form
        className="form newPassword__form"
        onSubmit={(event) => {
          event.preventDefault();

          const data = {
            id: Date.now(),
            nameOfApp,
            userLogin,
            userPassword,
          };

          addNewPassword(data);

          setAdded(true);
          setNameOfApp('');
          setUserLogin('');
          setUserPassword('');
        }}
      >
        <label className="form__label" htmlFor="nameOfApp">
          Website
          <input
            className="form__input"
            id="nameOfApp"
            type="text"
            name="nameOfApp"
            value={nameOfApp}
            onChange={(event) => {
              setNameOfApp(event.target.value);
              setAdded(false);
            }}
          />
        </label>

        <label className="form__label" htmlFor="login">
          Login
          <input
            className="form__input"
            type="text"
            id="login"
            name="login"
            value={userLogin}
            onChange={(event) => {
              setUserLogin(event.target.value);
              setAdded(false);
            }}
          />
        </label>

        <label className="form__label" htmlFor="password">
          Password
          <input
            className="form__input"
            id="password"
            type="password"
            name="password"
            value={userPassword}
            onChange={(event) => {
              setUserPassword(event.target.value);
              setAdded(false);
            }}
          />
        </label>

        {added && (
          <p className="form__message--success">Password has been added!</p>
        )}

        <button className="button newPassword__button" type="submit">
          Add new password
        </button>
      </form>
    </div>
  );
};
