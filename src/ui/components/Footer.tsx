export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-auto  opacity-50`}>©{year} hectorolea.dev</footer>
  );
};
