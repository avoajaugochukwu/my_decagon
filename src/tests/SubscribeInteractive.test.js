import { render, screen } from '@testing-library/react';

import SubscribeInteractive from '../components/SubscribeInteractive/SubscribeInteractive'


test('renders Subscribe Interactive Component', () => {
  render(<SubscribeInteractive />);
  const beanType1 = screen.getByText(/Distinct, high quality coffee from a specific family-owned farm/i);
  expect(beanType1).toBeInTheDocument();

  
});

