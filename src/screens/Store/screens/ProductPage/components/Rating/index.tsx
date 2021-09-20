import { useTranslation } from 'react-i18next';

import { Product } from 'interface/Products';

import Breakdown from './components/Breakdown';
import Rate from './components/Rate';
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

function Rating({ product: { rating, _id } }: Props) {
  const { t } = useTranslation('Product');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {t('yourRating')}
        :
      </h1>
      <Rate id={_id!} />
      <h1 className={`${styles.title} ${styles.spacing}`}>
        {t('overAllRating')}
        :
      </h1>
      <Breakdown rating={rating} />
    </div>
  );
}

export default Rating;
