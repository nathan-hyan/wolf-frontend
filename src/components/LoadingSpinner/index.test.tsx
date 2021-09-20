import { render, screen } from '@testing-library/react';

import LoadingSpinner from './index';

describe('Loading Spinner', () => {
  test('Displays correctly without props', () => {
    render(<LoadingSpinner />);
    expect(screen.getByText('Cargando datos...')).toBeInTheDocument();
  });

  test('Display custom text in the spinner with three dots at the end', () => {
    render(<LoadingSpinner loadingText="Testing" />);
    expect(screen.getByText('Testing...')).toBeInTheDocument();
  });
});
