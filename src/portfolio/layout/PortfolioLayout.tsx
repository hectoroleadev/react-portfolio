import { Footer, Header } from '../../ui';

interface props {
  children: JSX.Element | JSX.Element[];
}

export const PortfolioLayout = ({ children }: props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
