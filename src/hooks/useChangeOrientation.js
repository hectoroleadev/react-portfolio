import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppState';

export const useChangeOrientation = () => {
  const { landscape, setLandscape } = useContext(AppContext);

  const changeOrientationColumns = () => {
    const MIN_LANDSCAPE = 600;
    const isLandscape = window.matchMedia('(orientation: landscape)');
    const screenHeight = window.screen.height;

    isLandscape.matches && screenHeight < MIN_LANDSCAPE
      ? setLandscape(true)
      : setLandscape(false);
  };

  useEffect(() => {
    window.onload = changeOrientationColumns;
    window.addEventListener('resize', changeOrientationColumns);
  }, []);

  return {
    landscape,
  };
};
