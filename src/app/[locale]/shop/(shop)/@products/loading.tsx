'use client';

import Skeleton from '@/app/components/base/BaseSkeleton';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function ShopProductsLoading() {
  const searchParams = useSearchParams();
  const size =
    typeof searchParams.get('size') === 'string'
      ? Number(searchParams.get('size'))
      : 18;

  return (
    <div className="col-xl-9 col-lg-8">
      <div className="row justify-content-between mb-4">
        <div className="col-lg-4">
          <Skeleton height="40px" />
        </div>
        <div className="col-lg-2">
          <Skeleton height="40px" />
        </div>
      </div>

      <div className=" row g-4">
        {Array.from({ length: size }).map((_, i) => (
          <div
            className=" col-lg-4"
            key={`${i.toString()}`}
          >
            <Skeleton height="456px" />
          </div>
        ))}
      </div>

      <div className=" mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <Skeleton height="40px" />
          </div>
        </div>
      </div>
    </div>
  );
}
