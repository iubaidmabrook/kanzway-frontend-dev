'use client';

import useCompareScrollPosition from '@/hooks/useCompareScrollPosition';
import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import { TLanguage } from '@/types/common.type';
import { TProduct } from '@/types/product.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import { Fragment, useMemo, useState } from 'react';
import SwiperCore from 'swiper';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import CompareSwiperPhoto from './CompareSwiperPhoto';
import CompareSwiperSticky from './CompareSwiperSticky';

type TSpecificationGroup = {
  name: TLanguage;
  slug: string;
};

type TCuttingConditionGroup = {
  name: TLanguage;
  slug: string;
  items: string[];
};

type TCompareListProps = {
  compare: TProduct[];
};

export default function CompareList({ compare }: TCompareListProps) {
  // hooks
  const params = useParams();
  const scrollPosition = useCompareScrollPosition();
  const t = useI18n();

  // locale
  const { isAr } = useLangClient();

  // swiper options
  const breakpoints: SwiperOptions['breakpoints'] = {
    0: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  const swiperOptions: SwiperOptions = {
    loop: false,
    breakpoints,
    modules: [Controller],
  };

  // nav from product (dynamic)
  const navFromProduct: {
    id: string;
    title: string;
    slug: string;
    type: string;
  }[] = useMemo(() => [], []);
  compare.map((product) =>
    product.properties.map((property) => {
      const id = `section-${property.name.en}`
        .replace(/\s+/g, '-')
        .toLowerCase();
      if (!navFromProduct.map((nav) => nav.id).includes(id)) {
        navFromProduct.push({
          id,
          title: getLang(params, property.name),
          slug: property.name.en.replace(/\s+/g, '-').toLowerCase(),
          type: property.type,
        });
      }

      return property;
    }),
  );

  // grouping specification
  const featureGroup: TSpecificationGroup[] = [];
  compare.map((product) =>
    product.properties
      .filter((property) => property.name.en === 'Feature')
      .forEach((property) =>
        property.groups.forEach((group) => {
          group.items.map((item) => {
            if (
              !featureGroup
                .map((p) => p.slug)
                .includes(
                  `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}`,
                )
            ) {
              featureGroup.push({
                name: item.description,
                slug: `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}`,
              });
            }
            return item;
          });
        }),
      ),
  );
  const specificationGroup: TSpecificationGroup[] = [];
  compare.map((product) =>
    product.properties
      .filter((property) => property.name.en === 'Specification')
      .forEach((property) =>
        property.groups.forEach((group) => {
          group.items.map((item) => {
            if (
              !specificationGroup
                .map((p) => p.slug)
                .includes(
                  `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}`,
                )
            ) {
              specificationGroup.push({
                name: item.description,
                slug: `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}`,
              });
            }
            return item;
          });
        }),
      ),
  );

  // grouping cutting condition
  const cuttingConditionGroup: TCuttingConditionGroup[] = [];
  compare.map((product) =>
    product.properties
      .filter((property) => property.name.en === 'Cutting Condition')
      .map((property) =>
        property.groups
          .map((group) => {
            if (
              !cuttingConditionGroup.map((v) => v.slug).includes(group.name.en)
            ) {
              cuttingConditionGroup.push({
                name: group.name,
                items: [],
                slug: group.name.en,
              });
            }
            return group;
          })
          .forEach((group) => {
            cuttingConditionGroup.forEach((g, i) => {
              if (g.slug === group.name.en) {
                group.items.forEach((item) => {
                  if (!g.items.includes(item.description.en)) {
                    cuttingConditionGroup[i].items.push(item.description.en);
                  }
                });
              }
            });
          }),
      ),
  );

  // state
  const [swiperSticky, setSwiperSticky] = useState<SwiperCore>();
  const [swiperPhoto, setSwiperPhoto] = useState<SwiperCore>();
  const [swiperWhatInTheBox, setSwiperWhatInTheBox] = useState<SwiperCore>();
  const [swiperDocument, setSwiperDocument] = useState<SwiperCore>();
  const [swiperReview, setSwiperReview] = useState<SwiperCore>();
  const [swiperFeature, setSwiperFeature] = useState<
    {
      id: number;
      swiper: SwiperCore | undefined;
    }[]
  >(specificationGroup.map((_, i) => ({ id: i, swiper: undefined })));
  const [swiperSpecification, setSwiperSpecification] = useState<
    {
      id: number;
      swiper: SwiperCore | undefined;
    }[]
  >(specificationGroup.map((_, i) => ({ id: i, swiper: undefined })));
  const [swiperCuttings, setSwiperCuttings] = useState<
    {
      id: number;
      swiper: SwiperCore | undefined;
    }[]
  >(cuttingConditionGroup.map((_, i) => ({ id: i, swiper: undefined })));

  return (
    <>
      <div
        dir={isAr ? 'rtl' : ''}
        id="sticky-product"
        className={clsx('product-sticky', { showing: scrollPosition > 456 })}
      >
        <div className="container px-xl-5 px-3 ">
          <Swiper
            {...swiperOptions}
            onSwiper={setSwiperSticky}
            controller={{
              control: swiperPhoto,
            }}
          >
            <div className="swiper-wrapper">
              {compare.map((product) => (
                <SwiperSlide
                  className="swiper-slide"
                  key={product.id}
                >
                  <CompareSwiperSticky product={product} />
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
          <div className="line-compare mb-3">
            <div className="indicator" />
          </div>
        </div>
      </div>
      <div
        className="container px-xl-5 px-3 pb-5"
        dir={isAr ? 'rtl' : ''}
        style={{ marginTop: '-236px' }}
      >
        <div className="scrollspy-example">
          <section id="section-photo">
            <Swiper
              {...swiperOptions}
              onSwiper={setSwiperPhoto}
              controller={{
                control: [
                  swiperSticky!,
                  swiperWhatInTheBox!,
                  swiperDocument!,
                  swiperReview!,
                  ...swiperFeature.map((s) => s.swiper!),
                  ...swiperCuttings.map((s) => s.swiper!),
                  ...swiperSpecification.map((s) => s.swiper!),
                ],
              }}
            >
              <div className="swiper-wrapper">
                {compare.map((product) => (
                  <SwiperSlide
                    className="swiper-slide"
                    key={product.id}
                  >
                    <CompareSwiperPhoto product={product} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <div className="line-compare mt-0 pt-0">
              <div className="indicator" />
            </div>
          </section>
          {navFromProduct.map((nav, n) => (
            <Fragment key={nav.id}>
              <section
                id={nav.id}
                className=""
              >
                <p className="text-bold Mulish color-dark">
                  {nav.title}
                  {/* {getLang(params, property.name)} */}
                </p>
                {nav.slug === 'feature' &&
                  featureGroup.map((fg, i) => (
                    <Swiper
                      {...swiperOptions}
                      // onSwiper={setSwiperFeature}
                      onSwiper={(swiper) =>
                        setSwiperFeature((prev) => {
                          if (swiper) {
                            prev[i].swiper = swiper;
                          }

                          return prev;
                        })
                      }
                      controller={{ control: swiperPhoto }}
                    >
                      <div className="swiper-wrapper">
                        {compare.map((product) => (
                          <SwiperSlide
                            key={product.id}
                            className="swiper-slide"
                          >
                            <div className="row g-3">
                              {product.properties.map(
                                (productProperty) =>
                                  productProperty.type === nav.type &&
                                  productProperty.name.en === nav.title &&
                                  productProperty.groups.map((group) =>
                                    group.items.filter(
                                      (item) =>
                                        `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}` ===
                                        fg.slug,
                                    ).length > 0
                                      ? group.items
                                          .filter(
                                            (item) =>
                                              `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}` ===
                                              fg.slug,
                                          )
                                          .map((item, index) => (
                                            <div
                                              key={`${productProperty.name}${group.id}${index.toString()}`}
                                              className="col-sm-12 "
                                            >
                                              <div className="d-flex align-items-start gap-3 compare-feature">
                                                <div className="img-fature">
                                                  <img
                                                    src={item.image?.url}
                                                    className="img-fluid"
                                                    onContextMenu={(e) =>
                                                      e.preventDefault()
                                                    }
                                                  />
                                                </div>
                                                <div className="text-xxs Mulish">
                                                  {getLang(params, item.value1)}
                                                </div>
                                              </div>
                                            </div>
                                          ))
                                      : null,
                                  ),
                              )}
                            </div>
                          </SwiperSlide>
                        ))}
                      </div>
                    </Swiper>
                  ))}
                {nav.slug === 'what-in-the-box' && (
                  <Swiper
                    {...swiperOptions}
                    onSwiper={setSwiperWhatInTheBox}
                    controller={{ control: swiperPhoto }}
                  >
                    <div className="swiper-wrapper">
                      {compare.map((product) => (
                        <SwiperSlide
                          key={product.id}
                          className="swiper-slide"
                        >
                          <div className="row g-3">
                            {product.properties.map(
                              (productProperty) =>
                                productProperty.type === nav.type &&
                                productProperty.name.en === nav.title &&
                                productProperty.groups.map((group) =>
                                  group.items.map((item, index) => (
                                    <div
                                      key={`${productProperty.name}${group.id}${index.toString()}`}
                                      className="col-sm-12 "
                                    >
                                      <div className="d-flex align-items-start gap-3 compare-feature">
                                        <div className="img-fature">
                                          <img
                                            src={item.image?.url}
                                            className="img-fluid"
                                            onContextMenu={(e) =>
                                              e.preventDefault()
                                            }
                                          />
                                        </div>
                                        <div className="text-xxs Mulish">
                                          {getLang(params, item.value1)}
                                        </div>
                                      </div>
                                    </div>
                                  )),
                                ),
                            )}
                          </div>
                        </SwiperSlide>
                      ))}
                    </div>
                  </Swiper>
                )}

                {nav.slug === 'specification' &&
                  specificationGroup.map((sg, i) => (
                    <Swiper
                      {...swiperOptions}
                      modules={[Controller]}
                      onSwiper={(swiper) =>
                        setSwiperSpecification((prev) => {
                          if (swiper) {
                            prev[i].swiper = swiper;
                          }

                          return prev;
                        })
                      }
                      controller={{
                        control: swiperPhoto,
                      }}
                      key={`${i.toString()}`}
                    >
                      {compare.map((product) => (
                        <SwiperSlide
                          key={product.id}
                          className="swiper-slide"
                        >
                          {product.properties
                            .filter(
                              (productProperty) =>
                                productProperty.type === 'table' &&
                                productProperty.name.en === 'Specification',
                            )
                            .map((productProperty) =>
                              productProperty.groups.map((group, j) =>
                                group.items.filter(
                                  (item) =>
                                    `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}` ===
                                    sg.slug,
                                ).length > 0 ? (
                                  group.items
                                    .filter(
                                      (item) =>
                                        `${item.description.en}-${item.unit1.en ? item.unit1.en : ''}` ===
                                        sg.slug,
                                    )
                                    .map((item) => (
                                      <Fragment key={`${j.toString()}`}>
                                        {i !== 0 && <hr className=" mb-4" />}
                                        <div className="spec-item">
                                          <div className="text-xxxs color-gray-60 Mulish text-medium">
                                            {getLang(
                                              params,
                                              productProperty.fields[0],
                                            )}
                                          </div>
                                          <p className="text-xxs Mulish text-bold color-dark">
                                            {getLang(params, item.description)}
                                            {/* {getLang(params, sg.name)} */}
                                          </p>
                                        </div>
                                        <div className="spec-item">
                                          <div className="text-xxxs color-gray-60 Mulish text-medium">
                                            {getLang(
                                              params,
                                              productProperty.fields[1],
                                            )}
                                          </div>
                                          <p className="text-xxs Mulish text-bold color-dark">
                                            {item.value1.en
                                              ? getLang(params, item.value1)
                                              : ''}{' '}
                                            {item.unit1.en
                                              ? getLang(params, item.unit1)
                                              : ''}
                                          </p>
                                        </div>
                                        {productProperty.fields[2] && (
                                          <div className="spec-item">
                                            <div className="text-xxxs color-gray-60 Mulish text-medium">
                                              {getLang(
                                                params,
                                                productProperty.fields[2],
                                              )}
                                            </div>
                                            <p className="text-xxs Mulish text-bold color-dark">
                                              {item.value2?.en
                                                ? getLang(params, item.value2)
                                                : ''}{' '}
                                              {item.unit2?.en
                                                ? getLang(params, item.unit2)
                                                : ''}
                                            </p>
                                          </div>
                                        )}
                                        {productProperty.fields[3] && (
                                          <div className="spec-item">
                                            <div className="text-xxxs color-gray-60 Mulish text-medium">
                                              {getLang(
                                                params,
                                                productProperty.fields[3],
                                              )}
                                            </div>
                                            <p className="text-xxs Mulish text-bold color-dark">
                                              {item.value3?.en
                                                ? getLang(params, item.value3)
                                                : ''}{' '}
                                              {item.unit3?.en
                                                ? getLang(params, item.unit3)
                                                : ''}
                                            </p>
                                          </div>
                                        )}
                                      </Fragment>
                                    ))
                                ) : (
                                  <Fragment key={`${j.toString()}`}>
                                    {i !== 0 && <hr className=" mb-4" />}
                                    <div className="spec-item">
                                      <div className="text-xxxs color-gray-60 Mulish text-medium">
                                        {getLang(
                                          params,
                                          productProperty.fields[0],
                                        )}
                                      </div>
                                      <p className="text-xxs Mulish text-bold color-dark">
                                        {/* {getLang(params, item.description)} */}
                                        {getLang(params, sg.name)}
                                      </p>
                                    </div>
                                    <div className="spec-item">
                                      <div className="text-xxxs color-gray-60 Mulish text-medium">
                                        {getLang(
                                          params,
                                          productProperty.fields[1],
                                        )}
                                      </div>
                                      <p className="text-xxs Mulish text-bold color-dark">
                                        -
                                      </p>
                                    </div>
                                    {productProperty.fields[2] && (
                                      <div className="spec-item">
                                        <div className="text-xxxs color-gray-60 Mulish text-medium">
                                          {getLang(
                                            params,
                                            productProperty.fields[2],
                                          )}
                                        </div>
                                        <p className="text-xxs Mulish text-bold color-dark">
                                          -
                                        </p>
                                      </div>
                                    )}
                                    {productProperty.fields[3] && (
                                      <div className="spec-item">
                                        <div className="text-xxxs color-gray-60 Mulish text-medium">
                                          {getLang(
                                            params,
                                            productProperty.fields[3],
                                          )}
                                        </div>
                                        <p className="text-xxs Mulish text-bold color-dark">
                                          -
                                        </p>
                                      </div>
                                    )}
                                  </Fragment>
                                ),
                              ),
                            )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ))}
                {nav.slug === 'cutting-condition' &&
                  cuttingConditionGroup.map((ccg, i) => (
                    <Swiper
                      key={ccg.slug}
                      {...swiperOptions}
                      onSwiper={(swiper) =>
                        setSwiperCuttings((prev) => {
                          if (swiper) {
                            prev[i].swiper = swiper;
                          }

                          return prev;
                        })
                      }
                      controller={{
                        control: swiperPhoto,
                      }}
                    >
                      {compare.map((product) => (
                        <SwiperSlide
                          key={product.id}
                          className="swiper-slide"
                        >
                          {ccg.items.map((ccgItem, j) =>
                            product.properties
                              .filter(
                                (productProperty) =>
                                  productProperty.type === 'table' &&
                                  productProperty.name.en ===
                                    'Cutting Condition',
                              )
                              .map((productProperty) =>
                                productProperty.groups
                                  .filter((group) => group.name.en === ccg.slug)
                                  .map((group, k) =>
                                    group.items.filter(
                                      (item) => item.description.en === ccgItem,
                                    ).length > 0 ? (
                                      group.items
                                        .filter(
                                          (item) =>
                                            item.description.en === ccgItem,
                                        )
                                        .map((item) => (
                                          <Fragment key={`${k.toString()}`}>
                                            {j !== 0 && <hr />}
                                            {j === 0 && (
                                              <p className="text-medium color-dark text-xxs">
                                                {getLang(params, ccg.name)}
                                              </p>
                                            )}
                                            <div className="spec-item">
                                              <div className="text-xxxs color-gray-60 Mulish text-medium">
                                                {getLang(
                                                  params,
                                                  productProperty.fields[0],
                                                )}
                                              </div>
                                              <p className="text-xxs Mulish text-bold color-dark">
                                                {ccgItem}
                                              </p>
                                            </div>
                                            <div className="spec-item">
                                              <div className="text-xxxs color-gray-60 Mulish text-medium">
                                                {getLang(
                                                  params,
                                                  productProperty.fields[1],
                                                )}
                                              </div>
                                              <p className="text-xxs Mulish text-bold color-dark">
                                                {getLang(params, item.value1)}{' '}
                                                {getLang(params, item.unit1)}
                                              </p>
                                            </div>
                                            {productProperty.fields[2] && (
                                              <div className="spec-item">
                                                <div className="text-xxxs color-gray-60 Mulish text-medium">
                                                  {getLang(
                                                    params,
                                                    productProperty.fields[2],
                                                  )}
                                                </div>
                                                <p className="text-xxs Mulish text-bold color-dark">
                                                  {item.value2 &&
                                                    getLang(
                                                      params,
                                                      item.value2,
                                                    )}{' '}
                                                  {item.unit2 &&
                                                    getLang(params, item.unit2)}
                                                </p>
                                              </div>
                                            )}
                                            {productProperty.fields[3] && (
                                              <div className="spec-item">
                                                <div className="text-xxxs color-gray-60 Mulish text-medium">
                                                  {getLang(
                                                    params,
                                                    productProperty.fields[3],
                                                  )}
                                                </div>
                                                <p className="text-xxs Mulish text-bold color-dark">
                                                  {item.value3 &&
                                                    getLang(
                                                      params,
                                                      item.value3,
                                                    )}{' '}
                                                  {item.unit3 &&
                                                    getLang(params, item.unit3)}
                                                </p>
                                              </div>
                                            )}
                                          </Fragment>
                                        ))
                                    ) : (
                                      <Fragment key={`${k.toString()}`}>
                                        {j !== 0 && <hr />}
                                        {j === 0 && (
                                          <p className="text-medium color-dark text-xxs">
                                            {getLang(params, ccg.name)}
                                          </p>
                                        )}
                                        <div className="spec-item">
                                          <div className="text-xxxs color-gray-60 Mulish text-medium">
                                            {getLang(
                                              params,
                                              productProperty.fields[0],
                                            )}
                                          </div>
                                          <p className="text-xxs Mulish text-bold color-dark">
                                            {ccgItem}
                                          </p>
                                        </div>
                                        <div className="spec-item">
                                          <div className="text-xxxs color-gray-60 Mulish text-medium">
                                            {getLang(
                                              params,
                                              productProperty.fields[1],
                                            )}
                                          </div>
                                          <p className="text-xxs Mulish text-bold color-dark">
                                            -
                                          </p>
                                        </div>
                                        {productProperty.fields[2] && (
                                          <div className="spec-item">
                                            <div className="text-xxxs color-gray-60 Mulish text-medium">
                                              {getLang(
                                                params,
                                                productProperty.fields[2],
                                              )}
                                            </div>
                                            <p className="text-xxs Mulish text-bold color-dark">
                                              -
                                            </p>
                                          </div>
                                        )}
                                        {productProperty.fields[3] && (
                                          <div className="spec-item">
                                            <div className="text-xxxs color-gray-60 Mulish text-medium">
                                              {getLang(
                                                params,
                                                productProperty.fields[3],
                                              )}
                                            </div>
                                            <p className="text-xxs Mulish text-bold color-dark">
                                              -
                                            </p>
                                          </div>
                                        )}
                                        {/* {j !== ccg.items.length - 1 && <hr />} */}
                                      </Fragment>
                                    ),
                                  ),
                              ),
                          )}
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ))}
              </section>
              {n !== navFromProduct.length - 1 && <hr className=" my-4" />}
            </Fragment>
          ))}

          <hr className="my-4" />
          <section id="section-document">
            <p className="text-bold Mulish color-dark">
              {t('common.document')}
            </p>
            <Swiper
              {...swiperOptions}
              onSwiper={setSwiperDocument}
              controller={{ control: swiperPhoto }}
            >
              <div className="swiper-wrapper">
                {compare.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="swiper-slide"
                  >
                    {product.documents.map((document) => (
                      <div
                        className="document-download mb-3"
                        key={document.id}
                      >
                        <span>{getLang(params, document.name)}</span>
                        <a href={document.url}>
                          <span className="icon-ico-download" />
                        </a>
                      </div>
                    ))}
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </section>
          <hr className="my-4" />
          <section id="section-review">
            <p className="text-bold Mulish color-dark">{t('common.review')}</p>
            <Swiper
              {...swiperOptions}
              onSwiper={setSwiperReview}
              controller={{ control: swiperPhoto }}
            >
              <div className="swiper-wrapper">
                {compare.map((product) => (
                  <SwiperSlide
                    key={product.id}
                    className="swiper-slide"
                  >
                    <div className="box-review  mb-3 mb-sm-0">
                      <p className="Mulish text-xs text-bold mb-2">
                        {t('common.averageUserRating')}
                      </p>
                      <div className="d-flex align-items-center gap-2 mb-3">
                        <div className="img-rating">
                          <img
                            src="/img/Icon/star.svg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="text-rating">4.9</div>
                      </div>
                      <div className="Mulish text-xs ">
                        999.999.999+ {t('common.review')}
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </section>
        </div>
      </div>
    </>
  );
}
