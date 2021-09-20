import { Key } from 'react';

const MAX_NUMBER = 10;
const PERCENTAGE = 100;

export function keyGenerator(): Key {
  return Math.floor(Math.random() * MAX_NUMBER) + 1;
}

export const calculatePercentage = (rate: number, total: number) => (
  Math.round((rate * PERCENTAGE) / total)
);

export const handleDiscountPercentage = (discount = 0, price: number) => {
  const PERCENT = 100;

  if (discount) {
    return (discount * price) / PERCENT;
  }
  return price;
};
