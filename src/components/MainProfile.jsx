import {
  AboutSection,
  DownloadSection,
  LinksSection,
  ContactSection,
} from './mainSection';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useChangeOrientation } from '../hooks/useChangeOrientation';

export const MainProfile = () => {
  const { isLandscape } = useChangeOrientation();

  return (
    <main>
      <article>
        <Row
          className='align-items-center mx-auto'
          style={{ height: isLandscape ? '70vh' : '90vh' }}
        >
          <Col>
            <ContactSection />
            <LinksSection />
            {!isLandscape && <AboutSection />}
            {!isLandscape && <DownloadSection />}
          </Col>
          {isLandscape && (
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
