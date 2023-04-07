import { render, screen } from '@testing-library/react';
import App from './App';

test('Midhun S Madhavan', () => {
  render(<App />);
  const linkElement = screen.getByText(/Midhun S Madhavan/i);
  expect(linkElement).toBeInTheDocument();
});
