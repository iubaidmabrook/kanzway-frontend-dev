'use client';

import { searchBrandsApi } from '@/api/brand.api';
import useDebounce from '@/hooks/useDebounce';
import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import { TBrand } from '@/types/brand.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Collapse } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Skeleton from '../base/BaseSkeleton';

type TShopFilterBrand = {
  brands: TBrand[];
  brandsFromUrl: TBrand[];
};

export default function ShopFilterBrand({
  brands,
  brandsFromUrl,
}: TShopFilterBrand) {
  // hooks
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  // locale
  const t = useScopedI18n('common');

  const paramsBrands = useMemo(
    () =>
      searchParams.getAll('brands').length > 0
        ? searchParams.getAll('brands').map((id) => Number(id))
        : [],
    [searchParams],
  );
  const paramsCategories = useMemo(
    () =>
      searchParams.getAll('categories').length > 0
        ? searchParams.getAll('categories')
        : [],
    [searchParams],
  );

  const { isAr } = useLangClient();

  const [isOpenBrand, setIsOpenBrand] = useState<boolean>(false);
  const [listBrand, setListBrand] = useState<TBrand[]>(brands);
  const [search, setSearch] = useState<string>('');
  const debounceSearch = useDebounce(search, 500);

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [selectedBrands, setSelectedBrands] = useState<number[]>(paramsBrands);

  const { isFetching } = useQuery(
    ['brands', debounceSearch, paramsCategories],
    () =>
      searchBrandsApi({
        search: debounceSearch,
        categories: paramsCategories,
        hasCategories: true,
      }),
    {
      initialData: [...brands, ...brandsFromUrl],
      onSuccess(data) {
        if (debounceSearch !== '') {
          setListBrand(data);
        } else {
          setListBrand([
            ...brandsFromUrl,
            ...data.filter(
              (brand) => !brandsFromUrl.map((b) => b.id).includes(brand.id),
            ),
          ]);
        }
      },
    },
  );

  const handleSelectedBrands = useCallback(
    (e: ChangeEvent<HTMLInputElement>, brandId: number) => {
      if (e.target.checked) {
        setSelectedBrands([...selectedBrands, brandId].sort());
      } else {
        setSelectedBrands(selectedBrands.filter((b) => b !== brandId));
      }
    },
    [selectedBrands],
  );

  const areArraysEqual = (array1: number[], array2: number[]): boolean => {
    // Check if the arrays have the same length
    if (array1.length !== array2.length) {
      return false;
    }

    // Check each element of the arrays
    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    // If all elements match, return true
    return true;
  };

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      //
    }

    isFirstRender.current = false;

    return () => {
      isFirstRender.current = true;
    };
  }, []);

  const handleApply = useCallback(() => {
    urlSearchParams.delete('brands');
    urlSearchParams.set('page', '1');
    if (selectedBrands.length > 0) {
      selectedBrands.map((b) => urlSearchParams.append('brands', b.toString()));
    }

    router.replace(`/shop?${urlSearchParams}`);
  }, [selectedBrands, urlSearchParams, router]);

  useEffect(() => {
    setSelectedBrands(paramsBrands);
    setSearch('');
  }, [paramsBrands, searchParams]);

  return (
    <div className="box-filter mb-3">
      <div className="position-relative">
        <button
          className={clsx('btn btn-filter btn-nohover', {
            collapsed: isOpenBrand,
          })}
          aria-controls="filter-brand"
          aria-expanded={isOpenBrand}
          onClick={() => setIsOpenBrand(!isOpenBrand)}
        >
          <div className="col-11">
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-semiBold color-dark">
                {t('brand')}{' '}
                {selectedBrands.length > 0 && `(${selectedBrands.length})`}
              </div>
            </div>
          </div>
        </button>
        {!isFirstRender || !areArraysEqual(paramsBrands, selectedBrands) ? (
          <button
            className={clsx('btn btn-reset btn-nohover p-0 reset-inner', {
              arab: isAr,
            })}
            type="button"
            onClick={handleApply}
          >
            {t('apply')}
          </button>
        ) : null}
      </div>
      <Collapse
        in={isOpenBrand}
        className="mt-3"
      >
        <div id="filter-brand">
          <div className="search-filter-form position-relative">
            <input
              type="text"
              className="form-control"
              name=""
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t('search')}
              id=""
            />
            <button
              className={clsx('btn btn-nohover search-filter', { arab: isAr })}
              type="button"
            >
              <span className="icon-ico-search" />
            </button>
          </div>
          <ul
            className={clsx('list-filter p-0')}
            dir={isAr ? 'rtl' : ''}
          >
            {/* eslint-disable-next-line no-nested-ternary */}
            {isFetching ? (
              Array.from({ length: 5 }).map((_, i) => (
                <li key={`${i.toString()}`}>
                  <Skeleton height="20px" />
                </li>
              ))
            ) : listBrand.length === 0 ? (
              <div className=" mt-4 d-flex justify-content-center px-3">
                <p className=" text-xs text-center">no brand found.</p>
              </div>
            ) : (
              listBrand.map((brand, i) => (
                <li key={brand.name.en}>
                  <div className="d-flex align-items-center gap-2">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id={`brand-${i}`}
                      checked={selectedBrands.includes(brand.id)}
                      onChange={(e) => handleSelectedBrands(e, brand.id)}
                    />
                    <label
                      className="inner-label"
                      htmlFor={`brand-${i}`}
                    >
                      {getLang(params, brand.name)}
                    </label>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </Collapse>
    </div>
  );
}
