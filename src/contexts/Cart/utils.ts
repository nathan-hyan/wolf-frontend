import { Product } from 'interface/Products';
import { Info } from 'interface/Purchase';
import { CartItem } from 'screens/Cart/constants';

export const removeProduct = (productList: CartItem[], productToDelete: string) => {
  const response = productList.filter(({ id }) => id !== productToDelete);

  return response;
};

export const checkStock = (productList: CartItem[]) => {
  if (productList.length) {
    const checkProductsForStock = productList.map((item) => item.stock <= 0);
    const isThereStock = checkProductsForStock.find((item) => item === true);
    return !isThereStock;
  }
  return false;
};

export const checkItemStock = (product: Product) => {
  if (product.stock <= 0) {
    return false;
  }
  return true;
};

export const buildProductOutput = (currentCart: CartItem[], product: Product, quantity: number) => {
  const alreadyExist = currentCart.find((item) => item.id === product._id)!;
  const index = currentCart.indexOf(alreadyExist!);

  if (index === -1) {
    return [
      ...currentCart,
      {
        id: product._id!,
        name: product.name!,
        price: product.price!,
        stock: product.stock!,
        quantity,
      },
    ];
  }

  if (alreadyExist.quantity >= alreadyExist.stock) {
    throw new Error('No hay mas stock del producto');
  } else {
    const newQuantity = alreadyExist.quantity + quantity;
    // eslint-disable-next-line no-param-reassign
    currentCart[index] = { ...alreadyExist, quantity: newQuantity };
  }
  return currentCart;
};

export const buildPurchaseOutput = (userInfo: Info, products: CartItem[]) => {
  const amount = products.reduce(
    (prevValue, currentItem) => prevValue + currentItem.price * currentItem.quantity,
    0,
  );
  return {
    products,
    userInfo,
    amount,
  };
};
