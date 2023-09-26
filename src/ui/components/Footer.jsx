import { useContext } from 'react';
import { PortfolioContext } from '../../contexts';

export const Footer = () => {
  const { isDarkTheme } = useContext(PortfolioContext);
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-auto text-${isDarkTheme ? 'white' : 'black'}`}>
      ©{year} hectorolea.dev
    </footer>
  );
};
