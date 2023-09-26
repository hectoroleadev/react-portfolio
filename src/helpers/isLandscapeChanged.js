const MIN_LANDSCAPE = 600;

export const isLandscapeChanged = () => {
  const isLandscape = window.matchMedia('(orientation: landscape)');
  const screenHeight = window.screen.height;

  return isLandscape.matches && screenHeight < MIN_LANDSCAPE;
};
