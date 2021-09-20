import { ComponentType } from 'react';
import ReactGA from 'react-ga';
import {
  Route, Redirect, RouteComponentProps, RouteProps, useHistory,
} from 'react-router-dom';

interface Props extends RouteProps {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  redirectTo?: string;
}

function RouteItem({ redirectTo, ...config }: Props) {
  const history = useHistory();

  history.listen((location: any) => {
    ReactGA.pageview(location.pathname);
  });

  return redirectTo ? <Redirect to={redirectTo} /> : <Route {...config} />;
}

export default RouteItem;
