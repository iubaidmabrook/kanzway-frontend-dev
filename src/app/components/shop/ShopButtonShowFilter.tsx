'use client';

import usePopupFilterStore from '@/store/popup-filter.store';
import React from 'react';

export default function ShopButtonShowFilter() {
  const onOpen = usePopupFilterStore((state) => state.onOpen);
  return (
    <button
      className="btn btn-filtered btn-nohover mb-3"
      type="button"
      onClick={onOpen}
    >
      <img
        src="/img/Icon/filter-ico.svg"
        className="img-fluid"
      />
      Filter
    </button>
  );
}
