import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { BannerModel } from '@/model/BannerModel';

import NextImage from './NextImage';

interface Props {
  banners: BannerModel[];
}

export const Banner = ({ banners }: Props) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <>
      <div className='from-slate-300 to-slate-100 z--10 relative m-auto w-full bg-gradient-to-r'>
        {banners.map((banner, idx) => (
          <BuildBannerImage
            idx={idx}
            key={idx}
            isVisible={activeTab === idx ? true : false}
            banner={banner}
          />
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
        className={`absolute inline-flex inset-y-0 items-center cursor-pointer ${
          isRight ? 'right-0' : 'left-0'
        } p-3 z-10`}
        onClick={() => {
          if (isRight) {
            activeTab < banners.length - 1
              ? setActiveTab(activeTab + 1)
              : setActiveTab(0);
          } else if (isLeft) {
            activeTab > 0
              ? setActiveTab(activeTab - 1)
              : setActiveTab(banners.length - 1);
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

  function buildDots() {
    return (
      <div className='inline-flex absolute inset-x-0 bottom-0 flex-row flex-shrink-0 gap-1 justify-center items-center p-3 cursor-pointer'>
        {Array.from(banners.keys()).map((idx) => (
          <span
            key={idx}
            className={`p-1 lg:p-3 rounded-full  ${
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

interface BannerImageProps {
  idx: number;
  banner: BannerModel;
  isVisible: boolean;
}

const BuildBannerImage = ({ idx, isVisible, banner }: BannerImageProps) => {
  return (
    <motion.div
      animate={{
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.7 }}
      key={idx}
    >
      <div className={isVisible ? '' : 'hidden'} key={idx}>
        <NextImage
          useSkeleton
          priority
          alt={banner.alt}
          width='100%'
          height='20'
          src={banner.href}
        />
        <div className='text absolute right-32 bottom-32 invisible text-sm sm:text-xl md:text-xl lg:visible lg:text-3xl xl:text-4xl'>
          <span className='p-2 bg-white rounded-2xl'>{banner.text}</span>
        </div>
      </div>
    </motion.div>
  );
};
