import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { CartContext } from 'contexts/Cart';
import { CartItem } from 'screens/Cart/constants';

import PurchaseItem from './components/PurchaseItem';
import styles from './styles.module.scss';

interface Props {
  items: CartItem[];
  className: string;
}

function PurchaseList({ items, className }: Props) {
  const { t } = useTranslation('Cart');
  const { removeProductFromCart } = useContext(CartContext);

  const handleDeleteItemFromList = (id: string) => {
    removeProductFromCart(id);
  };

  const calculateTotal = () => items.reduce((current, total) => (
    total.price * total.quantity + current
  ), 0);

  return (
    <div className={`${className}`}>
      {items.map((item) => (
        <PurchaseItem key={item.id} item={item} onDelete={handleDeleteItemFromList} />
      ))}
      <hr className={styles.separator} />
      <div className={styles.totalContainer}>
        <p className={styles.totalText}>{t('total')}</p>
        <p className={styles.price}>
          $
          {calculateTotal()}
        </p>
      </div>
    </div>
  );
}

export default PurchaseList;
