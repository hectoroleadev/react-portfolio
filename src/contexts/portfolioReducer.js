import { types } from '../types';

export const portfolioReducer = (state, action) => {
  switch (action.type) {
    case types.landscape: {
      return {
        ...state,
        isLandscape: action.payload,
      };
    }
    case types.theme: {
      return {
        ...state,
        isDarkTheme: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
