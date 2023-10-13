import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { usePortfolio } from '../../hooks';
import {
  AboutSection,
  ContactSection,
  DownloadSection,
  LinksSection,
} from '../components';
import { Contact } from '../../interfaces';

export const ProfileView = () => {
  const { isLandscape } = usePortfolio();
  const contact: Contact = {
    fullName: 'hector olea',
    role: 'full stack developer',
  };

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
                <ContactSection contact={contact} />
                <LinksSection />
              </Col>
              <Col>
                <AboutSection />
                <DownloadSection />
              </Col>
            </>
          ) : (
            <Col>
              <ContactSection contact={contact} />
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
