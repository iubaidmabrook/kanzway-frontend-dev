'use client';

import { searchRootCategories } from '@/api/category.api';
import useDebounce from '@/hooks/useDebounce';
import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import useModalCategoryStore from '@/store/modal-category.store';
import { TRootCategories } from '@/types/category.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import Link from 'next/link';
import { useParams, usePathname, useSearchParams } from 'next/navigation';
import { ChangeEvent, Fragment, useCallback, useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

type TModalCategoryProps = {
  categories: TRootCategories[];
};

function ModalCategory({ categories }: TModalCategoryProps) {
  const [searchValue, setSearchValue] = useState('');
  const { isOpen, onClose } = useModalCategoryStore();

  const params = useParams();
  const t = useI18n();
  const { isAr } = useLangClient();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const searchDebounce = useDebounce(searchValue, 300);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // const transformCategories = (
  //   inputCategories: TCategory[],
  //   parentId: string | null,
  // ): TCategory[] => {
  //   const transform: TCategory[] = [];

  //   inputCategories.forEach((category) => {
  //     if (category.parentId === parentId) {
  //       const childCategories = transformCategories(
  //         categories,
  //         category.id.toString(),
  //       );
  //       if (childCategories.length) {
  //         category.children = childCategories;
  //       }
  //       transform.push(category);
  //     }
  //   });

  //   return transform;
  // };

  // const transformedCategories = transformCategories(categoriesMemo, null);

  const [selectedIndex, setSelectedIndex] = useState(categories[0].id);

  const [filteredCategories, setFilteredCategories] =
    useState<TRootCategories[]>(categories);

  const handleSearchCategories = useCallback(async () => {
    if (searchDebounce !== '') {
      const data = await searchRootCategories({ search: searchDebounce });

      setFilteredCategories(data);
    } else {
      setFilteredCategories(categories);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchDebounce]);

  useEffect(() => {
    handleSearchCategories();
  }, [handleSearchCategories]);

  useEffect(() => {
    onClose();
  }, [onClose, pathname, searchParams]);

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      fullscreen
      // size="xl"
      // backdrop={false}
      className="border-0 modal-category"
      style={{ width: '100%', maxWidth: '100%' }}
    >
      <Modal.Body
        className="p-0 modal-category"
        dir={isAr ? 'rtl' : ''}
        style={{ width: '100%', maxWidth: '100%' }}
      >
        <div className="border-0">
          <div>
            <div className="row gx-0">
              <div className="col-lg-5">
                <div className="category-name">
                  <div className="cate-logo mb-5">
                    <img
                      src="/img/Logo/logo.svg"
                      className="img-fluid"
                    />
                  </div>
                  <Link
                    href="/shop"
                    className=""
                    onClick={onClose}
                  >
                    <h4 className="Mulish color-white text-extraBold">
                      {t('shop.allCategories')}
                    </h4>
                  </Link>
                  <div className="d-flex d-block d-lg-none flex-wrap column-gap-3 mt-2">
                    {filteredCategories.map((parent) => (
                      <Link
                        key={parent.id}
                        className={`nav-link ${selectedIndex === parent.id ? 'text-white' : ''}`}
                        // href={buildPath(parent.id, 1)}
                        href={`/shop?categories=${parent.slug}`}
                        onClick={onClose}
                        onMouseEnter={() => setSelectedIndex(parent.id)}
                      >
                        {getLang(params, parent.name)}
                      </Link>
                    ))}
                  </div>
                  <ul
                    className={clsx('nav nav-tabs border-0 mt-4 pe-0', {
                      'pe-0': isAr,
                    })}
                    id="cate-tab"
                    role="tablist"
                  >
                    {filteredCategories.map((parent) => (
                      <li
                        className={clsx('nav-item')}
                        role="presentation"
                        key={parent.id}
                      >
                        <Link
                          className={clsx(
                            `nav-link`,
                            selectedIndex === parent.id ? 'active' : '',
                            { arab: isAr },
                          )}
                          href={`/shop?categories=${parent.slug}`}
                          onClick={onClose}
                          onMouseEnter={() => setSelectedIndex(parent.id)}
                        >
                          {getLang(params, parent.name)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="category-value d-flex flex-column">
                  <div className="d-flex align-items-center category-value-search gap-3">
                    <div className="d-flex align-items-center gap-2 flex-grow-1">
                      <div className="flex-grow-1 cate-input">
                        <input
                          type="text"
                          className="form-control"
                          name=""
                          id=""
                          placeholder={t('shop.searchCategory')}
                          value={searchValue}
                          onChange={handleChange}
                        />
                      </div>
                      <button className="btn btn-red px-3">
                        <span className="icon-ico-search"></span>
                      </button>
                    </div>
                    <button
                      className="btn btn-nohover close-cate"
                      type="button"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={onClose}
                    >
                      <span className="icon-ico-close"></span>
                    </button>
                  </div>
                  <div
                    className="flex-grow-1 category-value-list"
                    id="cate-tab-content"
                    style={{ padding: '0px 50px 40px 50px' }}
                  >
                    <div
                      className="tab-pane fade show active"
                      id="cate-1-pane"
                      role="tabpanel"
                      aria-labelledby="cate-1"
                      tabIndex={0}
                    >
                      <ul className="list-cate-popup">
                        {filteredCategories
                          .filter((c) => c.id === selectedIndex)
                          .map(
                            (parentCategory) =>
                              parentCategory.children &&
                              parentCategory.children.map((category) => (
                                <li key={`${category.id}`}>
                                  <Link
                                    href={`/shop?categories=${category.slug}`}
                                    className="text-base text-semiBold mb-2 link-plc"
                                    onClick={onClose}
                                  >
                                    {getLang(params, category.name)}
                                  </Link>
                                  <div className="text-xxs">
                                    {category.children &&
                                      category.children
                                        .slice(0, 15)
                                        .map((sub, i) => (
                                          <Fragment key={sub.id}>
                                            <Link
                                              href={`/shop?categories=${sub.slug}`}
                                              className=" link-plc"
                                              onClick={onClose}
                                            >
                                              {getLang(params, sub.name)}
                                            </Link>
                                            {i !==
                                              category.children.slice(0, 15)
                                                .length -
                                                1 && (
                                              <span className=" text-white">
                                                ,{' '}
                                              </span>
                                            )}
                                          </Fragment>
                                        ))}
                                    {category.children &&
                                      category.children.length > 15 && (
                                        <span className=" ms-1 text-white">
                                          ...
                                        </span>
                                      )}
                                  </div>
                                </li>
                              )),
                          )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalCategory;
