import { useEffect, useContext } from 'react';
import { PortfolioContext } from '../contexts';

const DARK_CLASS = document.body.classList;

export const useChangeTheme = () => {
  const { isDarkTheme, setDarkTheme } = useContext(PortfolioContext);

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
