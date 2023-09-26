import { Footer, Header } from '../../ui';

export const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
