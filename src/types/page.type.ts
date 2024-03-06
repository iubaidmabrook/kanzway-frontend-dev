export type TShopPageSearchParams = {
  page: string | undefined;
  sort: string | undefined;
  order: string | undefined;
  size: string | undefined;
  search: string | undefined;
  minPrice: string | undefined;
  maxPrice: string | undefined;
  categories: string[] | undefined;
  brands: string[] | undefined;
};

export type TShopPageParams = {
  searchParams: TShopPageSearchParams;
};

export type TBrandsPageParams = {
  searchParams: {
    page: string | undefined;
    sort: string | undefined;
    order: string | undefined;
    size: string | undefined;
    search: string | undefined;
  };
};
