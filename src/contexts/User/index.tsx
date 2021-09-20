/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useEffect, useState } from 'react';

import { loginUser, logoutUser, checkUserPersistance } from 'services/UserServices';

interface ContextProps {
  isLoggedIn: boolean;
  login: (userData: { email: string; password: string }) => void;
  logout: () => void;
  userName: string;
}

export const UserContext = createContext<ContextProps>({
  isLoggedIn: false,
  userName: '',
  login: () => {},
  logout: () => {}
});

export default function User({ children }: { children: React.ReactNode }) {
  const [userName, setUserName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (userData: { email: string; password: string }) => {
    loginUser(userData)
      .then((response) => {
        const { data, ok } = response;
        if (ok) {
          setUserName(data?.username || 'Usuario');
          setIsLoggedIn(true);
        } else {
          throw new Error('no paso nada');
        }
      })
      .catch(() => {
        throw new Error('no paso nada');
      });
  };

  const logout = () => {
    logoutUser()
      .then(() => {
        setIsLoggedIn(false);
        setUserName('');
      })
      .catch(() => {
        throw new Error('nope');
      });
  };

  useEffect(() => {
    checkUserPersistance().then(({ data, ok }) => {
      if (ok && data) {
        setIsLoggedIn(true);
        setUserName(data.data.username);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ userName, isLoggedIn, login, logout }}>{children}</UserContext.Provider>
  );
}
