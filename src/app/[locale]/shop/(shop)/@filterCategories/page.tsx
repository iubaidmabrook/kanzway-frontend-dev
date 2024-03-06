/* eslint-disable no-nested-ternary */
import { searchRootCategories } from '@/api/category.api';
import { ShopFilterCategory } from '@/app/components/shop';
import { TShopPageParams } from '@/types/page.type';

export default async function ShopFilterCategoriesParallel({
  searchParams,
}: TShopPageParams) {
  const brands =
    typeof searchParams.brands === 'object'
      ? searchParams.brands
      : typeof searchParams.brands === 'string'
        ? [searchParams.brands]
        : [];

  const categories = await searchRootCategories({ brands });
  return <ShopFilterCategory categories={categories} />;
}
