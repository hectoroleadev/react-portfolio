import { useContext } from 'react';
import { AppContext } from '../../contexts/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { getLinksSection } from '../../helpers/getLinksSection';

export const LinksSection = () => {
  const { isDarkTheme } = useContext(AppContext);
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
