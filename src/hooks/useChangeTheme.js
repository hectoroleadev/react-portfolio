import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppState';

export const useChangeTheme = () => {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  const changeTheme = () => {
    document.body.classList.remove('dark');
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
    }
  }, [darkTheme]);

  return {
    darkTheme,
    changeTheme,
  };
};
