import { useEffect, useState, useContext } from 'react';
import { AppContext } from '../contexts/AppState';

const MIN_LANDSCAPE = 600;

export const useChangeOrientation = () => {
  const { landscape, setLandscape } = useContext(AppContext);

  const changeOrientationColumns = () => {
    const isLandscape = window.matchMedia('(orientation: landscape)');
    const screenHeight = window.screen.height;

    setLandscape(isLandscape.matches && screenHeight < MIN_LANDSCAPE);
  };

  useEffect(() => {
    window.onload = changeOrientationColumns;
    window.addEventListener('resize', changeOrientationColumns);
  }, []);

  return {
    landscape,
  };
};
