import { screen, render, fireEvent } from '@testing-library/react';

import { ROUTES } from 'components/Routes/constants';

import App from './index';

describe.skip('Main app', () => {
  test('Renders main screen with navigation bar and home page', async () => {
    render(<App />);

    const mainTitle = await screen.findByText('main');
    const homeNavbarButton = screen.getByText(ROUTES[0].title);
    const aboutUsNavbarButton = screen.getByText(ROUTES[1].title);

    expect(mainTitle).toBeInTheDocument();
    expect(homeNavbarButton).toHaveClass('active');
    expect(aboutUsNavbarButton).not.toHaveClass('active');
  });

  test('when clicking in navigation bar, redirects to another page', async () => {
    render(<App />);

    const mainTitle = await screen.findByText('main');
    const homeNavbarButton = screen.getByText(ROUTES[0].title);
    const aboutUsNavbarButton = screen.getByText(ROUTES[1].title);

    expect(mainTitle).toBeInTheDocument();
    expect(homeNavbarButton).toHaveClass('active');
    expect(aboutUsNavbarButton).not.toHaveClass('active');

    fireEvent.click(aboutUsNavbarButton);

    expect(await screen.findByText('Store'));
    expect(homeNavbarButton).not.toHaveClass('active');
    expect(aboutUsNavbarButton).toHaveClass('active');
  });
});
