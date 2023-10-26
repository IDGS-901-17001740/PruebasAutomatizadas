// Componente1.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Componente1 from 'Componente1';

test('renders Componente1', () => {
  const { getByText } = render(<Componente1 />);
  const headingElement = getByText(/Componente 1/i);
  expect(headingElement).toBeInTheDocument();
});
