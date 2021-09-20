import { useHistory, useLocation } from 'react-router';
import { useTranslation } from 'react-i18next';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import logo from 'assets/logo.webp';
import paths from 'components/Routes/paths';

import NavItem from './components/NavItem';
import styles from './styles.module.scss';

function NavigationBar() {
  const { t } = useTranslation('NavBar');
  const history = useHistory();
  const location = useLocation();

  return (
    <div className={styles.container} title="main">
      <div>
        <Link to={paths.home}>
          <img src={logo} alt="Wolf Logo" className={styles.logo} />
        </Link>
      </div>
      <div className={styles.links}>
        <NavItem
          onClick={() => history.push(paths.home)}
          label={t('home')}
          isActive={location.pathname === paths.home}
        />
        <NavItem
          onClick={() => history.push(paths.store)}
          label={t('store')}
          isActive={location.pathname === paths.store}
        />
        <NavItem
          onClick={() => history.push(paths.cart)}
          icon={faShoppingCart}
          isActive={location.pathname === paths.cart}
          isCart
        />
      </div>
    </div>
  );
}
export default NavigationBar;
