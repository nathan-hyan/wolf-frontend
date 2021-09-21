import { Product } from 'interface/Products';

export const sortProducts = (products: Product[], sortType: number) => {
  if (sortType !== 0) {
    return products.filter((item) => item.category === sortType);
  }
  return products;
};
