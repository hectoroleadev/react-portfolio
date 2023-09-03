import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useChangeTheme } from '../hooks/useChangeTheme';

export const HeaderProfile = () => {
  const { isDarkTheme, changeTheme } = useChangeTheme();

  return (
    <header className='text-end fixed-top p-3'>
      <Button
        variant={isDarkTheme ? 'outline-light' : 'outline-dark'}
        onClick={changeTheme}
      >
        <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} size='lg' />
      </Button>
    </header>
  );
};
