/* eslint-disable no-unused-vars */
import {
  createContext, ReactNode, useState, useContext,
} from 'react';
import { notify } from 'react-notify-toast';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';

import { Product } from 'interface/Products';
import { CartItem } from 'screens/Cart/constants';
import { Info } from 'interface/Purchase';
import { makePurchase } from 'services/ProductService';
import LoadingSpinner from 'components/LoadingSpinner';
import { ProductsContext } from 'contexts/Product';

import {
  buildProductOutput, buildPurchaseOutput, checkItemStock, checkStock, removeProduct,
} from './utils';

interface ContextProps {
  productList: CartItem[];
  addProductToCart: (product: Product, quantity: number) => void;
  removeProductFromCart: (productId: string) => void;
  showModal: boolean;
  removeModal: () => void;
  checkout: (info: Info) => void;
}

export const CartContext = createContext<ContextProps>({
  productList: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
  showModal: false,
  removeModal: () => {},
  checkout: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [loadingText, setLoadingText] = useState('');
  const [productList, setProductList] = useState<CartItem[]>([]);
  const [showModal, removeModal] = useState(false);
  const history = useHistory();
  const { gatherProducts } = useContext(ProductsContext);
  const { t } = useTranslation('CartContext');

  const addProductToCart = (product: Product, quantity: number) => {
    if (checkItemStock(product)) {
      try {
        setProductList(buildProductOutput(productList, product, quantity));
        removeModal(true);
      } catch (err) {
        removeModal(false);
        notify.show(t('cantAddToCart'), 'warning');
      }
    } else {
      removeModal(false);
      notify.show(t('noStock'), 'warning');
    }
  };

  const removeProductFromCart = (productId: string) => {
    const newProductList = removeProduct(productList, productId);
    setProductList(newProductList);
  };

  const checkout = (info: Info) => {
    setLoadingText(t('makingPurchase'));
    if (checkStock(productList)) {
      const purchase = buildPurchaseOutput(info, productList);
      makePurchase(purchase)
        .then((response) => {
          gatherProducts();
          if (response.ok) {
            notify.show(t('success'), 'success');
            setLoadingText('');
            setProductList([]);
            history.push('/thank-you');
          } else {
            setLoadingText('');
            notify.show(t('error'), 'error');
          }
        })
        .catch(() => {
          setLoadingText('');
          notify.show(t('error'), 'error');
        });
    } else {
      setLoadingText('');
      notify.show(t('noStock'), 'warning');
    }
  };

  const value = {
    productList,
    addProductToCart,
    removeProductFromCart,
    showModal,
    removeModal: () => removeModal(false),
    checkout,
  };

  return (
    <CartContext.Provider value={value}>
      {!!loadingText && <LoadingSpinner loadingText={loadingText} />}
      {children}
    </CartContext.Provider>
  );
}
