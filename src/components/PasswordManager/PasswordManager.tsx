import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { EditPassword } from '../EditPassword/EditPassword';
import { NewPassword } from '../NewPassword/NewPassword';

type Props = {
  userLogin: string,
};

export const PasswordManager: React.FC<Props> = ({ userLogin }) => {
  const [user] = useState('vlad');
  const [userData, setUserData] = useState<User | null>(null);

  const [selectedPassword, setSelectedPassword] = useState(0);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem(user) || '');

    setUserData(data);
  };

  useEffect(() => {
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

  // eslint-disable-next-line no-console
  console.log(userLogin, user, userData);

  return (
    <div>
      <Link to="/">Quit</Link>
      <NewPassword addNewPassword={addNewPassword} />
      <div>
        Passwords
        <ul>
          {userData?.savedPasswords.map((password: Password) => (
            <React.Fragment key={password.id}>
              <li>
                <p>{`App name: ${password.nameOfApp}`}</p>
                <p>{`Login: ${password.userLogin}`}</p>
                <p>{`Password: ${password.userPassword}`}</p>
              </li>
              <button
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
              {password.id === selectedPassword && (
                <EditPassword
                  editPassword={editPassword}
                  password={password}
                />
              )}
              <button
                type="button"
                onClick={() => {
                  deletePassword(password.id);
                }}
              >
                X
              </button>
            </React.Fragment>
          ))}
        </ul>

      </div>
    </div>
  );
};
