import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { companyRC } from '@/data/companyData';
import { moreMenuItems, productsMenuItems } from '@/data/menuItems';

import { LinkModel } from '@/model/LinkModel';
import { MenuItemModel } from '@/model/MenuItemModel';

import PrimaryLink from '../links/PrimaryLink';
import UnderlineLink from '../links/UnderlineLink';

export const Footer = () => {
  return (
    <footer className='text-dark mt-4 bg-gray-200'>
      <div className='inline-flex justify-center w-full'>
        <div className='inline-flex flex-wrap gap-4 py-2 mx-auto w-full lg:w-4/5'>
          <BuildColumn title='Products' categories={productsMenuItems} />
          <BuildColumn title='About Us' categories={moreMenuItems} />
          <BuildSocialMediaLinks />
          <BuildCompanyInfo />
        </div>
      </div>
      <div className='text-dark inline-flex justify-center p-2 w-full bg-gray-300'>
        <span className='px-1'>{`© ${new Date().getFullYear()} by `}</span>
        <UnderlineLink href={companyRC.web}>{companyRC.title}</UnderlineLink>
      </div>
    </footer>
  );
};

interface ColumnProps {
  title: string;
  categories: MenuItemModel[];
}

const BuildColumn = ({ title, categories }: ColumnProps) => {
  return (
    <div className='inline-flex flex-col gap-2 mx-auto my-2'>
      <h4>{title}</h4>
      {categories.map((e, idx) => (
        <div
          key={idx}
          className={`flex-row gap-2 inline-flex items-center justify-center w-full`}
        >
          <div className='inline-flex justify-center w-8'>
            <span className='text-2xl'>
              {e.icon && <FontAwesomeIcon icon={e.icon} />}
            </span>
          </div>

          <PrimaryLink href={e.href} className='flex-auto text-black'>
            <span>{e.title}</span>
          </PrimaryLink>
        </div>
      ))}
    </div>
  );
};

const BuildSocialMediaLinks = () => {
  return (
    <div className='inline-flex flex-col mx-auto my-2 font-medium'>
      <h4>Social Media</h4>
      <div className='inline-flex flex-col'>
        {companyRC.socialMediaLinks.map((e, idx) => (
          <div key={idx}>{buildLink(e, idx)}</div>
        ))}

        <div className='flex-auto'></div>
      </div>
    </div>
  );

  function buildLink(e: string, idx: number): React.ReactNode {
    const link: LinkModel = {
      label: e.includes('github')
        ? 'Github'
        : e.includes('instagram')
        ? 'Instagram'
        : e.includes('linkedin')
        ? 'LinkedIn'
        : 'Web',
      alt: `link_${idx}`,
      path: e,
      icon: e.includes('github')
        ? faGithub
        : e.includes('instagram')
        ? faInstagram
        : e.includes('linkedin')
        ? faLinkedin
        : faGlobe,
      textColor: e.includes('github')
        ? 'text-black'
        : e.includes('instagram')
        ? 'text-pink-700'
        : e.includes('linkedin')
        ? 'text-blue-700'
        : 'text-indigo-700',
    };

    return (
      <div
        className={`flex-row gap-2 inline-flex items-center ${link.textColor}`}
      >
        <span className='text-3xl'>
          {link.icon && <FontAwesomeIcon icon={link.icon} />}
        </span>

        <PrimaryLink href={e} className={link.textColor}>
          <span>{link.label}</span>
        </PrimaryLink>
      </div>
    );
  }
};

const BuildCompanyInfo = () => {
  return (
    <div className='flex-col flex-wrap gap-2 my-2 ml-2 font-medium lg:ml-auto'>
      <h4>{companyRC.title}</h4>
      <div className='flex-col flex-wrap'>
        <span>{companyRC.address}</span>
      </div>
      <div className='inline-flex flex-col my-2'>
        <div className='inline-flex flex-row gap-2'>
          <span className='font-bold'>Tel: </span>
          <UnderlineLink href={`tel: ${companyRC.tel}`}>
            <span>{companyRC.tel}</span>
          </UnderlineLink>
        </div>
        <div className='inline-flex flex-row gap-2'>
          <span className='font-bold'>Fax: </span>
          <UnderlineLink href={`tel: ${companyRC.tel}`}>
            <span>{companyRC.fax}</span>
          </UnderlineLink>
        </div>

        <div className='inline-flex flex-row gap-2'>
          <span className='font-bold'>Email: </span>
          <UnderlineLink href={`mailto: ${companyRC.email}`}>
            <span>{companyRC.email}</span>
          </UnderlineLink>
        </div>
      </div>
    </div>
  );
};
