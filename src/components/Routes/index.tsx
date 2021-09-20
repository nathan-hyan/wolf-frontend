import { BrowserRouter as Router, Switch } from 'react-router-dom';

import NavigationBar from 'components/NavigationBar';
import ProductsProvider from 'contexts/Product';
import CartProvider from 'contexts/Cart';

import Suspense from '../Suspense';

import { ROUTES } from './constants';
import RouteItem from './components/RouteItem';
import styles from './styles.module.scss';

function Routes() {
  return (
    <Router>
      <ProductsProvider>
        <CartProvider>
          <NavigationBar />
          <div className={styles.container}>
            <Suspense>
              <Switch>
                {ROUTES.map(({ path, ...config }) => (
                  <RouteItem key={path} path={path} {...config} />
                ))}
              </Switch>
            </Suspense>
          </div>
        </CartProvider>
      </ProductsProvider>
    </Router>
  );
}

export default Routes;
