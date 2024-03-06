// React
import React from 'react';

// Types
import { TProductCommonProps } from '@/types/product.type';

// Locale
import { useLangServer } from '@/hooks/useLangServer';

// Components
import ProductReview from '@/app/components/product/ProductReview';
import ProductProperties from '@/app/components/product/ProductProperties';
import ProductDocuments from '@/app/components/product/ProductDocuments';
import ProductSummary from '@/app/components/product/ProductSummary';
import ProductPhotos from '@/app/components/product/ProductPhotos';

async function ProductDetail(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const { isAr } = await useLangServer();

  return (
    <div className="container">
      <div
        dir={isAr ? 'rtl' : 'ltr'}
        className="row mt-4 gx-xl-5"
      >
        <div className="col-lg-8">
          {/* Product Photos */}
          <ProductPhotos product={product} />

          {/* Product Summary Mobile */}
          <div className="d-block d-lg-none mt-4">
            <ProductSummary product={product} />
          </div>

          {/* Product Feature Spec */}
          <ProductProperties product={product} />

          {/* Product Document */}
          <ProductDocuments product={product} />
          <hr />

          {/* Product Review */}
          <ProductReview />
        </div>
        <div className="col-lg-4 d-none d-lg-flex">
          <ProductSummary product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
