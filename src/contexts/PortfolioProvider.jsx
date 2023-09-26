import { useReducer } from 'react';
import { PortfolioContext, portfolioReducer } from './';
import { types } from '../types';

const localStorageTheme = localStorage.getItem('isDarkTheme');

const isDarkTheme = localStorageTheme === 'true' || localStorageTheme === null;

const initialState = {
  isLandscape: false,
  isDarkTheme,
};

export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState);

  const { isDarkTheme, isLandscape } = state;

  const setDarkTheme = (bool) => {
    const action = {
      type: types.theme,
      payload: bool,
    };

    dispatch(action);
  };

  const setLandscape = (bool) => {
    const action = {
      type: types.landscape,
      payload: bool,
    };

    dispatch(action);
  };

  return (
    <PortfolioContext.Provider
      value={{
        isLandscape,
        isDarkTheme,
        setLandscape,
        setDarkTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};
