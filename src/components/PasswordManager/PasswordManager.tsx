import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EditPassword } from '../EditPassword/EditPassword';
import { NewPassword } from '../NewPassword/NewPassword';
import './PasswordManager.scss';

export const PasswordManager: React.FC = () => {
  const location = useLocation();
  const { nameFromLocation } = location.state as LocationState;

  const [user, setUser] = useState(nameFromLocation);
  const [userData, setUserData] = useState<User | null>(null);

  const [selectedPassword, setSelectedPassword] = useState(0);
  const [revealedPassword, setRevealedPassword] = useState(0);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem(user) || '');

    setUserData(data);
  };

  useEffect(() => {
    setUser(nameFromLocation);
    loadData();
  }, []);

  const addNewPassword = (data: Password) => {
    if (userData !== null) {
      const updatedData = {
        ...userData,
        savedPasswords: [...userData.savedPasswords, data],
      };

      localStorage.setItem(user, JSON.stringify(updatedData));
      loadData();
    }
  };

  const deletePassword = (passwordId: number) => {
    if (userData !== null) {
      const updatedData = {
        ...userData,
        savedPasswords: [...userData.savedPasswords].filter(password => passwordId !== password.id),
      };

      localStorage.setItem(user, JSON.stringify(updatedData));
      loadData();
    }
  };

  const editPassword = (passwordId: number, updatedPassword: Password) => {
    if (userData !== null) {
      const updatedData = {
        ...userData,
        savedPasswords: [...userData.savedPasswords].map(password => {
          if (passwordId === password.id) {
            return updatedPassword;
          }

          return password;
        }),
      };

      localStorage.setItem(user, JSON.stringify(updatedData));
      loadData();
    }
  };

  return (
    <div className="manager">
      <Link to="/">
        <button className="button manager__quite" type="button">
          Quit
        </button>
      </Link>

      <NewPassword addNewPassword={addNewPassword} />

      <div className="manager__passwords">
        Passwords
        {!userData?.savedPasswords.length
          ? (
            <p>Add passwords using the form above!</p>
          ) : (
            <ol className="manager__list">
              {userData?.savedPasswords.map((password: Password) => (
                <React.Fragment key={password.id}>
                  <li className="manager__list-item">
                    <p>{`Website: ${password.nameOfApp}`}</p>
                    <p>{`Login: ${password.userLogin}`}</p>
                    <p>
                      {revealedPassword === password.id
                        ? (`Password: ${password.userPassword}`)
                        : 'Password: ******'}
                    </p>
                    {password.id === selectedPassword && (
                      <div className="manager__editor">
                        <EditPassword
                          editPassword={editPassword}
                          password={password}
                        />
                      </div>
                    )}
                  </li>

                  <button
                    className="button manager__button"
                    type="button"
                    onClick={() => {
                      if (selectedPassword !== password.id) {
                        setSelectedPassword(password.id);
                      } else {
                        setSelectedPassword(0);
                      }
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="button manager__button"
                    type="button"
                    onClick={() => {
                      setRevealedPassword(password.id);
                    }}
                  >
                    Show password
                  </button>

                  <button
                    className="button manager__button"
                    type="button"
                    onClick={() => {
                      deletePassword(password.id);
                    }}
                  >
                    Delete password
                  </button>
                </React.Fragment>
              ))}
            </ol>
          )}

      </div>
    </div>
  );
};
