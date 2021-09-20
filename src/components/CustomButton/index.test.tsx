import { render, fireEvent, screen } from '@testing-library/react';

import styles from './styles.module.scss';

import Button from './index';

const PROPS = {
  label: 'Custom Test',
  onClick: () => jest.fn(),
  className: 'none',
  small: false,
  isSubmit: false
};

describe('Custom button', () => {
  test('should render the button correctly', () => {
    render(<Button {...PROPS} />);

    expect(screen.getByText(PROPS.label)).toBeInTheDocument();
  });

  test('should trigger onClick', () => {
    const mockFn = jest.fn();
    render(<Button label={PROPS.label} onClick={mockFn} />);

    fireEvent.click(screen.getByText(PROPS.label));

    expect(mockFn).toHaveBeenCalled();
  });

  test('should not trigger onClick if isSubmit is true', () => {
    const mockFn = jest.fn();
    render(<Button label={PROPS.label} onClick={mockFn} isSubmit />);

    fireEvent.click(screen.getByText(PROPS.label));

    expect(mockFn).not.toHaveBeenCalled();
  });

  test('should render big button', () => {
    render(<Button {...PROPS} />);

    expect(screen.getByText(PROPS.label)).toHaveClass(`${styles.big} ${styles.primaryButton}`);
  });
  test('should render small button', () => {
    render(<Button {...PROPS} small />);

    expect(screen.getByText(PROPS.label)).toHaveClass(`${styles.small} ${styles.primaryButton}`);
  });

  test('should include custom className', () => {
    render(<Button {...PROPS} className="customClassName" />);

    expect(screen.getByTitle('outer-div')).toHaveClass('customClassName');
  });

  test('should work as submit button without onClick', () => {
    const handleSubmit = jest.fn((e) => e.preventDefault());

    render(
      <form onSubmit={handleSubmit}>
        <Button label="submit" isSubmit />
      </form>
    );

    fireEvent.click(screen.getByText('submit'));

    expect(handleSubmit).toHaveBeenCalled();
  });
});
