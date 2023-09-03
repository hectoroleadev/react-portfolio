import { createContext, useReducer } from 'react';

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANDSCAPE': {
      return {
        ...state,
        isLandscape: action.payload,
      };
    }
    case 'SET_DARK_THEME': {
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

const initialState = {
  landscape: false,
  isDarkTheme: true,
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const setDarkTheme = (bool) => {
    dispatch({
      type: 'SET_DARK_THEME',
      payload: bool,
    });
  };

  const setLandscape = (bool) => {
    dispatch({
      type: 'SET_LANDSCAPE',
      payload: bool,
    });
  };

  return (
    <AppContext.Provider
      value={{
        landscape: state.isLandscape,
        isDarkTheme: state.isDarkTheme,
        setLandscape,
        setDarkTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
