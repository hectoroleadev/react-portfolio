import { useEffect, useContext } from 'react';
import { PortfolioContext } from '../contexts';
import { isLandscapeChanged } from '../helpers';

export const useChangeOrientation = () => {
  const { isLandscape, setLandscape } = useContext(PortfolioContext);

  const changeOrientationColumns = () => {
    setLandscape(isLandscapeChanged());
  };

  useEffect(() => {
    window.onload = changeOrientationColumns;
    window.addEventListener('resize', changeOrientationColumns);
  }, [isLandscape]);

  return {
    isLandscape,
  };
};
