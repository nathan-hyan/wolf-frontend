import i18next from 'config/i18n';
import cuero1 from 'assets/cuero1.webp';
import cuero2 from 'assets/cuero2.webp';
import cuero3 from 'assets/cuero3.webp';

export const IMAGE_GALLERY = [
  {
    id: 0,
    alt: i18next.t('Home:imageA'),
    image: cuero1,
  },
  {
    id: 1,
    alt: i18next.t('Home:imageB'),
    image: cuero2,
  },
  {
    id: 2,
    alt: i18next.t('Home:imageC'),
    image: cuero3,
  },
];
