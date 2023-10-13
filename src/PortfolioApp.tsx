import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import './App.dark.css';
import { PortfolioPage } from './portfolio/pages';
import { PortfolioContext, PortfolioProvider } from './context';
import { PortfolioState } from './interfaces';

const PortFolioApp = () => {
  const generateClassName = ({ isLandscape }: PortfolioState) =>
    `${
      isLandscape ? 'cover-container-landscape' : 'cover-container'
    } d-flex flex-column text-center p-3 min-vh-100`;

  return (
    <PortfolioProvider>
      <PortfolioContext.Consumer>
        {({ portfolioState }) => (
          <Container className={generateClassName(portfolioState)}>
            <PortfolioPage />
          </Container>
        )}
      </PortfolioContext.Consumer>
    </PortfolioProvider>
  );
};

export default PortFolioApp;
