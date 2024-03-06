/* eslint-disable no-plusplus */

'use client';

import BaseProfileNav from '@/app/components/base/BaseProfileNav';
import { TDefaultParams } from '@/types/common.type';
import { useI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';
import useProfileNavStore from '@/store/profileNav.store';
import { useEffect } from 'react';
import { TExchangeDetail } from '@/types/order.type';
import {
  DetailExchangeStatus,
  ExchangeDetailStatus,
  ExchangeProduct,
  ExchangeReason,
} from '@/app/components/exchange';

export default function ExchangeDetailPage({
  params,
}: Readonly<{
  params: TDefaultParams & { id: string };
}>) {
  const t = useI18n();
  const router = useRouter();
  const { add: selectedTab } = useProfileNavStore();

  useEffect(() => {
    selectedTab('exchange');
  }, [selectedTab]);

  const getStatus = (id: string) => {
    switch (id) {
      case '1':
        return 'Waiting Confirmation';
        break;
      case '2':
        return 'Approve';
        break;
      case '3':
        return 'On Delivery';
        break;
      case '4':
        return 'Completed';
        break;
      case '5':
        return 'Canceled';
        break;
      case '6':
        return 'Rejected';
        break;
      default:
        return '';
        break;
    }
  };

  const FAKE_DETAIL_EXCHANGE: TExchangeDetail = {
    id: parseInt(params.id, 10),
    exchangeNumber: 'EX001',
    date: '2024-02-21 09:10',
    reason: 'package was broked',
    images: [
      'https://picsum.photos/300/300?random=1',
      'https://picsum.photos/300/300?random=2',
    ],
    status: getStatus(params.id),
    updated_at: '2024-02-25 10:10:10',
    items: [
      {
        id: 1,
        exchangeId: 1,
        orderItemId: 1,
        title: {
          en: 'Jobber Drill Diameter 0.413 inch',
          id: 'Jobber Drill Diameter 0.413 inch',
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
        qty: 2,
        price: 1000,
        note: '',
      },
      {
        id: 2,
        exchangeId: 1,
        orderItemId: 1,
        title: {
          en: 'Jobber Drill Diameter 0.413 inch',
          id: 'Jobber Drill Diameter 0.413 inch',
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
        price: 2400,
        qty: 2,
        note: 'bubble wrap',
      },
    ],
  };

  return (
    <>
      <style>
        {`
          body {
            background: #fafafa;
          }
        `}
      </style>
      <section className="main-inner">
        <div className="container">
          <div className="auth-wrapper">
            <div className="row g-4">
              <div className="col-xl-3 col-sm-4">
                <BaseProfileNav />
              </div>
              <div className="col-xl-9 col-sm-8">
                <span
                  onClick={() => router.back()}
                  role="presentation"
                  className="text-xs color-dark text-bold d-inline-block mb-3 back-menu-profile"
                >
                  <span className="icon-ico-short-arrow me-3"></span>
                  {t('profile.detailExchange')}
                </span>
                <div className="row">
                  <div className="col-lg-6">
                    <DetailExchangeStatus exchange={FAKE_DETAIL_EXCHANGE} />
                    <ExchangeReason exchange={FAKE_DETAIL_EXCHANGE} />
                    <ExchangeProduct exchange={FAKE_DETAIL_EXCHANGE} />
                  </div>
                  <div className="col-lg-6">
                    <ExchangeDetailStatus exchange={FAKE_DETAIL_EXCHANGE} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
