import { createContext } from 'react';
import { PortfolioState } from '../portfolio/reducer/interfaces';

export type PortfolioContextProps = {
  portfolioState: PortfolioState;
  setDarkTheme: (isDarkTheme: boolean) => void;
  setLandscapeMode: (isLandscapeMode: boolean) => void;
};

export const PortfolioContext = createContext<PortfolioContextProps>(
  {} as PortfolioContextProps
);
