import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import { CartContext } from 'contexts/Cart';

import styles from './styles.module.scss';

interface Props {
  label?: string;
  icon?: IconProp;
  onClick: () => void;
  isActive?: boolean;
  isCart?: boolean;
}
function NavItem({ onClick, label, icon, isActive, isCart }: Props) {
  const { productList } = useContext(CartContext);
  const activation = () => {
    if (isActive) {
      return;
    }
    onClick();
  };
  return (
    <div title="item" onClick={activation}>
      {label && <p className={`${isActive ? styles.active : ''} ${styles.label}`}>{label}</p>}
      {icon && <FontAwesomeIcon className={`${isActive ? styles.active : ''} ${styles.icon}`} icon={icon} />}
      {isCart && productList.length ? <p className={styles.cartNumber}>{productList.length}</p> : <></>}
    </div>
  );
}

export default NavItem;
