import { useContext } from 'react';
import { AppContext } from '../../contexts/AppState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';

export const DownloadSection = () => {
  const { darkTheme } = useContext(AppContext);

  return (
    <section>
      <Button
        variant={darkTheme ? 'outline-light' : 'outline-dark'}
        href='pdfs/hector-olea-resume.pdf'
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faDownload} size='lg' />
        <span className='fw-bold'> download my resume</span>
      </Button>
    </section>
  );
};
