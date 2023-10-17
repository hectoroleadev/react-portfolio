import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './App.dark.css';
import { PortfolioProvider } from './context';
import { PortfolioPage } from './portfolio/pages';

const PortFolioApp = () => {
  return (
    <PortfolioProvider>
      <PortfolioPage />
    </PortfolioProvider>
  );
};

export default PortFolioApp;
