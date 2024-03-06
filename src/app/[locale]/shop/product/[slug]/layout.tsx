// React
import React from 'react';

// Next
import { Metadata } from 'next';

// Api
import { getProductBySlug } from '@/api/product.api';

// Types
import { TDefaultParams } from '@/types/common.type';

// Utils
import { getLang } from '@/utils/locale.util';

// Components
import ModalCompare from '@/app/components/modal/ModalCompare';

export async function generateMetadata({
  params,
}: {
  params: TDefaultParams & { slug: string };
}): Promise<Metadata> {
  const product = await getProductBySlug(params.slug);
  return {
    title: `Kanzway - ${getLang(params, product.name)}`,
    description: product.metaDescription,
    keywords: product.metaKeyword,
  };
}

export default async function ProductSlugLayout({
  children,
  related,
}: Readonly<{
  children: React.ReactNode;
  related: React.ReactNode;
}>) {
  return (
    <div>
      {children}
      {related}
      <ModalCompare />
    </div>
  );
}
