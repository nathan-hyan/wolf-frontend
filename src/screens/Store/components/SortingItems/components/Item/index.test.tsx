import { fireEvent, render, screen } from '@testing-library/react';

import styles from './styles.module.scss';

import Item from './index';

describe('Sorting bar item', () => {
  const mockFn = jest.fn();

  test('Renders correctly', () => {
    render(<Item onClick={mockFn} name="thing" isSelected />);
    expect(screen.getByText('thing')).toBeInTheDocument();
  });
  test('When is not selected, it doesnt have the red color', () => {
    render(<Item onClick={mockFn} name="thing" isSelected={false} />);
    expect(screen.getByText('thing')).toHaveClass(styles.notSelected);
  });
  test('When clicked, will trigger the onClick', () => {
    render(<Item onClick={mockFn} name="thing" isSelected={false} />);
    fireEvent.click(screen.getByText('thing'));
    expect(mockFn).toHaveBeenCalled();
  });
});
