/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import { Product } from 'interface/Products';

export const DEFAULT_PRODUCT: Product = {
  price: 0,
  stock: 0,
  category: '',
  _id: '',
  name: '',
  image: [''],
  comments: [{ _id: '', body: '', timestamp: '' }],
  description: '',
  discount: 0,
  rating: {
    oneStar: 0,
    twoStar: 0,
    threeStar: 0,
    fourStar: 0,
    fiveStar: 0,
    usersRating: 0,
    total: 0,
  },
  createdAt: '',
  updatedAt: '',
};

export enum SortingType {
  All,
  Wallets,
  Purses,
  Backpacks,
  Bags,
  Accesories
}
export const wallets = 'Wallets';
export const purses = 'Purses';
export const backpacks = 'Backpacks';
export const bags = 'Bags';
export const accesories = 'Accesories';
