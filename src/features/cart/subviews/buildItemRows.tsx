import React from 'react';

import { ProductCountModel } from '@/model/ProductCountModel';

import BuildCountButtonsCell from './buildCountButtonsCell';
import BuildImageCell from './buildImageCell';
import { buildPlainLink } from './buildPlainLink';
import BuildTotalPriceCell from './buildTotalPriceCell';

interface Props {
  idx: number;
  item: ProductCountModel;
  rowClass: string;
}

const BuildItemRows = ({ idx, item, rowClass }: Props) => {
  return (
    <div
      key={idx}
      className={`${rowClass} font-medium group text-md hover:bg-gray-200 text-sm sm:text-md lg:text-lg h-40`}
    >
      <div className='w-2/12 h-full'>
        <BuildImageCell item={item} />
      </div>
      <div className='w-2/12'>
        {buildPlainLink(item, item.product.title, true)}
      </div>
      <div className='hidden w-3/12 text-center sm:block'>
        {buildPlainLink(item, item.product.subtitle ?? '')}
      </div>
      <div className='inline-flex flex-col gap-4 justify-center items-center w-3/12 sm:flex-row'>
        <BuildCountButtonsCell item={item} idx={idx} />
      </div>
      <div className='w-1/12 text-center whitespace-nowrap'>
        {item.product.discountPrice
          ? `${Math.floor(item.product.discountPrice)} $`
          : `${Math.floor(item.product.price)} $`}
      </div>
      <div className='flex flex-col gap-2 justify-end w-1/12 text-center sm:flex-row'>
        <BuildTotalPriceCell item={item} />
      </div>
    </div>
  );
};

export default BuildItemRows;
