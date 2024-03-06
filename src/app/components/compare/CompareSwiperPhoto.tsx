'use client';

import { useI18n } from '@/locales/client';
import useCompareStore from '@/store/compare.store';
import { TProduct } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';

type TCompareSwiperPhotoProps = {
  product: TProduct;
};

export default function CompareSwiperPhoto({
  product,
}: TCompareSwiperPhotoProps) {
  // hooks
  const { removeItem } = useCompareStore();
  const params = useParams();
  const router = useRouter();

  // locale
  const t = useI18n();

  // handle remove item (id product)
  const handleRemoveItem = useCallback(
    (productId: number) => {
      removeItem(productId);
      router.refresh();
    },
    [router, removeItem],
  );

  return (
    product && (
      <div className=" products-itmes">
        <div className="img-prod-wrarpper">
          <div className="img-products list-compare">
            <Image
              src={product.image.url}
              className="img-fluid"
              width={1000}
              height={1000}
              alt={product.image.name}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          {/* <div className="disc">25%</div> */}
          <button
            className="btn btn-close-compare btn-nohover"
            onClick={() => handleRemoveItem(product.id)}
            type="button"
          >
            <span className="icon-ico-close" />
          </button>
        </div>
        <div className="product-meta">
          <div className="text-xs color-gray-60 text-medium">
            {getLang(params, product.brand.name)}
          </div>
          <Link
            className=" link-product"
            href={`/shop/product/${product.slug}`}
          >
            {getLang(params, product.name)}
          </Link>
          <div className="text-xs color-gray-60 mb-1">{product.mpn}</div>
          <div className="d-flex align-items-center gap-3">
            {product.originalPrice && (
              <div className="price-bofore">{product.originalPrice}</div>
            )}
            <div className="price-after">
              {t('common.sar')} {product.price}{' '}
              {product.maxPrice && `- ${product.maxPrice}`}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
