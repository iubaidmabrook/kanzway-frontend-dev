'use client';

import { searchAllBrands } from '@/api/brand.api';
import { BasePagination } from '@/app/components/base';
import useDebounce from '@/hooks/useDebounce';
import { useCurrentLocale } from '@/locales/client';
import { TResponsePaginate } from '@/types/api.type';
import { TBrand } from '@/types/brand.type';
import { getLang } from '@/utils/locale.util';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import Skeleton from '../base/BaseSkeleton';

function BrandList({ brands }: { brands: TResponsePaginate<TBrand> }) {
  const [searchValue, setSearchValue] = useState('');
  const [selectedFilter, setSetSelectedFilter] = useState('all');
  const [search, setSearch] = useState(searchValue);
  const debounceSearch = useDebounce(search, 500);
  const [brandList, setBrandList] = useState<TResponsePaginate<TBrand>>(brands);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [isSearch, setIsSearch] = useState<boolean>(false);

  const params = useParams();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  const filterArr = [
    'ALL',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  const currentLocale = useCurrentLocale();

  const currentPage =
    typeof urlSearchParams.get('page') === 'string'
      ? Number(urlSearchParams.get('page'))
      : 1;
  const totalPage = Math.ceil(brandList.totalCount / brandList.size);

  const handleSearchBrands = useCallback(async () => {
    if (debounceSearch !== '') {
      urlSearchParams.set('page', '1');
      setIsLoading(true);
      const res = await searchAllBrands({
        search: debounceSearch,
      });
      setBrandList(res);
      setIsLoading(false);
    } else {
      setBrandList(brands);
    }
  }, [debounceSearch, urlSearchParams, brands]);

  useEffect(() => {
    handleSearchBrands();
  }, [handleSearchBrands]);

  const handleClickFilter = (items: string) => {
    if (items === 'all') {
      setSearch('');
      setSetSelectedFilter('all');
    } else {
      setSearch(items.toLowerCase());
      setSetSelectedFilter(items.toLowerCase());
    }
  };

  return (
    <section className="main-inner">
      <div className="container">
        <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
          Discover Many Brands for Various Industries
        </div>
        <p className="text-center color-dark text-xs">
          Explore the brands that shape industries. Shop with us today and
          elevate your projects
        </p>

        <div className="col-lg-6 mx-auto my-4 py-lg-4">
          <div className="row justify-content-between align-items-center ">
            <div className="col-sm-12">
              <div className="d-flex align-items-center gap-2">
                <div className="flex-grow-1 brands-search">
                  <input
                    type="text"
                    className="form-control"
                    name=""
                    id=""
                    placeholder="Search brand name"
                    value={searchValue}
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                      setSearch(e.target.value);
                    }}
                  />
                </div>
                <button className="btn btn-red px-3">
                  <span className="icon-ico-search"></span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-10 mx-auto">
          <div className="border-top border-bottom py-2">
            <Swiper
              loop={false}
              slidesPerView="auto"
              spaceBetween={23}
              className="slider-alphabet"
            >
              <div className="swiper-wrapper">
                {filterArr.map((items) => (
                  <SwiperSlide
                    className="swiper-slide max-content"
                    key={Math.random()}
                  >
                    <button
                      className={`nav-link ${selectedFilter.toLowerCase() === items.toLowerCase() ? 'active-filter' : ''}`}
                      onClick={() => handleClickFilter(items)}
                    >
                      {items}
                    </button>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>

        <div
          className="tab-content mt-4"
          id="nav-tabContent"
        >
          <div
            className="tab-pane fade show active"
            id="brand-1"
            role="tabpanel"
            aria-labelledby="brand-1-tab"
            tabIndex={0}
          >
            <div className="brand-page-row position-relative">
              {isLoading
                ? Array.from({ length: 8 }).map((_, i) => (
                    <Skeleton
                      height="80px"
                      key={`${i.toString()}`}
                    />
                  ))
                : brandList.content.map((items) => (
                    <OverlayTrigger
                      placement="bottom"
                      overlay={<Tooltip>{getLang(params, items.name)}</Tooltip>}
                    >
                      <Link
                        href={{
                          pathname: `/shop`,
                          query: {
                            brands: items.id,
                          },
                        }}
                        className="brand-items position-relative"
                        key={items.id}
                      >
                        <div className="brand-icon">
                          <Image
                            src={
                              items.image
                                ? items.image.url
                                : 'https://placehold.co/85x85'
                            }
                            className="img-fluid"
                            height={items.image ? items.image.height : 85}
                            width={items.image ? items.image.width : 85}
                            alt={items.name[currentLocale]}
                            // fill={true}
                          />
                        </div>
                        <div className="text-center text-xs color-dark">
                          {items.name[currentLocale]?.length > 13
                            ? `${items.name[currentLocale].substring(0, 10)}
                      ...`
                            : items.name[currentLocale]}
                        </div>
                      </Link>
                    </OverlayTrigger>
                  ))}
            </div>
          </div>
        </div>
      </div>
      <BasePagination
        currentPage={currentPage}
        totalPage={totalPage}
      />
    </section>
  );
}

export default BrandList;
