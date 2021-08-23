import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Create Plan', () => {
  render(<App />);
  const h1 = screen.getByText(/Create Plan/i);
  expect(h1).toBeInTheDocument();
});
