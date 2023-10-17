import { Container } from 'react-bootstrap';
import { usePortfolio } from '../../hooks';
import { Footer, Header } from '../../ui';

interface Props {
  children: JSX.Element;
}

export const PortfolioLayout = ({ children }: Props) => {
  const { isLandscape } = usePortfolio();
  const coverContainerStyle = isLandscape
    ? 'cover-container-landscape'
    : 'cover-container';

  return (
    <Container
      className={`d-flex flex-column text-center p-3 min-vh-100 ${coverContainerStyle}`}
    >
      <Header />
      {children}
      <Footer />
    </Container>
  );
};
