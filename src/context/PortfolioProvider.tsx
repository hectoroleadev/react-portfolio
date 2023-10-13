import { useReducer } from 'react';
import { PortfolioState } from '../interfaces';
import { PortfolioContext, portfolioReducer } from './';

const localStorageTheme = localStorage.getItem('isDarkTheme');

const isDarkTheme = localStorageTheme === 'true' || localStorageTheme === null;

const initialState: PortfolioState = {
  isLandscape: false,
  isDarkTheme,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PortfolioProvider = ({ children }: props) => {
  const [portfolioState, dispatch] = useReducer(portfolioReducer, initialState);

  const setDarkTheme = (isDarkTheme: boolean) => {
    dispatch({ type: 'setDarkTheme', payload: { isDarkTheme } });
  };

  const setLandscapeMode = (isLandscapeMode: boolean) => {
    dispatch({ type: 'setLandscapeMode', payload: { isLandscapeMode } });
  };

  return (
    <PortfolioContext.Provider
      value={{
        portfolioState,
        setLandscapeMode,
        setDarkTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
