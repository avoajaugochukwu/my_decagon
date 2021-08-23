import { render, screen } from '@testing-library/react';

import { getTotalPrice } from '../helpers/deliveryComputation'


test('Bi Weekly Delivery Price & Total Price is Correct', () => {
  expect(getTotalPrice('250g', 'Every 2 weeks')).toEqual(19.2)
})

test('Weekly Delivery Price & Total Price is Correct', () => {
  expect(getTotalPrice('500g', 'Every week')).toEqual(52)
})

test('Monthly Delivery Price & Total Price is Correct', () => {
  expect(getTotalPrice('1000g', 'Every month')).toEqual(42)
})

// Write test for validatingCoffeeOrder