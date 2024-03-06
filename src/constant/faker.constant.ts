import { TBlog } from '@/types/blog.type';
import { TCategory } from '@/types/category-old.type';
import {
  TOverviewProduct,
  TProduct,
  TProductOtherOption,
} from '@/types/product-old.type';

export const FAKE_PRODUCT: TProduct = {
  id: '67d316d9-b989-4c96-a725-cfe1c9a61948',
  slug: 'subland-drill-90',
  name: 'Subland Drill 90°',
  subName: 'Portescap S.A',
  code: 'A4800M8',
  sku: 'KANZ-0123',
  eanCode: '978020137962',
  description:
    'Subland drill with 90° included step angle, straight shank and a drilling-pilot diameter of 8.40mm with a length of 19.00mm, a large diameter of 15.00mm and an overall length of 169mm, according to DIN 8374 standard to produce a close fit through hole and conical seat for M8 countersunk-head screws, HSS and steam tempered finish for machining free machining, plain carbon and alloy steel and grey cast-iron',
  photos: ['/img/pd-1.jpg', '/img/pd-2.jpg', '/img/pd-3.jpg', '/img/pd-4.jpg'],
  features: [
    {
      icon: '/img/feature-1.jpg',
      feature: 'Steam Tempered (Steam Oxide) Surface Treatment',
    },
    {
      icon: '/img/feature-2.jpg',
      feature: 'DIN 8374 – Subland Drill Standards',
    },
    {
      icon: '/img/feature-3.jpg',
      feature: 'Step-drill (for fasteners) 90° Counterbore',
    },
    {
      icon: '/img/feature-4.jpg',
      feature: 'Standard Spiral Flute Design',
    },
    {
      icon: '/img/feature-5.jpg',
      feature: 'High Speed Steel Tool Material',
    },
    {
      icon: '/img/feature-6.jpg',
      feature: '4×D Usable Tool Depth to Diameter Ratio',
    },
    {
      icon: '/img/feature-7.jpg',
      feature: 'Cylindrical Shank / Straight Shank',
    },
    {
      icon: '/img/feature-8.jpg',
      feature: 'Right Hand Rotation / Cutting',
    },
  ],
  specifications: [
    {
      description: 'EAN number',
      value: '7320760034354',
    },
    {
      description: 'EDP number',
      value: '0034354',
    },
    {
      description: 'Product name ISO',
      value: 'A400M8',
    },
    {
      description: 'Ordering code ANSI',
      value: 'A400M8',
    },
    {
      description:
        'Step diameter length first cutting step - millimeters (SDL_1)',
      value: '19 mm',
    },
    {
      description: 'Connection diameter - millimeter (DCON MS)',
      value: '15 mm',
    },
    {
      description: 'Step included angle (STA)',
      value: '90',
    },
    {
      description: 'ANSI',
      value: 'Value',
    },
  ],
  cuttingConditions: [
    {
      title:
        'P - Steel and cast steel(steels with alloy content ≤ 10% and a hardness of < 45HRC)',
      conditions: [
        {
          name: 'P1.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P2.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P3.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P4.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P5.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P6.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
      ],
    },
    {
      title:
        'M - Stainless steel(corrosion resistant steels with ≥ 11% chromium content)',
      conditions: [
        {
          name: 'P1.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P2.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P3.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P4.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P5.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
        {
          name: 'P6.1 - Free machining sulfurized carbon steel with a hardness of < 240HB',
          sustainability: 'Primary Use',
          vc: 95,
          f: 0.00065,
        },
      ],
    },
  ],
  documents: [
    {
      name: 'Document1 A400MB',
      url: 'http://google.com',
    },
    {
      name: 'Document2 A400MB',
      url: 'http://google.com',
    },
    {
      name: 'Document3 A400MB',
      url: 'http://google.com',
    },
  ],
  priceOptions: [
    {
      previousName: 'SAR 280',
      name: 'SAR 240',
      stock: 20,
      qty: 0,
    },
    {
      name: 'SAR 250',
      stock: 20,
      qty: 0,
    },
    {
      name: 'SAR 260',
      stock: 3,
      qty: 0,
    },
  ],
  otherOptions: [
    {
      name: 'A500M8',
      code: '978020137962',
      photo: '/img/list-1.jpg',
    },
    {
      name: 'A540M8',
      code: '978020137962',
      photo: '/img/list-2.jpg',
    },
    {
      name: '220MB',
      code: '978020137962',
      photo: '/img/list-3.jpg',
    },
  ],
  variantName: 'SAR 240',
  previousVariantName: 'SAR 280',
  discount: 0,
};

export const FAKE_RELATED_PRODUCTS: TProduct[] = [
  { ...FAKE_PRODUCT, id: '289f64a2-d671-4dbb-8ca0-53832dcc3ae3', discount: 25 },
  {
    ...FAKE_PRODUCT,
    id: '289f64a2-d671-4dbb-8ca0-53832dcc3aex',
    discount: 10,
    previousVariantName: null,
  },
  {
    ...FAKE_PRODUCT,
    id: '73ce18bd-d32d-44b5-ba34-a4bf17a7e2e5',
    previousVariantName: null,
  },
  {
    ...FAKE_PRODUCT,
    id: '6c3861f8-83bb-4e23-bbb9-6f2bd82bf0cf',
    previousVariantName: null,
  },
];

const OTHER_OPTIONS: TProductOtherOption[] = [
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-3.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-1.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-2.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-4.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-1.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-2.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-3.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-4.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-1.jpg',
  },
  {
    name: 'A540M8',
    code: '978020137962',
    photo: '/img/list-2.jpg',
  },
];

const FAKE_OVERVIEW_PRODUCT: TOverviewProduct = {
  ...FAKE_PRODUCT,
  id: '1',
  name: 'Slotless Motor',
  slug: 'slotless-motor',
  discount: 25,
  code: '40ECP55 series',
  otherOptions: OTHER_OPTIONS,
  thumbnail: '/img/list-1.jpg',
};

export const FAKE_PRODUCTS: TOverviewProduct[] = [
  {
    ...FAKE_OVERVIEW_PRODUCT,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '2',
    name: 'AC Motor',
    slug: 'ac-motor',
    code: 'AT series',
    thumbnail: '/img/list-2.jpg',
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '3',
    name: 'Solid Drill Bit',
    slug: 'solid-drill-bit',
    code: 'AM3248',
    thumbnail: '/img/list-3.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '4',
    thumbnail: '/img/list-4.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '5',
    thumbnail: '/img/list-5.jpg',
    otherOptions: [],
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '6',
    thumbnail: '/img/list-2.jpg',
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '7',
    thumbnail: '/img/list-3.jpg',
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '8',
    thumbnail: '/img/list-1.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '9',
    thumbnail: '/img/list-2.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '10',
    thumbnail: '/img/list-5.jpg',
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '11',
    thumbnail: '/img/list-4.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '12',
    thumbnail: '/img/list-2.jpg',
    discount: 0,
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '13',
    thumbnail: '/img/list-1.jpg',
    otherOptions: [],
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '14',
    thumbnail: '/img/list-3.jpg',
  },
  {
    ...FAKE_OVERVIEW_PRODUCT,
    id: '15',
    thumbnail: '/img/list-5.jpg',
    discount: 0,
  },
];

export const FAKE_CATEGORY: TCategory = {
  id: 1,
  name: 'Detection - Measurement',
  childs: [
    {
      id: 1,
      name: 'Flow, Pressure, Level Meadow',
    },
    {
      id: 2,
      name: 'Temperature and Humidit coinf',
    },
    {
      id: 3,
      name: 'Position, Speed, and Acceleration',
    },
    {
      id: 4,
      name: 'Force Measurement',
    },
  ],
};

export const FAKE_CATEGORIES: TCategory[] = [
  {
    ...FAKE_CATEGORY,
  },
  {
    ...FAKE_CATEGORY,
    name: 'Metrology - Laboratory',
  },
  {
    ...FAKE_CATEGORY,
    name: 'Electricity - Electronics',
  },
  {
    ...FAKE_CATEGORY,
    name: 'Hydraulics - Pneumatics',
  },
];

export const DUMMY_BLOG: TBlog = {
  id: 1,
  title: {
    en: 'New Product Launch - 40ECP Slotless Motor',
    ar: 'New Product Launch - 40ECP Slotless Motor',
    id: 'New Product Launch - 40ECP Slotless Motor',
  },
  code: 'blog01',
  date: '10 November 2023',
  thumbnail: {
    id: 'blog01',
    url: '/img/blog-1.jpg',
    height: 1500,
    width: 1001,
    name: 'blog01',
    type: 'image',
  },
  slug: 'blog-01',
  description: {
    en: 'Cost-Optimized Motor Delivers Active Cooling with Unparalleled Torque and Speed. The 40ECP brushless slotless motor is the newest addition to our product',
    id: 'Cost-Optimized Motor Delivers Active Cooling with Unparalleled Torque and Speed. The 40ECP brushless slotless motor is the newest addition to our product',
    ar: 'Cost-Optimized Motor Delivers Active Cooling with Unparalleled Torque and Speed. The 40ECP brushless slotless motor is the newest addition to our product',
  },
};

export const DUMMY_BLOGS: TBlog[] = [];

for (let i = 0; i < 15; i += 1) {
  const coppied = { ...DUMMY_BLOG };
  DUMMY_BLOGS.push(coppied);
}
