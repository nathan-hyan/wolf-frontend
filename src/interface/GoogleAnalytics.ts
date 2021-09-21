/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
export enum GoogleAnalyticsEvents {
  Store = 'Tienda',
  Product = 'Producto',
  Cart = 'Carrito',
}

export enum GACartActions {
  Bought = 'Compro',
  AddedProduct = 'Agregó un producto',
  RemovedItemFromCart = 'Sacó un item del carrito',
}

export enum GAStoreActions {
  Filtered = 'Filtró',
}

export enum GAProductActions {
  Entered = 'Visitó',
  Commented = 'Comentó',
  Rated = 'Puntuó',
}

export enum GAGlobalActions {
    Issue = 'Tuvo un problema'
}
