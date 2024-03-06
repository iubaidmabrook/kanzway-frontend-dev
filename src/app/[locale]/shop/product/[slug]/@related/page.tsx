// Api
import { getRelatedProductsBySlug } from '@/api/product.api';

// Components
import ProductRelatedItems from '@/app/components/product/ProductRelatedItems';
import { useLangServer } from '@/hooks/useLangServer';

// Locale
import { getI18n } from '@/locales/server';
import { TDefaultParams } from '@/types/common.type';

// Utils
import clsx from 'clsx';

async function ProductRelatedPage({
  params,
}: Readonly<{
  params: TDefaultParams & { slug: string };
}>) {
  const { isAr } = await useLangServer();
  const t = await getI18n();

  const products = await getRelatedProductsBySlug(params.slug);
  if (products.code !== '0') {
    return (
      <section className="realated-product main-section pt-0">
        <div
          className="container"
          dir={isAr ? 'rtl' : 'ltr'}
        >
          Failed fetching related products
        </div>
      </section>
    );
  }

  return (
    <section className="realated-product main-section pt-0">
      <div
        className="container"
        dir={isAr ? 'rtl' : 'ltr'}
      >
        <div
          className={clsx('heading-related color-dark Mulish mb-5', {
            'text-right': isAr,
          })}
        >
          {t('product.relatedProduct')}
        </div>

        <ProductRelatedItems products={products.data} />
      </div>
    </section>
  );
}

export default ProductRelatedPage;
