import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

export const getLinksSection = () => [
  { id: 1, icon: faLinkedinIn, href: 'https://www.linkedin.com/in/hectorolea' },
  { id: 2, icon: faGithub, href: 'https://github.com/macako' },
  { id: 3, icon: faEnvelope, href: 'mailto:hey@hectorolea.dev' },
];
