// Components
import ProductDetail from '@/app/components/product/ProductDetail';
import ProductDetailNav from '@/app/components/product/ProductDetailNav';
import ProductBreadcrumbs from '@/app/components/product/ProductBreadcrumbs';

// Api
import { getProductBySlug } from '@/api/product.api';

// Types
import { TDefaultParams } from '@/types/common.type';

export default async function ProductSlugPage({
  params,
}: Readonly<{
  params: TDefaultParams & { slug: string };
}>) {
  // Fetch data
  const product = await getProductBySlug(params.slug);

  return (
    <section className="main-inner">
      <ProductBreadcrumbs product={product} />
      <ProductDetailNav product={product} />
      <ProductDetail product={product} />
    </section>
  );
}
