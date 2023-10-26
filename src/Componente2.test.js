// Componente2.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Componente2 from 'Componente2';

test('renders Componente2', () => {
  const { getByText } = render(<Componente2 />);
  const headingElement = getByText(/Componente 2/i);
  expect(headingElement).toBeInTheDocument();
});
