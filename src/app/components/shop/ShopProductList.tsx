'use client';

import { TProductFamily } from '@/types/product.type';
import { ProductItem } from '../product';

type TShopProductListProps = {
  productFamilies: TProductFamily[];
};

export default function ShopProductList({
  productFamilies,
}: TShopProductListProps) {
  return (
    <div className="row g-4">
      {productFamilies.length === 0 && (
        <div className="d-flex align-items-center justify-content-center mt-5">
          <p>no products found.</p>
        </div>
      )}
      {productFamilies.map((productFamily) => (
        <div
          className="col-xl-4 col-sm-6"
          key={productFamily.code}
        >
          <ProductItem
            // products={productFamily.products}
            // code={productFamily.code}
            productFamily={productFamily}
          />
        </div>
      ))}
    </div>
  );
}
