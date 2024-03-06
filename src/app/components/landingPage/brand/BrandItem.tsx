'use client';

import useWindowDimensions from '@/hooks/useWIndowDimention';
import { TBrand } from '@/types/brand.type';
import { TImage } from '@/types/common.type';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type TBrandItemProps = {
  brand: TBrand;
};

export default function BrandItem({ brand }: TBrandItemProps) {
  // Hooks
  const { width } = useWindowDimensions();
  const [image] = useState<TImage>(brand.bwImage);
  return (
    <Link
      className={clsx('brand-item', { 'no-hover': width < 991 })}
      // onMouseEnter={() => (width < 991 ? null : setImage(brand.bwImage))}
      // onMouseLeave={() => setTimeout(() => setImage(brand.bwImage), 100)}
      style={{ position: 'relative' }}
      href={{
        pathname: `/shop`,
        query: {
          brands: brand.id,
        },
      }}
    >
      <div style={{ position: 'relative' }}>
        <Image
          src={image.url}
          className="image-brand img-fluid img-home-brand"
          quality={30}
          alt={brand.name.en}
          height={100}
          width={100}
          priority
          key={brand.id}
        />
      </div>
    </Link>
  );
}
