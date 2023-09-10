import { useEffect, useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

const DARK_CLASS = document.body.classList;

export const useChangeTheme = () => {
  const { isDarkTheme, setDarkTheme } = useContext(ProfileContext);

  const changeTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    if (isDarkTheme) {
      DARK_CLASS.add('dark');
    } else {
      DARK_CLASS.remove('dark');
    }

    localStorage.setItem('isDarkTheme', isDarkTheme);
  }, [isDarkTheme]);

  return {
    isDarkTheme,
    changeTheme,
  };
};
