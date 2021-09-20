import api from 'config/api';

import { AllProductsResponse, Purchase, SingleProductsResponse } from './constants';

const PRODUCTS_PATH = '/products';
const PURCHASE_PATH = '/sells';

export const getAllProducts = () => api.get<AllProductsResponse>(`${PRODUCTS_PATH}/get`);

export const getProduct = (productId: string) => api.get<SingleProductsResponse>(`${PRODUCTS_PATH}/getSingle/${productId}`);

export const rateProduct = (id: string, rating: number) => api.put(`${PRODUCTS_PATH}/rate/${id}`, { rating });
export const commentProduct = (id: string, comment: string) => api.put(`${PRODUCTS_PATH}/comment/add/${id}`, { comment });

export const makePurchase = (info: Purchase) => api.post(`${PURCHASE_PATH}/create`, info);
