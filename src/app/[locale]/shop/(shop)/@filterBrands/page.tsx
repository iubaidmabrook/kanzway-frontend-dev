/* eslint-disable no-nested-ternary */
import { getBrandById, searchBrandsApi } from '@/api/brand.api';
import { ShopFilterBrand } from '@/app/components/shop';
import { TShopPageParams } from '@/types/page.type';

export default async function ShopFilterBrandsParallel({
  searchParams,
}: TShopPageParams) {
  const brands =
    typeof searchParams.brands === 'object'
      ? searchParams.brands
      : typeof searchParams.brands === 'string'
        ? [searchParams.brands]
        : [];
  const categories =
    typeof searchParams.categories === 'object'
      ? searchParams.categories
      : typeof searchParams.categories === 'string'
        ? [searchParams.categories]
        : [];

  const brandFromSearch = await searchBrandsApi({
    categories,
    hasCategories: true,
  });
  const brandFromById = await Promise.all(
    brands.map((id) => getBrandById(Number(id))),
  );

  return (
    <ShopFilterBrand
      brands={brandFromSearch}
      brandsFromUrl={brandFromById}
    />
  );
}
