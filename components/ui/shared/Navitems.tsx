'use client';

import { headerLinks } from '@/constants/index';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navitems = () => {
  const pathname = usePathname();
  return (
    <ul className='md:flex-between flex w-full flex-col items-start gap-5 md:flex-row'>
      {headerLinks.map((link) => { 
        const isActive = pathname === link.route;
        return(
          <li  key={link.route}  className={`${
            isActive  && 'text-primary-500'
          } flex-center p-medium-16 whitespace-nowrap`}> 
            <NextLink href={link.route}>{link.label}</NextLink>
          </li>
        )
      })}

    </ul>
  )
}

export default Navitems;