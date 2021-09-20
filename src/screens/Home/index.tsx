import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import CustomButton from 'components/CustomButton';
import paths from 'components/Routes/paths';
import StaticImage from 'components/StaticImage';

import styles from './styles.module.scss';
import { IMAGE_GALLERY } from './constants';

function Home() {
  const history = useHistory();
  const { t } = useTranslation('Home');

  return (
    <div className={styles.container}>
      <div>
        <div className={styles.text}>
          <h1>{t('main')}</h1>
          <p>{t('textBody')}</p>
        </div>
        <CustomButton
          className={styles.button}
          label={t('button')}
          onClick={() => history.push(paths.store)}
        />
      </div>
      <div className={styles.image}>
        {IMAGE_GALLERY.map((image) => (
          <StaticImage src={image.image} key={image.id} className={styles.singleImage} rounded />
        ))}
      </div>
    </div>
  );
}

export default Home;
