import { faStar, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { notify } from 'react-notify-toast';
import Rating from 'react-rating';

import { ProductsContext } from 'contexts/Product';
import { rateProduct } from 'services/ProductService';

import styles from './styles.module.scss';

interface Props {
  id: string;
}

function Rate({ id }: Props) {
  const { t } = useTranslation('Product');
  const { refreshItem } = useContext(ProductsContext);

  const [isLoading, setIsLoading] = useState(false);

  const handleRate = (rate: number) => {
    setIsLoading(true);
    rateProduct(id, rate)
      .then(() => {
        refreshItem(id);
        notify.show(t('rateThanks'), 'success');
        setIsLoading(false);
      })
      .catch(() => {
        notify.show(t('rateError'), 'error');
        setIsLoading(false);
      });
  };

  return (
    <div>
      <Rating
        emptySymbol={<FontAwesomeIcon icon={faStar} size="2x" />}
        fullSymbol={<FontAwesomeIcon icon={faStar} className={styles.fullStar} size="2x" />}
        onClick={handleRate}
      />
      {' '}
      {isLoading && <FontAwesomeIcon icon={faSpinner} className={styles.loading} spin size="1x" />}
    </div>
  );
}

export default Rate;
