import i18next from 'config/i18n';
import { SortingType } from 'contexts/Product/constants';

export const SORT_TYPE = [
  {
    id: SortingType.All,
    name: i18next.t('Sort:All'),
  },
  {
    id: SortingType.Wallets,
    name: i18next.t('Sort:Wallets'),
  },
  {
    id: SortingType.Purses,
    name: i18next.t('Sort:Purses'),
  },
  {
    id: SortingType.Backpacks,
    name: i18next.t('Sort:Backpacks'),
  },
  {
    id: SortingType.Bags,
    name: i18next.t('Sort:Bags'),
  },
  {
    id: SortingType.Accesories,
    name: i18next.t('Sort:Accesories'),
  },
];
