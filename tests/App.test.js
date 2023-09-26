import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders hectorolea.dev footer', () => {
  render(<App />);
  const linkElement = screen.getByText(/hectorolea.dev/i);
  expect(linkElement).toBeInTheDocument();
});
