'use client';

/* eslint-disable no-nested-ternary */
import { searchBrandsApi } from '@/api/brand.api';
import { searchRootCategories } from '@/api/category.api';
import useDebounce from '@/hooks/useDebounce';
import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import { TBrand } from '@/types/brand.type';
import { TRootCategories } from '@/types/category.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import { useParams, useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Skeleton from '../base/BaseSkeleton';

export type TShopFilterCategoryProps = {
  categories: TRootCategories[];
  brands: TBrand[];
  brandsFromUrl: TBrand[];
};

export default function ShopFilterCategoryBrand({
  categories,
  brands,
  brandsFromUrl,
}: TShopFilterCategoryProps) {
  // Locale
  const t = useScopedI18n('common');
  const { isAr } = useLangClient();

  // Hooks
  const params = useParams();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
  const router = useRouter();

  // query params from url
  const paramsBrands = useMemo(
    () =>
      searchParams.getAll('brands').length > 0
        ? searchParams.getAll('brands').map((id) => Number(id))
        : [],
    [searchParams],
  );
  const paramsCategories: string[] = useMemo(
    () =>
      searchParams.getAll('categories').length > 0
        ? searchParams.getAll('categories')
        : [],
    [searchParams],
  );

  // handle selected categories
  const selectedCategoryIds: string[] = [];
  categories.map((parent) =>
    paramsCategories.includes(parent.slug)
      ? selectedCategoryIds.push(parent.slug) &&
        parent.children &&
        parent.children.map(
          (category) =>
            selectedCategoryIds.push(category.slug) &&
            category.children &&
            category.children.map((sub) => selectedCategoryIds.push(sub.slug)),
        )
      : parent.children &&
        parent.children.map((category) =>
          paramsCategories.includes(category.slug)
            ? selectedCategoryIds.push(category.slug) &&
              category.children &&
              category.children.map((sub) => selectedCategoryIds.push(sub.slug))
            : category.children &&
              category.children.map(
                (sub) =>
                  paramsCategories.includes(sub.slug) &&
                  selectedCategoryIds.push(sub.slug),
              ),
        ),
  );

  // State
  const [isOpenBrand, setIsOpenBrand] = useState<boolean>(false);
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [isOpenSubCategory, setIsOpenSubCategory] = useState<{
    [key: string]: boolean;
  }>({});
  const [listBrand, setListBrand] = useState<TBrand[]>(brands);
  const [searchBrand, setSearchBrand] = useState<string>('');
  const [selectedBrands, setSelectedBrands] = useState<number[]>(paramsBrands);
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [listCategory, setListCategory] =
    useState<TRootCategories[]>(categories);
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(selectedCategoryIds);

  // debounce
  const searchCategoryDebounce = useDebounce(searchCategory, 500);
  const searchBrandDebounce = useDebounce(searchBrand, 500);

  // toggle collapse for categories
  const toggleCollapse = useCallback((collapseKey: string) => {
    setIsOpenSubCategory((prev) => ({
      ...prev,
      [collapseKey]: !prev[collapseKey],
    }));
  }, []);

  // handle selected root categories
  const selectedRootCategories: string[] = [];
  listCategory.map((parent) =>
    selectedCategories.includes(parent.slug) ||
    parent.children.every(
      (category) => selectedCategories.includes(category.slug),
      // && category.children.every((sub) => selectedCategories.includes(sub.slug)),
    )
      ? selectedRootCategories.push(parent.slug)
      : parent.children.length > 0 &&
        parent.children.map((category) =>
          selectedCategories.includes(category.slug) &&
          category.children.length > 0 &&
          category.children.every((sub) =>
            selectedCategories.includes(sub.slug),
          )
            ? selectedRootCategories.push(category.slug)
            : category.children.length > 0 &&
              category.children.forEach(
                (sub) =>
                  selectedCategories.includes(sub.slug) &&
                  selectedRootCategories.push(sub.slug),
              ),
        ),
  );

  // handle search for categories
  const { isFetching: isFetchingCategories } = useQuery(
    ['categories', searchCategoryDebounce, selectedBrands],
    () =>
      searchRootCategories({
        search: searchCategoryDebounce,
        brands: selectedBrands.map((id) => id.toString()),
      }),
    {
      initialData: categories,
      onSuccess(data) {
        const selectedCategoriesFromData: string[] = [];

        data.map((parent) =>
          selectedCategories.includes(parent.slug)
            ? selectedCategoriesFromData.push(parent.slug) &&
              parent.children.length > 0 &&
              parent.children.map(
                (category) =>
                  selectedCategoriesFromData.push(category.slug) &&
                  category.children.length > 0 &&
                  category.children.map((sub) =>
                    selectedCategoriesFromData.push(sub.slug),
                  ),
              )
            : parent.children.length > 0 &&
              parent.children.map((category) =>
                selectedCategories.includes(category.slug)
                  ? selectedCategoriesFromData.push(category.slug) &&
                    category.children.length > 0 &&
                    category.children.map((sub) =>
                      selectedCategoriesFromData.push(sub.slug),
                    )
                  : category.children.length > 0 &&
                    category.children.map(
                      (sub) =>
                        selectedCategories.includes(sub.slug) &&
                        selectedCategoriesFromData.push(sub.slug),
                    ),
              ),
        );
        setSelectedCategories(selectedCategoriesFromData);
        setListCategory(data);
      },
    },
  );

  // handle search for brands
  const { isFetching: isFetchingBrands } = useQuery(
    ['brands', searchBrandDebounce, selectedRootCategories],
    () =>
      searchBrandsApi({
        search: searchBrandDebounce,
        categories: selectedRootCategories,
        hasCategories: true,
      }),
    {
      initialData: [...brands, ...brandsFromUrl],
      onSuccess(data) {
        if (searchBrandDebounce !== '') {
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

  // handle apply for categories and brands
  const handleApply = useCallback(() => {
    urlSearchParams.delete('categories');
    urlSearchParams.delete('brands');
    urlSearchParams.set('page', '1');
    const queryStrings: string[] = [];
    listCategory.map((parent) =>
      (parent.children.length === 0 &&
        selectedCategories.includes(parent.slug)) ||
      (parent.children.length > 0 &&
        parent.children.every((category) =>
          selectedCategories.includes(category.slug),
        )) ||
      (parent.children.length > 0 &&
        parent.children.every(
          (category) =>
            category.children.length > 0 &&
            category.children.every((sub) =>
              selectedCategories.includes(sub.slug),
            ),
        ))
        ? queryStrings.push(parent.slug)
        : parent.children &&
          parent.children.map((category) =>
            (category.children.length === 0 &&
              selectedCategories.includes(category.slug)) ||
            (category.children.length > 0 &&
              category.children.every((sub) =>
                selectedCategories.includes(sub.slug),
              ))
              ? queryStrings.push(category.slug)
              : category.children &&
                category.children.forEach(
                  (sub) =>
                    selectedCategories.includes(sub.slug) &&
                    queryStrings.push(sub.slug),
                ),
          ),
    );

    queryStrings.map((id) =>
      urlSearchParams.append('categories', id.toString()),
    );

    if (selectedBrands.length > 0) {
      selectedBrands.map((b) => urlSearchParams.append('brands', b.toString()));
    }

    router.replace(`/shop?${urlSearchParams}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearchParams, selectedCategories, selectedBrands]);

  // mapping categories to selected categories
  useEffect(() => {
    const tempIds: string[] = [];
    categories.map((parent) =>
      paramsCategories.includes(parent.slug)
        ? tempIds.push(parent.slug) &&
          parent.children &&
          parent.children.map(
            (category) =>
              tempIds.push(category.slug) &&
              category.children &&
              category.children.map((sub) => tempIds.push(sub.slug)),
          )
        : parent.children &&
          parent.children.map((category) =>
            paramsCategories.includes(category.slug)
              ? tempIds.push(category.slug) &&
                category.children &&
                category.children.map((sub) => tempIds.push(sub.slug))
              : category.children &&
                category.children.map(
                  (sub) =>
                    paramsCategories.includes(sub.slug) &&
                    tempIds.push(sub.slug),
                ),
          ),
    );
    setSelectedCategories(tempIds);
  }, [paramsCategories, categories]);

  // function for check two array is equal
  const areArraysEqual = (array1: string[], array2: string[]): boolean => {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let i = 0; i < array1.length; i += 1) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }

    return true;
  };

  // set selected brands from real value
  useEffect(() => {
    setSelectedBrands(paramsBrands);
  }, [paramsBrands]);

  // clear search value when search params change
  useEffect(() => {
    setSearchBrand('');
    setSearchCategory('');
  }, [searchParams]);

  return (
    <>
      <div className="box-filter mb-3">
        <div className="position-relative">
          <button
            className={clsx('btn btn-filter btn-nohover', {
              collapsed: isOpenCategory,
            })}
            aria-controls="filter-category"
            aria-expanded={isOpenCategory}
            onClick={() => setIsOpenCategory(!isOpenCategory)}
          >
            <div className="col-11">
              <div className="d-flex align-items-center justify-content-between">
                <div className="text-semiBold color-dark">
                  {t('category')}{' '}
                  {selectedCategories.length > 0 &&
                    `(${selectedCategories.length})`}
                </div>
              </div>
            </div>
          </button>
          {!areArraysEqual(selectedCategories, selectedCategoryIds) ? (
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
          in={isOpenCategory}
          className=" mt-3"
        >
          <div id="filter-category">
            <div className="search-filter-form position-relative">
              <input
                type="text"
                className="form-control"
                name=""
                placeholder={t('search')}
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                id=""
              />
              <button
                className={clsx('btn btn-nohover search-filter', {
                  arab: isAr,
                })}
                type="button"
              >
                <span className="icon-ico-search" />
              </button>
            </div>
            {/* eslint-disable-next-line no-nested-ternary */}
            {isFetchingCategories ? (
              Array.from({ length: 5 }).map((_, i) => (
                <Skeleton
                  height="20px"
                  key={`${i.toString()}`}
                  className=" my-2"
                />
              ))
            ) : listCategory.length === 0 ? (
              <div className=" mt-4 d-flex justify-content-center px-3">
                <p className=" text-xs text-center">no category found.</p>
              </div>
            ) : (
              listCategory.map((parentCategory, i) => (
                <div
                  className={clsx('list-fi', {
                    'border-bottom-0': i === listCategory.length - 1,
                  })}
                  key={parentCategory.name.en + i.toString()}
                >
                  <div className=" d-flex align-items-start gap-2">
                    <input
                      className="form-check-input mt-1"
                      type="checkbox"
                      checked={
                        parentCategory.children.length > 0
                          ? selectedCategories.includes(parentCategory.slug) ||
                            (parentCategory.children.length > 0 &&
                              parentCategory.children.every(
                                (fp) =>
                                  selectedCategories.includes(fp.slug) ||
                                  (fp.children.length > 0 &&
                                    fp.children.every((fc) =>
                                      selectedCategories.includes(fc.slug),
                                    )),
                              ))
                          : selectedCategories.includes(parentCategory.slug)
                      }
                      onChange={(e) => {
                        const ids: string[] = [];
                        listCategory
                          .filter(
                            (parent) => parent.slug === parentCategory.slug,
                          )
                          .map(
                            (category) =>
                              ids.push(category.slug) &&
                              category.children.map(
                                (sub) =>
                                  ids.push(sub.slug) &&
                                  sub.children.map((c) => ids.push(c.slug)),
                              ),
                          );
                        if (e.target.checked) {
                          setSelectedCategories([
                            ...selectedCategories.filter(
                              (sc) => !ids.includes(sc),
                            ),
                            ...ids,
                          ]);
                        } else {
                          setSelectedCategories(
                            selectedCategories.filter(
                              (sc) => !ids.includes(sc),
                            ),
                          );
                        }
                      }}
                    />
                    <button
                      className={clsx(
                        'btn btn-filter btn-nohover text-start align-items-start',
                        {
                          collapsed: isOpenSubCategory[parentCategory.slug],
                        },
                        { 'text-end': isAr },
                      )}
                      type="button"
                      onClick={() => toggleCollapse(parentCategory.slug)}
                    >
                      <div className="text-semiBold color-dark">
                        {getLang(params, parentCategory.name)}
                      </div>
                    </button>
                  </div>
                  <Collapse in={isOpenSubCategory[parentCategory.slug]}>
                    <div>
                      {parentCategory.children &&
                        parentCategory.children.map((category) => (
                          <Fragment key={category.id}>
                            <div
                              className={clsx(
                                'd-flex align-items-start gap-2 mt-3 ps-4',
                                { 'pe-4': isAr },
                              )}
                            >
                              <input
                                className="form-check-input mt-1"
                                type="checkbox"
                                checked={
                                  category.children.length > 0
                                    ? selectedCategories.includes(category.slug)
                                      ? selectedCategories.includes(
                                          category.slug,
                                        ) &&
                                        category.children.every((fc) =>
                                          selectedCategories.includes(fc.slug),
                                        )
                                      : category.children.every((fc) =>
                                          selectedCategories.includes(fc.slug),
                                        )
                                    : selectedCategories.includes(category.slug)
                                }
                                onChange={(e) => {
                                  const ids: string[] = [];
                                  listCategory.map((parent) =>
                                    parent.children
                                      .filter((c) => c.slug === category.slug)
                                      .map(
                                        (sc) =>
                                          ids.push(sc.slug) &&
                                          sc.children.map((sub) =>
                                            ids.push(sub.slug),
                                          ),
                                      ),
                                  );

                                  if (e.target.checked) {
                                    setSelectedCategories([
                                      ...selectedCategories.filter(
                                        (sc) => !ids.includes(sc),
                                      ),
                                      ...ids,
                                    ]);
                                  } else {
                                    setSelectedCategories(
                                      selectedCategories.filter(
                                        (sc) => !ids.includes(sc),
                                      ),
                                    );
                                  }
                                }}
                              />
                              {category.children.length > 0 ? (
                                <button
                                  className={clsx(
                                    'btn btn-filter btn-nohover text-start align-items-start',
                                    {
                                      collapsed:
                                        isOpenSubCategory[category.slug],
                                    },
                                    { 'text-end': isAr },
                                  )}
                                  type="button"
                                  onClick={() => toggleCollapse(category.slug)}
                                >
                                  <div className="text-semiBold color-dark">
                                    {getLang(params, category.name)}
                                  </div>
                                </button>
                              ) : (
                                <button
                                  className={clsx(
                                    'btn btn-filter btn-nohover text-start align-items-start',
                                  )}
                                  type="button"
                                >
                                  <div className="text-semiBold color-dark">
                                    {getLang(params, category.name)}
                                  </div>
                                </button>
                              )}
                            </div>
                            <Collapse in={isOpenSubCategory[category.slug]}>
                              <ul
                                className={clsx(
                                  'list-filter p-0',
                                  isAr ? 'pe-5' : 'ps-5',
                                )}
                                dir={isAr ? 'rtl' : ''}
                              >
                                {category.children &&
                                  category.children.map((subcategory) => (
                                    <li key={subcategory.id}>
                                      <div className="d-flex align-items-start gap-2">
                                        <input
                                          className="form-check-input mt-1"
                                          type="checkbox"
                                          checked={selectedCategories.includes(
                                            subcategory.slug,
                                          )}
                                          onChange={(e) => {
                                            if (e.target.checked) {
                                              setSelectedCategories([
                                                ...selectedCategories,
                                                subcategory.slug,
                                              ]);
                                            } else {
                                              setSelectedCategories(
                                                selectedCategories.filter(
                                                  (c) => c !== subcategory.slug,
                                                ),
                                              );
                                            }
                                          }}
                                          id={subcategory.slug}
                                        />
                                        <label
                                          className="inner-label"
                                          htmlFor={subcategory.slug}
                                        >
                                          {getLang(params, subcategory.name)}
                                        </label>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </Collapse>
                          </Fragment>
                        ))}
                    </div>
                  </Collapse>
                </div>
              ))
            )}
          </div>
        </Collapse>
      </div>
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
          {!areArraysEqual(
            paramsBrands.map((id) => id.toString()),
            selectedBrands.map((id) => id.toString()),
          ) ? (
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
                value={searchBrand}
                onChange={(e) => setSearchBrand(e.target.value)}
                placeholder={t('search')}
                id=""
              />
              <button
                className={clsx('btn btn-nohover search-filter', {
                  arab: isAr,
                })}
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
              {isFetchingBrands ? (
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
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedBrands(
                              [...selectedBrands, brand.id].sort(),
                            );
                          } else {
                            setSelectedBrands(
                              selectedBrands.filter((b) => b !== brand.id),
                            );
                          }
                        }}
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
    </>
  );
}
