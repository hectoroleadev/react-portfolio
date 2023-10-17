import { render, screen } from '@testing-library/react';
import { PortFolioApp } from '../src/PortfolioApp';

test('renders hectorolea.dev footer', () => {
  render(<PortFolioApp />);
  const linkElement = screen.getByText(/hectorolea.dev/i);
  expect(linkElement).toBeInTheDocument();
});
