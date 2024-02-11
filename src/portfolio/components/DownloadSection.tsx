import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { PortfolioContext } from '../../context';
import { getEnvVariables } from '../../helpers/getEnvVariables';

const { STORAGE_URL } = getEnvVariables();

export const DownloadSection = () => {
  const { portfolioState } = useContext(PortfolioContext);
  const { isDarkTheme } = portfolioState;

  return (
    <section>
      <Button
        variant={isDarkTheme ? 'outline-light' : 'outline-dark'}
        href={`${STORAGE_URL}/hector-olea-resume.pdf`}
        target='_blank'
        rel='noreferrer'
      >
        <FontAwesomeIcon icon={faDownload} size='lg' />
        <span className='fw-bold'> download my resume</span>
      </Button>
    </section>
  );
};
