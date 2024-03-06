/* eslint-disable no-nested-ternary */
import { getBrandById, searchBrandsApi } from '@/api/brand.api';
import { searchRootCategories } from '@/api/category.api';
import ShopFilterCategoryBrand from '@/app/components/shop/ShopFilterCategoryBrand';
import { TShopPageParams } from '@/types/page.type';

export default async function ShopFilterCategoriesBrandsParallel({
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
    hasCategories: true,
    categories,
  });
  const brandFromById = await Promise.all(
    brands.map((id) => getBrandById(Number(id))),
  );

  const listCategory = await searchRootCategories({ brands });
  // const listBrand = [
  //   ...brandFromById,
  //   ...brandFromSearch.filter(
  //     (brand) => !brandFromById.map((b) => b.id).includes(brand.id),
  //   ),
  // ];

  return (
    <ShopFilterCategoryBrand
      categories={listCategory}
      brands={brandFromSearch}
      brandsFromUrl={brandFromById}
    />
  );
}
