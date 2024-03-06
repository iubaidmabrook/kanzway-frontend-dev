'use client';

import Skeleton from '@/app/components/base/BaseSkeleton';
import React from 'react';

export default function ShopFilterCategoriesBrandsLoading() {
  return [...Array(2)].map((_, i) => (
    <Skeleton
      key={`${i.toString()}`}
      height="52px"
      className=" mb-3"
    />
  ));
}
