import {
  AboutSection,
  DownloadSection,
  LinksSection,
  ContactSection,
} from '../components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useChangeOrientation } from '../../hooks';

export const ProfileView = () => {
  const { isLandscape } = useChangeOrientation();

  return (
    <main>
      <article>
        <Row
          className='align-items-center mx-auto'
          style={{ height: isLandscape ? '70vh' : '90vh' }}
        >
          {isLandscape ? (
            <>
              <Col>
                <ContactSection />
                <LinksSection />
              </Col>
              <Col>
                <AboutSection />
                <DownloadSection />
              </Col>
            </>
          ) : (
            <Col>
              <ContactSection />
              <LinksSection />
              <AboutSection />
              <DownloadSection />
            </Col>
          )}
        </Row>
      </article>
    </main>
  );
};
