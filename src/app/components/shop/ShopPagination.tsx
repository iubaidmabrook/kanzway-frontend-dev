'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { BasePagination } from '../base';

interface TShopPaginationProps {
  totalPage: number;
}

export default function ShopPagination({ totalPage }: TShopPaginationProps) {
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const currentPage =
    typeof urlSearchParams.get('page') === 'string'
      ? Number(urlSearchParams.get('page'))
      : 1;

  // );
  return (
    <BasePagination
      currentPage={currentPage}
      // onPageChange={onPageChange}
      totalPage={totalPage}
    />
  );
}
