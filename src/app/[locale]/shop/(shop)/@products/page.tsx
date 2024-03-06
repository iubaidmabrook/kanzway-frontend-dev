/* eslint-disable no-nested-ternary */
import { searchProducts } from '@/api/product.api';
import { BasePagination } from '@/app/components/base';
import ProductOtherOptions from '@/app/components/product/ProductOtherOptions';
import {
  ShopButtonShowFilter,
  ShopCompare,
  ShopProductList,
} from '@/app/components/shop';
import ShopSorting from '@/app/components/shop/ShopSorting';
import { TShopPageParams } from '@/types/page.type';

export default async function ShopProductsParallel({
  searchParams,
}: TShopPageParams) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const size =
    typeof searchParams.size === 'string' ? Number(searchParams.size) : 18;
  const minPrice =
    typeof searchParams.minPrice === 'string'
      ? Number(searchParams.minPrice)
      : 0;
  const maxPrice =
    typeof searchParams.maxPrice === 'string'
      ? Number(searchParams.maxPrice)
      : 0;
  const sort = searchParams.sort ?? 'familyCode';
  const order = searchParams.order ?? 'desc';
  const search = searchParams.search ?? '';
  const categories =
    typeof searchParams.categories === 'object'
      ? searchParams.categories
      : typeof searchParams.categories === 'string'
        ? [searchParams.categories]
        : [];
  const brands =
    typeof searchParams.brands === 'object'
      ? searchParams.brands
      : typeof searchParams.brands === 'string'
        ? [searchParams.brands]
        : [];

  const productFamilies = await searchProducts({
    page,
    sort,
    order,
    size,
    search,
    categories,
    brands,
    minPrice,
    maxPrice,
  });

  const totalPage = Math.ceil(
    productFamilies.totalCount / productFamilies.size,
  );

  // const compareFromCookie = cookies().get('compare')?.value;
  // const compareValue = compareFromCookie ? atob(compareFromCookie) : '[]';
  // const compare = JSON.parse(compareValue) as Pick<
  //   TProductOverview,
  //   'id' | 'image'
  // >[];
  return (
    <div className="col-xl-9 col-lg-8">
      <ShopButtonShowFilter />
      <ShopSorting productCount={productFamilies.productCount} />

      <ShopCompare />

      <ShopProductList productFamilies={productFamilies.content} />

      <BasePagination
        currentPage={page}
        totalPage={totalPage}
      />

      <ProductOtherOptions />
    </div>
  );
}
