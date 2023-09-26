import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import './App.css';
import './App.dark.css';
import { PortfolioContext, PortfolioProvider } from './contexts';
import { PortfolioPage } from './portfolio';

const PortFolioApp = () => {
  const generateClassName = (isLandscape) =>
    `${
      isLandscape ? 'cover-container-landscape' : 'cover-container'
    } d-flex flex-column text-center p-3 min-vh-100`;

  return (
    <PortfolioProvider>
      <PortfolioContext.Consumer>
        {({ isLandscape }) => (
          <Container className={generateClassName(isLandscape)}>
            <PortfolioPage />
          </Container>
        )}
      </PortfolioContext.Consumer>
    </PortfolioProvider>
  );
};

export default PortFolioApp;
