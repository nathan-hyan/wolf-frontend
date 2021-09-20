import Cart from 'screens/Cart';
import Gratitude from 'screens/Cart/screens/Gratitude';
import Home from 'screens/Home';
import ProductPage from 'screens/Store/screens/ProductPage';
import Store from 'screens/Store';

import PATHS from './paths';

export const ROUTES = [
  {
    exact: true,
    path: PATHS.home,
    component: Home,
    title: 'Routes:homeTitle',
    description: 'Routes:homeDescription',
    displayOnNavbar: true,
  },
  {
    exact: true,
    path: PATHS.store,
    component: Store,
    title: 'Routes:storeTitle',
    description: 'Routes:storeDescription',
    displayOnNavbar: true,
  },
  {
    exact: true,
    path: PATHS.cart,
    component: Cart,
    title: 'Routes:cartTitle',
    description: 'Routes:cartDescription',
    displayOnNavbar: true,
  },
  {
    exact: true,
    path: PATHS.thankYou,
    component: Gratitude,
    title: 'Routes:gratitudeTitle',
    description: 'Routes:gratitudeDescription',
    displayOnNavbar: false,
  },
  {
    exact: true,
    path: PATHS.product,
    component: ProductPage,
    title: 'Routes:productTitle',
    description: 'Routes:productDescription',
    displayOnNavbar: false,
  },
];
