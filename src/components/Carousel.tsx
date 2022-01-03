import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import { ProductModel } from '@/model/ProductModel';

import NextImage from './NextImage';

interface Props {
  item: ProductModel;
  className: string;
}

export const Carousel = ({ item, className }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const isHaveImage =
    item.images !== null && item.images !== undefined && item.images.length > 0
      ? true
      : false;
  const isHaveMultiImages =
    item.images !== null && item.images !== undefined && item.images.length > 1
      ? true
      : false;

  return (
    <>
      {isHaveImage ? (
        <div className={className}>
          <div className='relative'>
            {item.images !== undefined &&
              item.images.map((e, idx) => (
                <div className={idx === activeTab ? '' : 'hidden'} key={idx}>
                  <NextImage
                    priority
                    className='w-full'
                    src={e.path}
                    alt={e.id}
                    width='100'
                    height='100'
                  />
                </div>
              ))}

            {isHaveMultiImages && buildArrow({ isLeft: true })}
            {isHaveMultiImages && buildArrow({ isRight: true })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );

  interface arrowProps {
    isRight?: boolean;
    isLeft?: boolean;
  }

  function buildArrow({ isRight = false, isLeft = false }: arrowProps) {
    return (
      <div
        className={`absolute inline-flex inset-y-0 items-center ${
          isRight ? 'right-0' : 'left-0'
        } p-3 z-10`}
        onClick={() => {
          if (isRight && item.images) {
            activeTab < item.images.length - 1
              ? setActiveTab(activeTab + 1)
              : setActiveTab(0);
          } else if (isLeft && item.images) {
            activeTab > 0
              ? setActiveTab(activeTab - 1)
              : setActiveTab(item.images.length - 1);
          } else {
            setActiveTab(0);
          }
        }}
      >
        <span className='px-3 py-1 text-xl bg-gray-200 rounded-3xl'>
          <FontAwesomeIcon icon={isRight ? faChevronRight : faChevronLeft} />
        </span>
      </div>
    );
  }
};
