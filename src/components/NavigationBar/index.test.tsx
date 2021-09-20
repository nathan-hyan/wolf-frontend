import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';

import { ROUTES } from 'components/Routes/constants';

import { createMemoryHistory } from 'history';
import NavigationBar from './index';

describe.skip('Navigation bar', () => {
  test('Start with home selected', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavigationBar />
      </Router>,
    );

    expect(screen.getByText(ROUTES[0].title)).toHaveClass('active');
    expect(screen.getByText(ROUTES[1].title)).not.toHaveClass('active');
  });

  test('Change active when the route changes', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavigationBar />
      </Router>,
    );
    expect(screen.getByText(ROUTES[1].title)).not.toHaveClass('active');
    expect(screen.getByText(ROUTES[0].title)).toHaveClass('active');
    expect(history.location.pathname).toBe(ROUTES[0].path);

    fireEvent.click(screen.getByText(ROUTES[1].title));

    expect(screen.getByText(ROUTES[1].title)).toHaveClass('active');
    expect(screen.getByText(ROUTES[0].title)).not.toHaveClass('active');
    expect(history.location.pathname).toBe(ROUTES[1].path);
  });

  test('Not display extra items if not tagged with displayOnNavBar', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NavigationBar />
      </Router>,
    );
    const totalRoutes = ROUTES.length;
    const navBarRoutes = ROUTES.reduce((previousValue, { displayOnNavbar }) => {
      if (displayOnNavbar) {
        return previousValue + 1;
      }
      return previousValue;
    }, 0);

    expect(screen.getAllByTitle('item').length).not.toBe(totalRoutes);
    expect(screen.getAllByTitle('item').length).toBe(navBarRoutes);
  });
});
