import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { getLinksSection } from '../../helpers/getLinksSection';
import { ProfileContext } from '../../contexts';

export const LinksSection = () => {
  const { isDarkTheme } = useContext(ProfileContext);
  const links = getLinksSection();

  return (
    <section>
      {links.map((link, idx) => (
        <span key={idx}>
          <Button
            variant={isDarkTheme ? 'outline-light' : 'outline-dark'}
            href={link.href}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon icon={link.icon} size='lg' />
          </Button>{' '}
        </span>
      ))}
    </section>
  );
};
