import i18next from 'i18next';

const PLEASE_RETRY_SPANISH = 'Por favor, reintente.';
const PLEASE_RETRY_ENGLISH = 'Please, retry.';

i18next.addResources('es', 'CartContext', {
  noStock: 'Existe un artículo sin stock. Por favor, verifique su compra.',
  success: '¡Compra realizada con exito!',
  error: `Ocurrió un error realizando la compra. ${PLEASE_RETRY_SPANISH}`,
  makingPurchase: 'Realizando la compra, un momento',
  cantAddToCart: `No se pudo agregar el item al carrito. ${PLEASE_RETRY_SPANISH}`,
});

i18next.addResources('en', 'CartContext', {
  noStock: 'Theres an item without stock left. Please verify your purchase.',
  success: 'Purchase successful!',
  error: `There was an error making the purchase. ${PLEASE_RETRY_ENGLISH}`,
  makingPurchase: 'Completing order. Please wait',
  cantAddToCart: `There was an error adding the product to the cart. ${PLEASE_RETRY_ENGLISH}`,
});
