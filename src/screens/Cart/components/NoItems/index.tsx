import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';

import styles from './styles.module.scss';

function NoItems() {
  const { t } = useTranslation('NoItems');
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faTimesCircle} className={styles.icon} />
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.body}>{t('body')}</p>
    </div>
  );
}

export default NoItems;
