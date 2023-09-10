import 'bootstrap/dist/css/bootstrap.min.css';
import { HeaderProfile, MainProfile, FooterProfile } from './components';
import Container from 'react-bootstrap/Container';
import './App.css';
import './App.dark.css';
import { ProfileContext, ProfileProvider } from './contexts';

const PortFolioApp = () => {
  return (
    <ProfileProvider>
      <ProfileContext.Consumer>
        {({ isLandscape }) => (
          <Container
            className={`${
              isLandscape ? 'cover-container-landscape' : 'cover-container'
            } d-flex flex-column text-center p-3 min-vh-100`}
          >
            <HeaderProfile />
            <MainProfile />
            <FooterProfile />
          </Container>
        )}
      </ProfileContext.Consumer>
    </ProfileProvider>
  );
};

export default PortFolioApp;
