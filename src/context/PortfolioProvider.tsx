import { useReducer } from 'react';
import { PortfolioContext } from './';
import { PortfolioState } from '../portfolio/reducer/interfaces';
import { portfolioReducer } from '../portfolio/reducer/state/portfolioReducer';
import {
  doSetDarkTheme,
  doSetLandscapeMode,
} from '../portfolio/reducer/actions';

const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';

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
    dispatch(doSetDarkTheme(isDarkTheme));
  };

  const setLandscapeMode = (isLandscapeMode: boolean) => {
    dispatch(doSetLandscapeMode(isLandscapeMode));
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
