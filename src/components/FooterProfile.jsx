import { useContext } from 'react';
import { ProfileContext } from '../contexts';

export const FooterProfile = () => {
  const { isDarkTheme } = useContext(ProfileContext);

  return (
    <footer className={`mt-auto text-${isDarkTheme ? 'white' : 'black'}`}>
      ©2023 hectorolea.dev
    </footer>
  );
};
