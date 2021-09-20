import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import CustomButton from 'components/CustomButton';
import paths from 'components/Routes/paths';

import styles from './styles.module.scss';

function Gratitude() {
  const { t } = useTranslation('Thanks');
  const history = useHistory();
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>{t('main')}</h1>
        <p>{t('textBody')}</p>

        <CustomButton
          className={styles.button}
          label={t('button')}
          onClick={() => history.push(paths.store)}
        />
      </div>
    </div>
  );
}

export default Gratitude;
