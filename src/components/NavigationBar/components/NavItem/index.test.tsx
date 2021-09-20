import { fireEvent, render, screen } from '@testing-library/react';

import styles from './styles.module.scss';

import NavItem from './index';

describe('Navigation bar item', () => {
  const mockFn = jest.fn();

  test('Displays correctly', () => {
    render(<NavItem label="test" onClick={mockFn} />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('Displays active class when active', () => {
    render(<NavItem label="test" onClick={mockFn} isActive />);
    expect(screen.getByText('test')).toHaveClass(styles.active);
  });

  test('Triggers onClick when is not active', () => {
    render(<NavItem label="test" onClick={mockFn} />);
    fireEvent.click(screen.getByText('test'));
    expect(mockFn).toHaveBeenCalled();
  });

  test('Wont trigger onClick when is active', () => {
    render(<NavItem label="test" onClick={mockFn} isActive />);
    fireEvent.click(screen.getByText('test'));
    expect(mockFn).not.toHaveBeenCalled();
  });
});
