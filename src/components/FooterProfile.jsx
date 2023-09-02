import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';

export const FooterProfile = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <footer className={`mt-auto text-${darkTheme ? 'white' : 'black'}`}>
      ©2023 hectorolea.dev
    </footer>
  );
};
