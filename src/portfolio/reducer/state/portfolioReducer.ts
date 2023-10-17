import { PortfolioAction } from '../actions';
import { PortfolioState } from '../interfaces';

export const portfolioReducer = (
  state: PortfolioState,
  action: PortfolioAction
): PortfolioState => {
  switch (action.type) {
    case 'setLandscapeMode':
      return {
        ...state,
        isLandscape: action.payload.value,
      };

    case 'setDarkTheme': {
      return {
        ...state,
        isDarkTheme: action.payload.value,
      };
    }
    default:
      return state;
  }
};
