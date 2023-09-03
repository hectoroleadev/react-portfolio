import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';

export const FooterProfile = () => {
  const { isDarkTheme } = useContext(AppContext);

  return (
    <footer className={`mt-auto text-${isDarkTheme ? 'white' : 'black'}`}>
      ©2023 hectorolea.dev
    </footer>
  );
};
