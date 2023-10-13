import { useContext, useEffect } from 'react';
import { PortfolioContext } from '../context';
import { isLandscapeChanged } from '../helpers';

const DARK_CLASS = document.body.classList;

export const usePortfolio = () => {
  const { portfolioState, setDarkTheme, setLandscapeMode } =
    useContext(PortfolioContext);
  const { isDarkTheme, isLandscape } = portfolioState;
  const changeOrientationColumns = () => setLandscapeMode(isLandscapeChanged());

  useEffect(() => {
    window.onload = changeOrientationColumns;
    window.addEventListener('resize', changeOrientationColumns);
  }, [isLandscape]);

  useEffect(() => {
    if (isDarkTheme) {
      DARK_CLASS.add('dark');
    } else {
      DARK_CLASS.remove('dark');
    }

    localStorage.setItem('isDarkTheme', isDarkTheme ? 'true' : 'false');
  }, [isDarkTheme]);

  return {
    isDarkTheme,
    isLandscape,
    setDarkTheme,
    changeTheme: () => setDarkTheme(!isDarkTheme),
  };
};
