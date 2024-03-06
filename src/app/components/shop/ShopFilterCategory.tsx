'use client';

/* eslint-disable no-nested-ternary */
import { searchRootCategories } from '@/api/category.api';
import useDebounce from '@/hooks/useDebounce';
import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
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
};

export default function ShopFilterCategory({
  categories,
}: TShopFilterCategoryProps) {
  // hooks
  const params = useParams();
  const router = useRouter();
  const sp = useSearchParams();
  const urlSearchParams = useMemo(() => new URLSearchParams(sp), [sp]);

  // locale
  const t = useScopedI18n('common');
  const { isAr } = useLangClient();

  // get all search params categories
  const paramsCategories = useMemo(
    () => (sp.getAll('categories').length > 0 ? sp.getAll('categories') : []),
    [sp],
  );

  // get all search params brands
  const paramsBrands = useMemo(
    () =>
      sp.getAll('brands').length > 0
        ? sp.getAll('brands').map((id) => Number(id))
        : [],
    [sp],
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

  // state
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [isOpenSubCategory, setIsOpenSubCategory] = useState<{
    [key: string]: boolean;
  }>({});
  const [search, setSearch] = useState<string>('');
  const [listCategory, setListCategory] =
    useState<TRootCategories[]>(categories);
  const [selectedCategories, setSelectedCategories] =
    useState<string[]>(selectedCategoryIds);

  // debounce
  const searchDebounce = useDebounce(search, 500);

  // toggle collapse category
  const toggleCollapse = useCallback((collapseKey: string) => {
    setIsOpenSubCategory((prev) => ({
      ...prev,
      [collapseKey]: !prev[collapseKey],
    }));
  }, []);

  const { isFetching } = useQuery(
    ['categories', searchDebounce, paramsBrands],
    () =>
      searchRootCategories({
        search: searchDebounce,
        brands: paramsBrands.map((id) => id.toString()),
      }),
    {
      initialData: categories,
      onSuccess(data) {
        setListCategory(
          data.sort((a) => (selectedCategories.includes(a.slug) ? -1 : 1)),
        );
      },
    },
  );

  // handle apply
  const handleApply = useCallback(() => {
    urlSearchParams.delete('categories');
    urlSearchParams.set('page', '1');
    const queryStrings: string[] = [];
    listCategory.map((parent) =>
      (parent.children.length === 0 &&
        selectedCategories.includes(parent.slug)) ||
      (parent.children.length > 0 &&
        parent.children.every((category) =>
          selectedCategories.includes(category.slug),
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

    router.replace(`/shop?${urlSearchParams}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlSearchParams, selectedCategories, router]);

  // check if two array are equals
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

  // mapping selected root categories to selected categories
  const [isSelectedChange, setIsSelectedChange] = useState(true);
  useEffect(() => {
    const tempIds: string[] = [];
    listCategory.map((parent) =>
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
    setIsSelectedChange(false);
  }, [paramsCategories, listCategory]);

  return (
    <>
      {/*  */}
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
          {!isSelectedChange &&
          !areArraysEqual(selectedCategories, selectedCategoryIds) ? (
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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
            {isFetching ? (
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
                          collapsed: isOpenSubCategory[`collapse${i}`],
                        },
                      )}
                      type="button"
                      onClick={() => toggleCollapse(`collapse${i}`)}
                    >
                      <div className="text-semiBold color-dark">
                        {getLang(params, parentCategory.name)}
                      </div>
                    </button>
                  </div>
                  <Collapse in={isOpenSubCategory[`collapse${i}`]}>
                    <div>
                      {parentCategory.children &&
                        parentCategory.children.map((category, j) => (
                          <Fragment key={category.id}>
                            <div className="d-flex align-items-start gap-2 mt-3 ps-4">
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
                              <button
                                className={clsx(
                                  'btn btn-filter btn-nohover text-start align-items-start',
                                  {
                                    collapsed:
                                      isOpenSubCategory[`collapse${i}${j}`],
                                  },
                                )}
                                type="button"
                                onClick={() =>
                                  toggleCollapse(`collapse${i}${j}`)
                                }
                              >
                                <div className="text-semiBold color-dark">
                                  {getLang(params, category.name)}
                                </div>
                              </button>
                            </div>
                            <Collapse
                              in={isOpenSubCategory[`collapse${i}${j}`]}
                            >
                              <ul
                                className={clsx(
                                  'list-filter p-0',
                                  isAr ? 'pe-4' : 'ps-5',
                                )}
                                dir={isAr ? 'rtl' : ''}
                              >
                                {category.children &&
                                  category.children.map((subcategory, k) => (
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
                                          id={`category-${i}${j}${k}`}
                                        />
                                        <label
                                          className="inner-label"
                                          htmlFor={`category-${i}${j}${k}`}
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
    </>
  );
}
