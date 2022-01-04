import { OrderModel } from '@/model/OrderModel';

import { exampleProduct, exampleProduct2 } from './Products';

export const orderData: OrderModel = {
  id: 'b121987f-f871-4ec7-94df-154b96bf58d2',
  orderNo: '1Z50F3424043761193',
  sender: {
    id: '3325',
    identityNo: '685-05-XXXX',
    name: 'Henry D. Gill',
    tel: '+1 252-224-5518',
    country: 'Pollocksville, USA',
    city: '',
    district: '',
    street: 'Joyce Street',
    apartment: '4932',
    zipCode: 'NC 28573',
  },
  receiver: {
    id: '23235',
    identityNo: '23523235',
    name: 'Jeffery D. Weatherspoon',
    tel: '+1 469-693-5437',
    country: 'Dallas, USA',
    city: '',
    district: '',
    street: 'Formula Lane',
    apartment: '62',
    zipCode: 'TX 75247',
  },
  createdAt: new Date(),
  updatedAt: undefined,
  products: [
    {
      count: 1,
      product: exampleProduct,
      id: '2353',
    },
    {
      count: 2,
      product: exampleProduct2,
      id: '24647',
    },
  ],
  isActive: true,
  isOnDelivery: true,
  isPreparing: false,
  isCompleted: false,
  track: {
    id: '1Z50F3424043761193',
    trackNo: '1Z50F3424043761193',
    carrier: 'UPS',
    href: 'https://rc-shopping.vercel.app/track-order',
    price: 15,
    isPaid: false,
  },
  vat: 18,
  totalPrice: 118,
  paymentMethod: 'visa',
  isPaid: false,
};
