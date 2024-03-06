/* eslint-disable no-plusplus */
import { useCurrentLocale, useI18n } from '@/locales/client';
import { TRefundDetail } from '@/types/order.type';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function RefundProduct({ refund }: { refund: TRefundDetail }) {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const [isCollapse, setIsCollapse] = useState<boolean>(true);

  const renderProduct = () => {
    return refund.items.map((items, index, row) => (
      <>
        <div className="row gx-1">
          <div className="col-9">
            <div className="d-flex gap-3">
              <div className="img-cart">
                <Link href={`/shop/product/${items.slug}`}>
                  <Image
                    src={items.image.url}
                    className="img-product-small"
                    height={items.image.height}
                    width={items.image.width}
                    style={{ objectFit: 'contain' }}
                    onContextMenu={(e) => e.preventDefault()}
                    alt=""
                  />
                </Link>
              </div>
              <div className="opt-meta">
                <a
                  href="product-detail.html"
                  className="text-xs Mulish color-dark d-inline-block text-bold"
                >
                  {items.title[currentLocale]}
                </a>
                <div className="text-xxs color-gray-60 text-hidden mb-2">
                  {`${items.brand.name[currentLocale]} - ${items.code}`}
                </div>
                <div className="d-flex align-items-center gap-3">
                  {/* <div className="price-bofore">SAR 280</div> */}
                  <div className="price-after">{`${t('common.sar')} ${items.price}`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="d-flex h-100 justify-content-between flex-column">
              <div className="d-flex justify-content-end"></div>
              <div className="d-flex justify-content-end">
                <div className="text-xs color-dark">{`x${items.qty}`}</div>
              </div>
            </div>
          </div>
        </div>
        <p className="mb-0 text-xs color-dark my-3">{items.note}</p>
        {index + 1 !== row.length && <hr />}
      </>
    ));
  };

  return (
    <div className="box-border bg-white rounded-2 p-3 mb-3">
      <span
        className={`${isCollapse ? 'collapsed' : ''} link-collapse`}
        data-bs-toggle="collapse"
        role="presentation"
        onClick={() => setIsCollapse(!isCollapse)}
      >
        {t('common.productDetail')}
      </span>
      <div
        className={`${isCollapse ? '' : 'show'} collapse`}
        id="link-collapse-3"
      >
        <div className="pt-3">{renderProduct()}</div>
      </div>
    </div>
  );
}

export default RefundProduct;
