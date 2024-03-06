'use client';

// import {
//   getLandingPageCategory,
//   getLandingPageCategoryProduct,
// } from '@/api/landingPage/landingCategoryProduct.api';
import { useCurrentLocale, useI18n } from '@/locales/client';
import { TProduct, TproductCategory } from '@/types/category.type';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
// import { useMemo } from 'react';
// import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function SwiperCategory({ categories }: { categories: TproductCategory[] }) {
  const bgImage1 = {
    backgroundImage: `url(img/bg-1.jpg)`,
    width: '100%',
    height: '450px',
  };
  // const bgImage2 = {
  //   backgroundImage: `url(img/bg-2.jpg)`,
  //   width: '100%',
  //   height: '100%',
  // };
  // const bgImage3 = {
  //   backgroundImage: `url(img/bg-3.jpg)`,
  //   width: '100%',
  //   height: '100%',
  // };
  const bgImage4 = {
    backgroundImage: `url(img/bg-4.jpg)`,
    width: '100%',
    height: '450px',
  };

  const currentLocale = useCurrentLocale();
  const pathname = usePathname();
  const t = useI18n();

  const chunkSize = 2; // <-- decides number of objects in each group
  const chunks: any[] = [];

  // const categoriesMemo = useMemo(() => categories, [categories]);

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
  //         category.childs = childCategories;
  //       }
  //       transform.push(category);
  //     }
  //   });

  //   return transform;
  // };

  // const transformedCategories = transformCategories(categoriesMemo, null);

  for (let i = 0; i < categories?.length; i += chunkSize) {
    const chunk = categories?.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  // setCategoryList(chunks);

  const getProductCategory = (products: TProduct[]) => {
    // id: Number
    // const categoryProductDataList = await getLandingPageCategoryProduct(id);
    // const productCategory = categoryProductDataList?.data.content;
    // return productCategory?.slice(0, 2).map((items, index)
    return products.slice(0, 2).map((items, index) => (
      <div
        className={`col-xl-12 col-sm-6  ${index === 0 ? 'justify-content-start' : 'justify-content-end'}`}
        key={`${index.toString()}`}
      >
        <div className="cate-items ">
          <div className="d-flex gap-3">
            <div className="img-cate-home">
              <Image
                // src={`https://picsum.photos/282/282?random=${index}`}
                src={items.image.url}
                className="img-fluid"
                height={282}
                width={282}
                objectFit="contain"
                alt={items.name[currentLocale]}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            <div className="home-cate-desc">
              <div className="info-prod">
                <p className="text-xs text-semiBold text-uppercase text-dark mb-1 product-name-category">
                  {/* {`Product ${index + 1}`} */}
                  {items.name?.[currentLocale]}
                </p>
                <div className="color-default text-xs text-uppercase">
                  {/* LUMOS II */}
                  {items.brand.name[currentLocale]}
                </div>
                <p className="text-md text-semiBold text-uppercase text-dark mb-1">
                  {/* SAR 240 */}
                  {/* {items.code} */}
                </p>
              </div>
              <Link
                href={`/shop/product/${items.slug}`}
                className="btn btn-sm btn-secondary"
              >
                {t('productCategory.seeProduct')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  // const renderSwipeCategory = () => {
  //   return chunks.map((item, index) => (
  //     <SwiperSlide
  //       className="swiper-slide"
  //       key={`${index.toString()}`}
  //     >
  //       <div className="row g-4">
  //         <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-0">
  //           <div
  //             className="home-cate bg "
  //             style={bgImage4}
  //           >
  //             <div className="p-lg-2">
  //               <h4 className="color-white Mulish text-bold mb-4">
  //                 {item[0].name?.[currentLocale]?.length > 43
  //                   ? `${item[0].name?.[currentLocale].substring(0, 40)}...`
  //                   : item[0].name?.[currentLocale]}
  //               </h4>
  //               <p className="color-white text-md mb-lg-5">
  //                 {item[0].description?.[currentLocale]?.length > 103
  //                   ? `${item[0].description?.[currentLocale].substring(0, 100)}
  //                     ...`
  //                   : item[0].description?.[currentLocale]}
  //               </p>
  //               <Link
  //                 href={{
  //                   pathname: `${pathname}/shop`,
  //                   query: {
  //                     category: item[0].id,
  //                   },
  //                 }}
  //                 className="btn btn-primary btn-sm"
  //               >
  //                 {t('productCategory.explore')}
  //               </Link>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-1">
  //           <div
  //             className="bg center rounded"
  //             style={bgImage1}
  //           >
  //             <img
  //               src={
  //                 item[0].image
  //                   ? item[0].image.url
  //                   : 'https://placehold.co/583x519'
  //               }
  //               className="img-fluid rounded"
  //               style={{ width: '100%', height: '100%', objectFit: 'cover' }}
  //             />
  //           </div>
  //         </div>
  //         {item.length > 1 && (
  //           <>
  //             <div className="col-lg-12 col-xl-4 order-xl-2">
  //               <div className="row custom-gutter justify-content-between">
  //                 {getProductCategory(item[0].products)}
  //                 {/* {getProductCategory(item[0].id)} */}
  //               </div>
  //             </div>
  //             <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-3">
  //               <div
  //                 className="bg center rounded"
  //                 style={bgImage2}
  //               >
  //                 <img
  //                   src={
  //                     item[1].image
  //                       ? item[1].image.url
  //                       : 'https://placehold.co/583x519'
  //                   }
  //                   className="img-fluid rounded"
  //                   style={{
  //                     width: '100%',
  //                     height: '100%',
  //                     objectFit: 'cover',
  //                   }}
  //                 />
  //               </div>
  //             </div>
  //             <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-5">
  //               <div
  //                 className="home-cate bg "
  //                 style={bgImage3}
  //               >
  //                 <div className="p-lg-0">
  //                   <h4 className="color-white Mulish text-bold mb-4">
  //                     {item[1].name?.[currentLocale]?.length > 43
  //                       ? `${item[1].name?.[currentLocale].substring(0, 40)}...`
  //                       : item[1].name?.[currentLocale]}
  //                   </h4>
  //                   <p className="color-white text-md mb-lg-5">
  //                     {item[1].description?.[currentLocale]?.length > 103
  //                       ? `${item[1].description?.[currentLocale].substring(0, 100)}...`
  //                       : item[1].description?.[currentLocale]}
  //                   </p>
  //                   <Link
  //                     href={{
  //                       pathname: `${pathname}/shop`,
  //                       query: {
  //                         category: item[1].id,
  //                       },
  //                     }}
  //                     className="btn btn-primary btn-sm"
  //                   >
  //                     {t('productCategory.explore')}
  //                   </Link>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="col-lg-12 col-xl-4 order-xl-4">
  //               <div className="row custom-gutter justify-content-between">
  //                 {getProductCategory(item[1].products)}
  //                 {/* {getProductCategory(item[0].id)} */}
  //               </div>
  //             </div>
  //           </>
  //         )}
  //       </div>
  //     </SwiperSlide>
  //   ));
  // };

  const renderNewSwipperCategory = () => {
    return categories.map((items, index) => (
      <SwiperSlide
        className="swiper-slide"
        key={`${index.toString()}`}
      >
        <div className="row g-4">
          <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-0">
            <div
              className="home-cate bg "
              style={bgImage4}
            >
              <div
                className="p-lg-2"
                style={{ height: '400px' }}
              >
                <h4 className="color-white Mulish text-bold mb-4 category-title">
                  {items.name?.[currentLocale]}
                </h4>
                <p className="color-white text-md mb-lg-5 category-subtitle">
                  {items.description?.[currentLocale]}
                </p>
                <Link
                  href={{
                    pathname: `${pathname}/shop`,
                    query: {
                      category: items.id,
                    },
                  }}
                  className="btn btn-primary btn-sm"
                >
                  {t('productCategory.explore')}
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-sm-6 col-lg-6 order-xl-1">
            <div
              className="bg center rounded"
              style={bgImage1}
            >
              <img
                src={
                  items.image ? items.image.url : 'https://placehold.co/583x519'
                }
                className="img-fluid rounded"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-lg-12 col-xl-4 order-xl-2">
            <div className="row custom-gutter justify-content-between">
              {getProductCategory(items.products)}
            </div>
          </div>
        </div>
      </SwiperSlide>
    ));
  };

  return (
    <Swiper
      loop={false}
      pagination={{
        type: 'bullets',
        el: '#category.swiper-pagination',
      }}
      modules={[Pagination]}
      className="swiper category-home"
      spaceBetween={50}
    >
      <div className="swiper-wrapper">{renderNewSwipperCategory()}</div>
    </Swiper>
  );
}

export default SwiperCategory;
