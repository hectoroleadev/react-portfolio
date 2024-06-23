import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { usePortfolio } from '../../hooks';
import {
  AboutSection,
  ContactSection,
  DownloadSection,
  LinksSection,
} from '../components';

export const ProfileView = () => {
  const { isLandscape } = usePortfolio();

  return (
    <main className='animate__animated animate__fadeIn animate__slow'>
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
