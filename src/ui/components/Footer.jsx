export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={`mt-auto  opacity-25`}>©{year} hectorolea.dev</footer>
  );
};
