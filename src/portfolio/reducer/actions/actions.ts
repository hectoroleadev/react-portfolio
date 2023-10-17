export type PortfolioAction =
  | {
      type: 'setLandscapeMode';
      payload: { value: boolean };
    }
  | {
      type: 'setDarkTheme';
      payload: { value: boolean };
    };

export const doSetDarkTheme = (value: boolean): PortfolioAction => ({
  type: 'setDarkTheme',
  payload: { value },
});

export const doSetLandscapeMode = (value: boolean): PortfolioAction => ({
  type: 'setLandscapeMode',
  payload: { value },
});
