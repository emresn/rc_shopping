import { BannerModel } from '@/model/BannerModel';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

interface Props {
  banners: BannerModel[];
}

export const Banner = ({ banners }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className='bg-gradient-to-r from-slate-300 m-auto relative to-slate-100 w-full z--10'>
        {banners.map((banner, idx) => (
          <div className={idx === activeTab ? '' : 'hidden'} key={idx}>
            <img className='h-80 mx-auto w-full' src={banner.path} />
            <div className='absolute bottom-32 right-32 text text-sm sm:text-xl md:text-xl lg:text-3xl xl:text-4xl'>
              <span className='bg-white p-2 rounded-2xl'>{banner.text}</span>
            </div>
          </div>
        ))}

        {buildArrow({ isLeft: true })}
        {buildArrow({ isRight: true })}
        {buildDots()}
      </div>
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
          if (isRight) {
            activeTab < banners.length - 1
              ? setActiveTab(activeTab + 1)
              : setActiveTab(0);
          } else {
            activeTab > 0
              ? setActiveTab(activeTab - 1)
              : setActiveTab(banners.length - 1);
          }
        }}
      >
        <span className='bg-gray-200 px-3 py-1 rounded-3xl text-xl'>
          <FontAwesomeIcon icon={isRight ? faChevronRight : faChevronLeft} />
        </span>
      </div>
    );
  }

  function buildDots() {
    return (
      <div className='absolute bottom-0 flex-row gap-1 inline-flex inset-x-0 items-center justify-center p-3'>
        {Array.from(banners.keys()).map((idx) => (
          <span
            key={idx}
            className={`p-3 rounded-full  ${
              activeTab == idx ? ' bg-dark' : 'bg-gray-300'
            }`}
            onClick={() => {
              setActiveTab(idx);
            }}
          ></span>
        ))}
      </div>
    );
  }
};
