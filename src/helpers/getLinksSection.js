import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const getLinksSection = () => [
  {
    icon: faLinkedinIn,
    href: 'https://www.linkedin.com/in/hectorolea',
  },
  { icon: faGithub, href: 'https://github.com/macako' },
  { icon: faEnvelope, href: 'mailto:hey@hectorolea.dev' },
];
