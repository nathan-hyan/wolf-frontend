/* eslint-disable react/forbid-dom-props */
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { notify } from 'react-notify-toast';

import { Product } from 'interface/Products';
import { handleDiscountPercentage } from 'utils/randomNumber';
import StaticImage from 'components/StaticImage';

import useGATracking from 'hooks/useGATracking';
import { GAProductActions, GoogleAnalyticsEvents } from 'interface/GoogleAnalytics';
import styles from './styles.module.scss';

function CustomCard({
  image,
  name,
  description,
  price,
  discount,
  _id,
  comments,
  stock,
  rating: { total },
}: Product) {
  const { t } = useTranslation('Card');
  const history = useHistory();
  const gaTracking = useGATracking(GoogleAnalyticsEvents.Product);

  const quantity = comments.length;

  const handleNoStock = () => notify.show(t('noStock'), 'warning');

  const handleViewProduct = () => {
    history.push(`/product/${_id}`);
    gaTracking(GAProductActions.Entered, name);
  };
  return (
    <div
      className={`${styles.stock} ${styles.glow} ${stock <= 0 ? styles.noStock : ''}`}
      onClick={stock <= 0 ? handleNoStock : handleViewProduct}
      role="contentinfo"
    >
      <div className={styles.container}>
        <StaticImage src={image[0]} className={styles.image} />
        <div className={styles.textSection}>
          <div className={styles.lowerSection}>
            <h3 className={styles.title}>{name}</h3>
            {discount && (
            <p className={styles.discount}>
              $
              {price}
            </p>
            )}
            <h4 className={styles.price}>
              $
              {handleDiscountPercentage(discount, price)}
            </h4>
          </div>
          <p className={styles.text}>{description || t('noDescriptionAvailable')}</p>
          <div className={styles.lowerSection}>
            <span className={styles.review}>
              {quantity <= 0 ? t('noReview') : t('comment', { count: quantity })}
            </span>
            <div className={styles.star}>
              <p>{Math.round(total)}</p>
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
