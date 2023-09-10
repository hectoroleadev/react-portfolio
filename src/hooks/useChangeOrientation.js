import { useEffect, useContext } from 'react';
import { ProfileContext } from '../contexts/ProfileContext';

const MIN_LANDSCAPE = 600;

export const useChangeOrientation = () => {
  const { isLandscape, setLandscape } = useContext(ProfileContext);

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
    isLandscape,
  };
};
