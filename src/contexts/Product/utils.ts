import { Product } from 'interface/Products';

import { SortingType, backpacks, wallets, purses, bags, accesories } from './constants';

export const sortProducts = (products: Product[], sortType: number) => {
  switch (sortType) {
    case SortingType.Wallets:
      return products.filter((item) => item.category === wallets);
    case SortingType.Purses:
      return products.filter((item) => item.category === purses);
    case SortingType.Backpacks:
      return products.filter((item) => item.category === backpacks);
    case SortingType.Bags:
      return products.filter((item) => item.category === bags);
    case SortingType.Accesories:
      return products.filter((item) => item.category === accesories);
    case SortingType.All:
      return products;
    default:
      return products;
  }
};
