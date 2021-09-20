import { Product } from 'interface/Products';
import { Info } from 'interface/Purchase';
import { CartItem } from 'screens/Cart/constants';

export interface APIResponse {
  success: boolean;
  message: string;
}

export interface AllProductsResponse {
  success: boolean;
  response: Product[];
}
export interface SingleProductsResponse {
  success: boolean;
  response: Product;
}

export interface Purchase {
  products: CartItem[];
  userInfo: Info;
  amount: number;
}
