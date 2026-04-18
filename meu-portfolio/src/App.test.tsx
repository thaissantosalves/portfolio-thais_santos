import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renderiza o portfólio', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: /Thais Santos/i })).toBeInTheDocument();
});
