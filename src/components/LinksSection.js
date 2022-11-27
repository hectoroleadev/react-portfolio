import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

const LinksSection = () => {
  const { darkTheme } = useContext(AppContext);
  const links = [
    {
      icon: faLinkedinIn,
      href: 'https://www.linkedin.com/in/hectorolea',
    },
    { icon: faGithub, href: 'https://github.com/macako' },
    { icon: faEnvelope, href: 'mailto:hey@hectorolea.dev' },
  ];

  return (
    <section>
      {links.map((link, idx) => (
        <span key={idx}>
          <Button
            variant={darkTheme ? 'outline-light' : 'outline-dark'}
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

export default LinksSection;
