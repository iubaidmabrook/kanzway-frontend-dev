'use client';

import { TProduct } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import { useParams } from 'next/navigation';

type TCompareSwiperFeatureProps = {
  product: TProduct;
};

export default function CompareSwiperFeature({
  product,
}: TCompareSwiperFeatureProps) {
  // hooks
  const params = useParams();

  return (
    product && (
      <div className="row g-3">
        {product.properties.map(
          (productProperty) =>
            productProperty.type === 'image' &&
            productProperty.groups.map((group) =>
              group.items.map((item, index) => (
                <div
                  key={`${productProperty.name}${group.id}${index.toString()}`}
                  className="col-sm-12 "
                >
                  <div className="d-flex align-items-start gap-3 compare-feature">
                    <div className="img-fature">
                      <img
                        src={item.image?.url}
                        className="img-fluid"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    </div>
                    <div className="text-xxs Mulish">
                      {getLang(params, item.value1)}
                    </div>
                  </div>
                </div>
              )),
            ),
        )}
      </div>
    )
  );
}
