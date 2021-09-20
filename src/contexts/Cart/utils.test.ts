import { Item } from 'screens/Cart/constants';

import { checkItemStock, checkStock, removeProduct } from './utils';

const MOCK_ITEMS: Item[] = [
  {
    id: '0',
    name: 'Item 1',
    price: 399,
    stock: 1
  },
  {
    id: '1',
    name: 'Item 2',
    price: 288,
    stock: 1
  },
  {
    id: '2',
    name: 'Item 3',
    price: 177,
    stock: 1
  },
  {
    id: '3',
    name: 'Item 3',
    price: 66,
    stock: 1
  },
  {
    id: '4',
    name: 'Item 4',
    price: 55,
    stock: 1
  }
];

describe('Remove items from cart', () => {
  test('Removes an item from the cart successfully', () => {
    const ID = '0';
    const products = removeProduct(MOCK_ITEMS, ID);

    expect(products).toStrictEqual([
      {
        id: '1',
        name: 'Item 2',
        price: 288,
        stock: 1
      },
      {
        id: '2',
        name: 'Item 3',
        price: 177,
        stock: 1
      },
      {
        id: '3',
        name: 'Item 3',
        price: 66,
        stock: 1
      },
      {
        id: '4',
        name: 'Item 4',
        price: 55,
        stock: 1
      }
    ]);
  });

  test("Doesn't break when an id doesn't exist", () => {
    const products = removeProduct(MOCK_ITEMS, '');
    expect(products).toStrictEqual(MOCK_ITEMS);
  });

  test("Doesn't break when the id isn't present", () => {
    const products = removeProduct(MOCK_ITEMS, '999');
    expect(products).toStrictEqual(MOCK_ITEMS);
  });
});

describe('Check for stock', () => {
  test('If there is stock available, return true', () => {
    expect(checkStock(MOCK_ITEMS)).toBeTruthy();
  });

  test('If a product is unavailable, return false', () => {
    const testMock = [
      ...MOCK_ITEMS,
      {
        id: '4',
        name: 'Item 4',
        price: 55,
        stock: 0
      }
    ];

    expect(checkStock(testMock)).toBeFalsy();
  });
  test("If some product doesn't have a valid stock, doesn't break", () => {
    const testMock = [
      ...MOCK_ITEMS,
      {
        id: '4',
        name: 'Item 4',
        price: 55,
        stock: -50
      }
    ];

    expect(checkStock(testMock)).toBeFalsy();
  });
  test('If the list is empty, it does not break', () => {
    expect(checkStock([])).toBeFalsy();
  });
});

describe('Check for stock on a single item', () => {
  const singleItem = {
    id: '4',
    name: 'Item 4',
    price: 55,
    stock: 5
  };

  const singleItemWithoutStock = {
    id: '4',
    name: 'Item 4',
    price: 55,
    stock: 0
  };

  const singleItemWithInvalidStock = {
    id: '4',
    name: 'Item 4',
    price: 55,
    stock: -50
  };

  test('If there is stock available, return true', () => {
    expect(checkItemStock(singleItemWithoutStock)).toBeFalsy();
    expect(checkItemStock(singleItem)).toBeTruthy();
  });
  test('If there isnt stock available, return false', () => {
    expect(checkItemStock(singleItemWithoutStock)).toBeFalsy();
    expect(checkItemStock(singleItem)).toBeTruthy();
  });
  test('If there is an invalid stock, return false', () => {
    expect(checkItemStock(singleItemWithInvalidStock)).toBeFalsy();
  });
});
