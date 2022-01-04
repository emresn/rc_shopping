import React from 'react';

import { OrderModel } from '@/model/OrderModel';
import { PersonModel } from '@/model/PersonModel';

interface Props {
  order: OrderModel;
}

const OrderView = ({ order }: Props) => {
  function generateAddress(person: PersonModel) {
    return `${person.street} ${person.apartment} ${person.district} ${person.city}, ${person.zipCode} ${person.country}`;
  }

  return (
    <div
      className={`flex flex-row flex-wrap justify-between border-2  bg-gray-100 hover:bg-gray-300 border-gray-200 rounded-lg cursor-pointer my-3`}
    >
      {buildColumn('Order No', order.orderNo)}
      {buildColumn('Address', generateAddress(order.receiver))}
      {buildColumn('Products', '', order)}
      {buildColumn('Price', `${order.totalPrice}$`)}
      {buildColumn('Status', `${order.totalPrice}$`, order)}
    </div>
  );
};

export default OrderView;

function buildColumn(title: string, value: string, order?: OrderModel) {
  return (
    <div className='flex flex-col p-2'>
      <span className='text-xs font-bold'>{title}</span>

      {title === 'Products' && order ? (
        <>
          {order.products.map((p) => (
            <div className='inline-flex flex-row gap-1 py-1' key={p.id}>
              <span className='px-2 py-1 text-xs font-bold text-white bg-indigo-600 rounded-full'>
                {p.count}
              </span>
              <span className='ml-1'>{p.product.title}</span>
            </div>
          ))}
        </>
      ) : title === 'Status' && order ? (
        <span className='font-medium'>
          {order.isCompleted
            ? 'Completed'
            : order.isOnDelivery
            ? 'On Delivery'
            : order.isPreparing
            ? 'Preparing'
            : order.isActive
            ? 'Validating'
            : 'Deactive'}
        </span>
      ) : (
        <span className='font-medium'>{value}</span>
      )}
    </div>
  );
}
