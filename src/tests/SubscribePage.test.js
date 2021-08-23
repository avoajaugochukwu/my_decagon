import { render, screen } from '@testing-library/react';
import Subscribe from '../pages/Subscribe';

test('renders Subscribe Page', () => {
  render(<Subscribe />);
  const h1 = screen.getByText(/Create Plan/i);
  expect(h1).toBeInTheDocument();

  
});

test('renders Subscribe Page', () => {
  render(<Subscribe />);
  const steps1 = screen.getByText(/Pick your coffee/i);
  expect(steps1).toBeInTheDocument();

  const steps2 = screen.getByText(/Choose the frequency/i);
  expect(steps2).toBeInTheDocument();

  const steps3 = screen.getByText(/Receive and enjoy!/i);
  expect(steps3).toBeInTheDocument();
});
