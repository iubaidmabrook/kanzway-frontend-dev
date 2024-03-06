'use client';

import { useI18n } from '@/locales/client';
import useCompareStore from '@/store/compare.store';
import { TProduct } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { SwiperSlideProps } from 'swiper/react';

type TCompareSwiperStickyProps = SwiperSlideProps & {
  product: TProduct;
};

export default function CompareSwiperSticky({
  product,
}: TCompareSwiperStickyProps) {
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
    <div className="products-itmes">
      <div className="img-prod-wrarpper">
        <div className="img-products compared">
          <Image
            src={product.image.url}
            className="img-fluid"
            width={1000}
            height={1000}
            alt={product.image.name}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <button
          className="btn btn-close-compare btn-nohover"
          onClick={() => handleRemoveItem(product.id)}
          type="button"
        >
          <span className="icon-ico-close" />
        </button>
      </div>
      <div className="product-meta px-0">
        <Link
          className="link-product"
          href={`/shop/product/${product.slug}`}
        >
          {getLang(params, product.name)}
        </Link>
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
  );
}
