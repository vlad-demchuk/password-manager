import React, { useState } from 'react';

type Props = {
  editPassword: (passwordId: number, updatedPassword: Password) => void
  password: Password,
};

export const EditPassword: React.FC<Props> = ({ editPassword, password }) => {
  const [nameOfApp, setNameOfApp] = useState(password.nameOfApp);
  const [userLogin, setUserLogin] = useState(password.userLogin);
  const [userPassword, setUserPassword] = useState(password.userPassword);

  return (
    <div className="editor">
      <form
        className="form form--editor"
        onSubmit={(event) => {
          event.preventDefault();

          const data = {
            id: Date.now(),
            nameOfApp,
            userLogin,
            userPassword,
          };

          editPassword(password.id, data);
        }}
      >
        <label className="add-form__label" htmlFor="nameOfApp">
          <input
            className="form__input"
            type="text"
            name="nameOfApp"
            value={nameOfApp}
            onChange={(event) => {
              setNameOfApp(event.target.value);
            }}
          />
        </label>

        <label className="add-form__label" htmlFor="login">
          <input
            className="form__input"
            type="text"
            name="login"
            value={userLogin}
            onChange={(event) => {
              setUserLogin(event.target.value);
            }}
          />
        </label>

        <label className="add-form__label" htmlFor="login">
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
          Save
        </button>
      </form>
    </div>
  );
};
