'use client';

import useModalCompareStore from '@/store/modal-compare.store';
import { useEffect, useState } from 'react';

export default function useCompareScrollPosition() {
  const { isOpen } = useModalCompareStore();

  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const modalCompare = document.querySelector('#modal-compare');
    const updateScroll = () => {
      if (modalCompare) {
        setScrollPosition(modalCompare.scrollTop);
      }
    };

    updateScroll();

    if (modalCompare) {
      modalCompare.addEventListener('scroll', updateScroll);
    }

    return () => {
      if (modalCompare) {
        modalCompare.addEventListener('scroll', updateScroll);
      }
    };
  }, [isOpen]);

  return scrollPosition;
}
