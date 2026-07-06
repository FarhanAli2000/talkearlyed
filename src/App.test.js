import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.location.hash = '';
});

test('renders Talk Early home content', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', {
      name: /Helping Los Angeles Families Navigate Early Childhood Education/i,
    })
  ).toBeInTheDocument();
});

test('renders About page from hash route', () => {
  window.location.hash = '#about';

  render(<App />);

  expect(
    screen.getByRole('heading', {
      name: /Helping Los Angeles Early Education/i,
    })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', {
      name: /The Benefits of Sustainable Interior Design/i,
    })
  ).toBeInTheDocument();
});
