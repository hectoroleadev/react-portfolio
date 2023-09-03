import { useEffect, useContext } from 'react';
import { AppContext } from '../contexts/AppState';

const DARK_CLASS = document.body.classList;

export const useChangeTheme = () => {
  const { isDarkTheme, setDarkTheme } = useContext(AppContext);

  const changeTheme = () => {
    DARK_CLASS.remove('dark');
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) DARK_CLASS.add('dark');
  }, [isDarkTheme]);

  return {
    isDarkTheme,
    changeTheme,
  };
};
