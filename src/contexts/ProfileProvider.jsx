import { useReducer } from 'react';
import { ProfileContext } from './ProfileContext';

const localStorageTheme = localStorage.getItem('isDarkTheme');

const isDarkTheme = localStorageTheme === 'true' || localStorageTheme === null;

const initialState = {
  isLandscape: false,
  isDarkTheme,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LANDSCAPE': {
      return {
        ...state,
        isLandscape: action.payload,
      };
    }0
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

export const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(profileReducer, initialState);

  const { isDarkTheme, isLandscape } = state;

  const setDarkTheme = (bool) => {
    const action = {
      type: 'SET_DARK_THEME',
      payload: bool,
    };

    dispatch(action);
  };

  const setLandscape = (bool) => {
    const action = {
      type: 'SET_LANDSCAPE',
      payload: bool,
    };

    dispatch(action);
  };

  return (
    <ProfileContext.Provider
      value={{
        isLandscape,
        isDarkTheme,
        setLandscape,
        setDarkTheme,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
