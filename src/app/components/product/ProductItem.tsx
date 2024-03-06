'use client';

// React
import { useMemo, useState } from 'react';

// Next
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Store
import useCompareStore from '@/store/compare.store';
import useDrawerOtherOptionsStore from '@/store/drawer-other-options.store';

// Types
import { TProductFamily, TProductOverview } from '@/types/product.type';

// Utils
import clsx from 'clsx';

// Components
import { getLang } from '@/utils/locale.util';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

// Locales
import { useScopedI18n } from '@/locales/client';

import { calculateDiscount } from '@/utils/common.util';
import toast from 'react-hot-toast';
import useStore from '@/hooks/useStore';
import useWishlistStore from '@/store/wishlist.store';
import useCartStore from '@/store/cart.store';

type TProductItemProps = {
  productFamily: TProductFamily;
};

export default function ProductItem({ productFamily }: TProductItemProps) {
  // props
  const { products, code } = productFamily;

  // selected product
  const [selectedProduct, setSelectedProduct] = useState<TProductOverview>(
    products?.[0],
  );

  // hooks
  const params = useParams();
  const { onOpen, setProducts } = useDrawerOtherOptionsStore();

  // locale
  const t = useScopedI18n('common');

  // compare store
  const { addItem: addItemToCompare, removeItem: removeItemFromCompare } =
    useCompareStore();
  const itemsCompare = useStore(useCompareStore, (state) => state.items);
  const isInCompare = useMemo(() => {
    return itemsCompare
      ? itemsCompare.some((item) => item.id === selectedProduct.id)
      : false;
  }, [itemsCompare, selectedProduct]);

  // wishlist store
  const { addItem: addItemToWishlist, removeItem: removeItemFromWishlist } =
    useWishlistStore();
  const itemsWishlist = useStore(useWishlistStore, (state) => state.items);
  const isInWishlist = useMemo(() => {
    return itemsWishlist
      ? itemsWishlist.some((item) => item === selectedProduct.id)
      : false;
  }, [itemsWishlist, selectedProduct]);

  // cart store
  const { addItem: addItemToCart, removeItem: removeItemFromCart } =
    useCartStore();
  const itemsCart = useStore(useCartStore, (state) => state.items);
  const isInCart = useMemo(() => {
    return itemsCart
      ? itemsCart.some((item) => item === selectedProduct.id)
      : false;
  }, [itemsCart, selectedProduct]);
  return (
    <div className="products-itmes ">
      <div className="img-prod-wrarpper">
        <Link href={`/shop/product/${selectedProduct.slug}`}>
          <div className="img-products">
            <Image
              src={selectedProduct.image.url}
              width={selectedProduct.image.width}
              height={selectedProduct.image.height}
              alt={selectedProduct.image.name}
              className="img-fluid"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </Link>
        {selectedProduct.originalPrice !== null && (
          <div className="disc">
            {calculateDiscount(
              selectedProduct.price,
              selectedProduct.originalPrice,
            )}
            %
          </div>
        )}
        <div className="product-action">
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{t('compare')}</Tooltip>}
          >
            <button
              className={clsx('btn btn-nohover btn-action-prod', {
                'btn-action-prod-active': isInCompare,
              })}
              type="button"
              onClick={() => {
                if (isInCompare) {
                  removeItemFromCompare(selectedProduct.id);
                  toast.success('Product has been remove from compare');
                } else {
                  addItemToCompare(selectedProduct);
                  toast.success('Product has been added to compare');
                }
              }}
            >
              <span className="icon-ico-compare" />
            </button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{t('addToCart')}</Tooltip>}
          >
            <button
              type="button"
              className={clsx('btn btn-nohover btn-action-prod', {
                'btn-action-prod-active': isInCart,
              })}
              onClick={() => {
                if (isInCart) {
                  removeItemFromCart(selectedProduct.id);
                  toast.success('Product has been remove from cart');
                } else {
                  addItemToCart(selectedProduct.id);
                  toast.success('Product has been added to cart');
                }
              }}
            >
              <span className="icon-ico-cart" />
            </button>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            overlay={<Tooltip>{t('wishlist')}</Tooltip>}
          >
            <button
              type="button"
              className={clsx('btn btn-nohover btn-action-prod', {
                'btn-action-prod-active': isInWishlist,
              })}
              onClick={() => {
                if (isInWishlist) {
                  removeItemFromWishlist(selectedProduct.id);
                  toast.success('Product has been remove from wishlist');
                } else {
                  addItemToWishlist(selectedProduct.id);
                  toast.success('Product has been added to wishlist');
                }
              }}
            >
              <span className="icon-ico-heart" />
            </button>
          </OverlayTrigger>
        </div>
      </div>
      <div
        className="product-meta"
        dir="ltr"
      >
        <div className="text-xs color-gray-60 text-medium">
          {getLang(params, selectedProduct.brand.name)}
        </div>
        <Link
          href={`/shop/product/${selectedProduct.slug}`}
          className="link-product"
        >
          {getLang(params, selectedProduct.name)}
        </Link>
        <div className="text-xs color-gray-60 mb-1">
          {code !== selectedProduct.mpn ? `${code} - ` : null}
          {selectedProduct.mpn}
        </div>
        <div className="d-flex align-items-center gap-3">
          {selectedProduct.originalPrice && (
            <div className="price-bofore">{selectedProduct.originalPrice}</div>
          )}
          <div className="price-after">
            {t('sar')} {selectedProduct.price}{' '}
            {selectedProduct.maxPrice && `- ${selectedProduct.maxPrice}`}
          </div>
        </div>
        {products.length > 1 && (
          <>
            <div className="text-xxs color-gray-60 mb-2">
              {t('otherOptions')}
            </div>
            <div
              className="position-relative"
              dir="ltr"
            >
              <Swiper
                loop={false}
                slidesPerView="auto"
                spaceBetween={4}
                className="swiper variant-slider variant-1"
              >
                {products.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="swiper-slide"
                  >
                    <OverlayTrigger
                      placement="bottom"
                      key={product.name.en}
                      overlay={
                        <Tooltip>{getLang(params, product.name)}</Tooltip>
                      }
                    >
                      <a
                        role="presentation"
                        className={clsx('variant-thumb', {
                          active: selectedProduct.id === product.id,
                        })}
                        onClick={() => setSelectedProduct(product)}
                      >
                        <Image
                          src={product.icon.url}
                          width={product.icon.width}
                          height={product.icon.height}
                          alt={product.icon.name}
                          className="img-fluid"
                          onContextMenu={(e) => e.preventDefault()}
                        />
                      </a>
                    </OverlayTrigger>
                  </SwiperSlide>
                ))}
              </Swiper>
              <button
                // href={`/shop/product/${selectedProduct.slug}`}
                onClick={() => {
                  setProducts(products);
                  onOpen();
                }}
                className={clsx('btn-see-all')}
              >
                {t('seeAll')}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
