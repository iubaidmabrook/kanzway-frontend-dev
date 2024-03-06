import { searchAllBrands } from '@/api/brand.api';
import BrandList from '@/app/components/brand';
import { TShopPageParams } from '@/types/page.type';

async function Brand({ searchParams }: TShopPageParams) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;
  const search = searchParams.search ?? '';

  const brands = await searchAllBrands({
    page,
    search,
    size: 56,
  });

  return <BrandList brands={brands} />;
}

export default Brand;
