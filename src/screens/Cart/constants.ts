export interface CartItem {
  id: string;
  name: string;
  price: number;
  stock: number;
  quantity: number;
}

export const INPUTS = [
  {
    id: 0,
    type: 'text',
    name: 'name',
    placeholder: 'John Doe',
  },
  {
    id: 1,
    type: 'tel',
    name: 'whatsApp',
    placeholder: '54116241579',
  },
];
