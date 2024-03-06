'use client';

import { useCurrentLocale, useI18n } from '@/locales/client';
import { ReactNode, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TExchangeList } from '@/types/order.type';
import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

async function Exchange() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const [activeFilter, setActiveFilter] = useState('all');

  const TAB_ITEMS = [
    {
      key: 'all',
      value: t('profile.allExchange'),
    },
    {
      key: 'waiting_confirmation',
      value: t('profile.waitingConfirmation'),
    },
    {
      key: 'approve',
      value: t('profile.approve'),
    },
    {
      key: 'on_delivery',
      value: t('profile.onDelivery'),
    },
    {
      key: 'completed',
      value: t('profile.completed'),
    },
    {
      key: 'reject',
      value: t('profile.rejected'),
    },
    {
      key: 'cancel',
      value: t('profile.cancel'),
    },
  ];

  const FAKE_EXCHANGE: TExchangeList[] = [
    {
      id: 1,
      exchangeNumber: 'TRX001',
      date: '2024-02-21 09:10',
      status: 'Waiting Confirmation',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 1',
            id: 'Jobber Drill Diameter 0.413 inch 1',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 2',
            id: 'Jobber Drill Diameter 0.413 inch 2',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
    {
      id: 2,
      exchangeNumber: 'TRX002',
      date: '2024-02-21 09:10',
      status: 'Approve',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 3',
            id: 'Jobber Drill Diameter 0.413 inch 3',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 4',
            id: 'Jobber Drill Diameter 0.413 inch 4',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
    {
      id: 3,
      exchangeNumber: 'TRX003',
      date: '2024-02-21 09:10',
      status: 'On Delivery',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 5',
            id: 'Jobber Drill Diameter 0.413 inch 5',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 6',
            id: 'Jobber Drill Diameter 0.413 inch 6',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
    {
      id: 4,
      exchangeNumber: 'TRX004',
      date: '2024-02-21 09:10',
      status: 'Completed',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 7',
            id: 'Jobber Drill Diameter 0.413 inch 7',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 8',
            id: 'Jobber Drill Diameter 0.413 inch 8',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
    {
      id: 5,
      exchangeNumber: 'TRX005',
      date: '2024-02-21 09:10',
      status: 'Canceled',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 11',
            id: 'Jobber Drill Diameter 0.413 inch 11',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 11',
            id: 'Jobber Drill Diameter 0.413 inch 11',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
    {
      id: 6,
      exchangeNumber: 'TRX006',
      date: '2024-02-21 09:10',
      status: 'Rejected',
      items: [
        {
          id: 1,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 11',
            id: 'Jobber Drill Diameter 0.413 inch 11',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
        {
          id: 2,
          title: {
            en: 'Jobber Drill Diameter 0.413 inch 11',
            id: 'Jobber Drill Diameter 0.413 inch 11',
            ar: 'بدون اسم 1',
          },
          slug: 'dormer-a100z-a100-jobber-drill',
          code: 'P0123456',
          mpn: 'A100Z',
          gtin: {
            ean: '7320760029619',
            upc: '73207600296',
          },
          image: {
            id: '1',
            name: 'dormer-a100-primary-angle2.png',
            url: 'https://kanzway.com:3465/v1/images/download/dormer-a100-primary-angle2.png',
            width: 800,
            height: 600,
            type: 'image',
          },
          brand: {
            id: 1,
            name: {
              en: 'Dormer',
              id: 'Dormer',
              ar: 'دورمير',
            },
            image: {
              id: '1',
              name: 'dormer',
              url: 'https://kanzway.com:3465/v1//images/download/L14461.gif',
              width: 800,
              height: 600,
              type: 'image',
            },
          },
          price: 240,
          originalPrice: 280,
          maxPrice: 321,
          qty: 2,
          note: 'bubble wrap',
          subtotal: 480,
        },
      ],
    },
  ];

  const getStatus = (status: string) => {
    switch (status) {
      case 'Waiting Confirmation':
        return <div className="status on-placed mb-2">{status}</div>;
        break;
      case 'Approve':
        return <div className="status on-process mb-2">{status}</div>;
        break;
      case 'On Delivery':
        return <div className="status on-delivery mb-2">{status}</div>;
        break;
      case 'Completed':
        return <div className="status completed mb-2">{status}</div>;
        break;
      case 'Rejected':
        return <div className="status canceled mb-2">{status}</div>;
        break;
      case 'Canceled':
        return <div className="status canceled mb-2">{status}</div>;
        break;

      default:
        return null;
        break;
    }
  };

  const orderList = () => {
    let returnList: ReactNode = '';
    let selectedList: TExchangeList[] = [];

    switch (activeFilter) {
      case 'all':
        selectedList = FAKE_EXCHANGE;
        break;
      case 'waiting_confirmation':
        selectedList = FAKE_EXCHANGE.filter(
          (o) => o.status === 'Waiting Confirmation',
        );
        break;
      case 'approve':
        selectedList = FAKE_EXCHANGE.filter((o) => o.status === 'Approve');
        break;
      case 'on_delivery':
        selectedList = FAKE_EXCHANGE.filter((o) => o.status === 'On Delivery');
        break;
      case 'completed':
        selectedList = FAKE_EXCHANGE.filter((o) => o.status === 'Completed');
        break;
      case 'reject':
        selectedList = FAKE_EXCHANGE.filter((o) => o.status === 'Rejected');
        break;
      case 'cancel':
        selectedList = FAKE_EXCHANGE.filter((o) => o.status === 'Canceled');
        break;

      default:
        break;
    }

    if (selectedList.length === 0) {
      returnList = (
        <div className="empty-wrapper">
          <div className="box-ew p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className=" Mulish text-bold color-dark">
                {t('profile.noOrder')}
              </div>
            </div>
            <hr className="my-3" />
            <div className="text-xs mb-4">{t('profile.noOrderSub')}</div>
            <div className="row g-3">
              <div className="col-sm-12">
                <a
                  //   href="#"
                  className="btn btn-secondary w-100"
                >
                  {t('common.searchProduct')}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      returnList = selectedList.map((items) => (
        <div className="box-border-2 p-3 rounded-2 bg-white mb-3">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <div className="img-order">
              <Image
                src={items.items[0].image.url}
                height={items.items[0].image.height}
                width={items.items[0].image.width}
                className="img-fluid image-order-item"
                alt=""
              />
            </div>
            <div className="col">
              <div className="d-flex justify-content-between">
                <div className="s-order">
                  {getStatus(items.status)}
                  <div className="text-dark text-medium text-xxs">
                    {items.items[0].title[currentLocale]}
                  </div>
                </div>
                <div className="col-sm-auto col-6">
                  <ul className="info-order justify-content-end">
                    <li className="text-xxxs color-default">
                      {items.exchangeNumber}
                    </li>
                    <li className="text-xxxs color-default">
                      {format(new Date(items.date), 'dd MMM yyyy')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="d-flex align-items-center justify-content-between">
            <div className="s-order">
              <ul className="info-order ">
                <li className="text-xxs color-gray-60">{`${items.items[0].qty} Product x ${t('common.sar')} ${items.items[0].price}`}</li>
                <li className="text-xxs color-gray-60">{`${items.items.length > 1 ? `+${items.items.length.valueOf() - 1}` : '+1'} Other Product`}</li>
              </ul>
            </div>
            <div className="col-sm-auto col-7 ">
              <div className="d-flex align-items-center justify-content-end gap-2">
                <Link
                  href={`profile/exchange/${items.id}`}
                  className="btn btn-secondary py-2 btn-sm text-xxs"
                >
                  {t('common.showDetail')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ));
    }

    return returnList;
  };

  return (
    <div className="col-xl-9 col-sm-8">
      <div className="big-search mb-3">
        <span className="ico-search-r ps-3 pe-2">
          <span className="icon-ico-search"></span>
        </span>
        <input
          type="text"
          className="form-control border-0"
          name=""
          placeholder={t('common.searchProduct')}
          id=""
        />
        <div className="col-lg">
          <button
            className="btn btn-red px-4"
            type="button"
          >
            {t('common.search')}
          </button>
        </div>
      </div>
      <Swiper
        loop={false}
        slidesPerView="auto"
        className="tabs"
        wrapperClass="swiper-wrapper nav-tabs border-0 order-tab"
      >
        {TAB_ITEMS.map((items) => (
          <SwiperSlide
            className="swiper-slide add-margin"
            key={Math.random()}
          >
            <button
              className={`${activeFilter === items.key ? 'active' : ''} nav-link`}
              id="order-1-tab"
              data-bs-toggle="tab"
              data-bs-target="#order-1"
              type="button"
              role="tab"
              aria-controls="order-1"
              aria-selected="true"
              onClick={() => setActiveFilter(items.key)}
            >
              {items.value}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="tab-content mt-4"
        id="nav-tabContent"
      >
        <div
          className="tab-pane fade show active"
          id="order-1"
          role="tabpanel"
          aria-labelledby="order-1-tab"
          tabIndex={0}
        >
          {orderList()}
        </div>
      </div>
    </div>
  );
}

export default Exchange;
