import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import { getLinksSection } from '../../helpers';
import { PortfolioContext } from '../../context';
import { useContext } from 'react';

export const LinksSection = () => {
  const { portfolioState } = useContext(PortfolioContext);
  const { isDarkTheme } = portfolioState;
  const links = getLinksSection();

  return (
    <section>
      {links.map((link) => (
        <span key={link.id}>
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
