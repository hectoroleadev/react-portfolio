import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderProfile, MainProfile, FooterProfile } from './components';
import Container from 'react-bootstrap/Container';
import { AppContext, AppProvider } from './contexts/AppState';
import './App.css';
import './App.dark.css';

const PortFolioApp = () => {
  return (
    <AppProvider>
      <AppContext.Consumer>
        {({ landscape }) => (
          <Container
            className={`${
              landscape ? 'cover-container-landscape' : 'cover-container'
            } d-flex flex-column text-center p-3 min-vh-100`}
          >
            <HeaderProfile />
            <MainProfile />
            <FooterProfile />
          </Container>
        )}
      </AppContext.Consumer>
    </AppProvider>
  );
};

export default PortFolioApp;
