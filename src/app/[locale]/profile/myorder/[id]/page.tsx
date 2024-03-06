/* eslint-disable no-plusplus */

'use client';

import BaseProfileNav from '@/app/components/base/BaseProfileNav';
import { TDefaultParams } from '@/types/common.type';
import { useI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';
import { TOrderDetail } from '@/types/order.type';
import {
  DetailOrderStatus,
  PaymentDetail,
  PaymentMethode,
  ProductDetail,
  ShippingDetail,
  ShippingInformation,
} from '@/app/components/myorder';

export default function OrderDetailPage({
  params,
}: Readonly<{
  params: TDefaultParams & { id: string };
}>) {
  const t = useI18n();
  const router = useRouter();

  const getStatus = (id: string) => {
    switch (id) {
      case '1':
        return 'On placed';
        break;
      case '2':
        return 'On Process';
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
      default:
        return '';
        break;
    }
  };

  const FAKE_DETAIL_ORDER: TOrderDetail = {
    id: parseInt(params.id, 10),
    orderNumber: 'TRX001',
    date: '2024-02-21 09:10',
    principalAddressId: 1,
    principalAddress: {
      id: 1,
      address_name: 'Office',
      address: 'ABC Street No 1',
      city: 'Bandung',
      country: 'Indonesia',
      lat: '99288833',
      long: '98844456',
    },
    paymentMethod: {
      id: 1,
      name: 'Bank Transfer',
    },
    payment_expired_at: '2024-02-22 09:10:10',
    subtotal: 250000,
    shippingCost: 15000,
    promoCode: null,
    discount: 0,
    grandTotal: 40000,
    status: getStatus(params.id),
    items: [
      {
        shippingMethodId: 1,
        shippingMethodName: 'Next Day',
        shippingCost: 10000,
        products: [
          {
            id: 1,
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
        shippingMethodId: 2,
        shippingMethodName: 'Next Day 2',
        shippingCost: 10000,
        products: [
          {
            id: 1,
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
            price: 240,
            originalPrice: 280,
            maxPrice: 321,
            qty: 2,
            note: 'bubble wrap',
            subtotal: 480,
          },
        ],
      },
    ],
  };

  const renderMiddleContent = () => {
    switch (params.id) {
      case '1':
        return (
          <>
            <DetailOrderStatus order={FAKE_DETAIL_ORDER} />
            <PaymentDetail order={FAKE_DETAIL_ORDER} />
            <ShippingInformation order={FAKE_DETAIL_ORDER} />
            <ProductDetail order={FAKE_DETAIL_ORDER} />
          </>
        );
        break;
      case '2':
        return (
          <>
            <DetailOrderStatus order={FAKE_DETAIL_ORDER} />
            <PaymentDetail order={FAKE_DETAIL_ORDER} />
            <ShippingInformation order={FAKE_DETAIL_ORDER} />
            <ProductDetail order={FAKE_DETAIL_ORDER} />
          </>
        );
        break;
      case '3':
        return (
          <>
            <DetailOrderStatus order={FAKE_DETAIL_ORDER} />
            <ShippingInformation order={FAKE_DETAIL_ORDER} />
            <ProductDetail order={FAKE_DETAIL_ORDER} />
            <PaymentDetail order={FAKE_DETAIL_ORDER} />
          </>
        );
        break;
      case '4':
        return (
          <>
            <DetailOrderStatus order={FAKE_DETAIL_ORDER} />
            <ShippingInformation order={FAKE_DETAIL_ORDER} />
            <ProductDetail order={FAKE_DETAIL_ORDER} />
            <PaymentDetail order={FAKE_DETAIL_ORDER} />
          </>
        );
        break;
      case '5':
        return (
          <>
            <DetailOrderStatus order={FAKE_DETAIL_ORDER} />
            <ShippingInformation order={FAKE_DETAIL_ORDER} />
            <ProductDetail order={FAKE_DETAIL_ORDER} />
            <PaymentDetail order={FAKE_DETAIL_ORDER} />
          </>
        );
        break;
      default:
        return null;
        break;
    }
  };

  const renderRightContent = () => {
    switch (params.id) {
      case '1':
        return <PaymentMethode order={FAKE_DETAIL_ORDER} />;
        break;
      case '2':
        return <ShippingDetail order={FAKE_DETAIL_ORDER} />;
        break;
      case '3':
        return <ShippingDetail order={FAKE_DETAIL_ORDER} />;
        break;
      case '4':
        return <ShippingDetail order={FAKE_DETAIL_ORDER} />;
      case '5':
        return (
          <span
            className="btn btn-secondary w-100"
            // href="product-list.html"
          >
            {t('profile.reOrder')}
          </span>
        );
        break;
      default:
        return null;
        break;
    }
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
                  {t('profile.detailOrder')}
                </span>
                <div className="row">
                  <div className="col-lg-6">{renderMiddleContent()}</div>
                  <div className="col-lg-6">{renderRightContent()}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
