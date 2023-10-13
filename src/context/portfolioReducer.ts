import { PortfolioState } from '../interfaces';

type PortfolioAction =
  | {
      type: 'setLandscapeMode';
      payload: { isLandscapeMode: boolean };
    }
  | {
      type: 'setDarkTheme';
      payload: { isDarkTheme: boolean };
    };

export const portfolioReducer = (
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState => {
  switch (action.type) {
    case 'setLandscapeMode':
      return {
        ...state,
        isLandscape: action.payload.isLandscapeMode,
      };

    case 'setDarkTheme': {
      return {
        ...state,
        isDarkTheme: action.payload.isDarkTheme,
      };
    }
    default:
      return state;
  }
};
