import React from 'react';
import { useContext, useEffect } from 'react';
import { AppContext } from '../contexts/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

const HeaderProfile = () => {
  const { darkTheme, setDarkTheme } = useContext(AppContext);

  const changeTheme = () => {
    document.body.classList.remove('dark');
    setDarkTheme(!darkTheme);
  };

  useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark');
    }
  }, [darkTheme]);

  return (
    <header className='text-end fixed-top p-3'>
      <Button
        variant={darkTheme ? 'outline-light' : 'outline-dark'}
        onClick={() => changeTheme()}
      >
        <FontAwesomeIcon icon={darkTheme ? faSun : faMoon} size='lg' />
      </Button>
    </header>
  );
};

export default HeaderProfile;
