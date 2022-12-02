import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppState';
import ContactSection from './ContactSection';
import LinksSection from './LinksSection';
import AboutSection from './AboutSection';
import DownloadSection from './DownloadSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const MainProfile = () => {
  const { landscape, setLandscape } = useContext(AppContext);

  const changeOrientationColumns = () => {
    const MIN_LANDSCAPE = 600;
    const isLandscape = window.matchMedia('(orientation: landscape)');
    const screenHeight = window.screen.height;

    isLandscape.matches && screenHeight < MIN_LANDSCAPE
      ? setLandscape(true)
      : setLandscape(false);
  };

  useEffect(() => {
    window.onload = changeOrientationColumns;
    window.addEventListener('resize', changeOrientationColumns);
  }, []);

  return (
    <main>
      <article>
        <Row
          className='align-items-center mx-auto'
          style={{ height: landscape ? '70vh' : '90vh' }}
        >
          <Col>
            <ContactSection />
            <LinksSection />
            {!landscape && <AboutSection />}
            {!landscape && <DownloadSection />}
          </Col>
          {landscape && (
            <Col>
              <AboutSection />
              <DownloadSection />
            </Col>
          )}
        </Row>
      </article>
    </main>
  );
};

export default MainProfile;
