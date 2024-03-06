import { ShopFilterAttribute } from '@/app/components/shop';
import { TAttribute } from '@/types/attribute.type';
import React from 'react';

export default function ShopFilterAttributesParallel() {
  const attributes: TAttribute[] = [
    {
      id: 1,
      brand: 1,
      category: 1,
      name: {
        en: 'Diameter',
        id: 'Diameter',
        ar: 'قطر الدائرة',
      },
      options: [
        {
          value: '0 - 25',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '26 - 50',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '51 - 75',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '76 - 100',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
      ],
    },
    {
      id: 1,
      brand: 1,
      category: 1,
      name: {
        en: 'Length',
        id: 'Length',
        ar: 'طول',
      },
      options: [
        {
          value: '0 - 25',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '26 - 50',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '51 - 75',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
        {
          value: '76 - 100',
          unit: {
            en: 'mm',
            id: 'mm',
            ar: 'مم',
          },
        },
      ],
    },
  ];
  return <ShopFilterAttribute attributes={attributes} />;
}
