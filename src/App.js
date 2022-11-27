import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderProfile from './components/HeaderProfile';
import MainProfile from './components/MainProfile';
import FooterProfile from './components/FooterProfile';
import Container from 'react-bootstrap/Container';
import { AppContext, AppProvider } from './contexts/AppState';
import './App.css';
import './App.dark.css';

const App = () => {
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

export default App;
