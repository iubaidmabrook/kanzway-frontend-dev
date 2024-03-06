'use client';

// React
import React from 'react';

// Next
import Link from 'next/link';
import Image from 'next/image';

// Components
import { Form } from 'react-bootstrap';

// Locales
import { useI18n } from '@/locales/client';

function ProductReview() {
  // Hooks
  const t = useI18n();

  return (
    <section
      id="section-review"
      className="secion-pd"
    >
      <p className="text-bold Mulish color-dark">{t('common.review')}</p>
      <div className="d-flex justify-content-between flex-wrap mb-5">
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

        <div className="col-xl-4 col-lg-5 col-sm-4 col-8">
          <div className="row gx-0 justify-content-sm-end align-items-center">
            <div className="col-xl-3 col-sm-3 col-3">
              <div className="text-xs Mulish">{t('common.rating')}</div>
            </div>
            <div className="col-xl-7 col-sm-8 col-8">
              <Form.Select
                aria-label="Default select example"
                defaultValue=""
              >
                <option value="">{t('common.allRating')}</option>
                <option value="1">5 Starts</option>
                <option value="2">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">2 Stars</option>
                <option value="5">1 Stars</option>
              </Form.Select>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-items">
        <div className="d-flex gap-3 mb-3">
          <div className="img-review">
            <Image
              alt="photo"
              src="/img/review-1.jpg"
              className="img-fluid"
              onContextMenu={(e) => e.preventDefault()}
              width={100}
              height={100}
            />
          </div>
          <div className="reviewer-info">
            <div className="text-xs Mulish color-dark mb-2">
              Darrell Steward
            </div>
            <div className="text-xxs color-gray-60">11 Febuari 2023</div>
          </div>
        </div>
        <div className="img-rating mb-3">
          <img
            src="/img/Icon/star.svg"
            className="img-fluid"
          />
        </div>
        <p className="text-xs Mulish">
          The product is exactly as described – excellent quality, swift
          delivery, and the online shopping experience was a breeze. Kudos to
          the team for top-notch service!
        </p>
      </div>
      <hr className="my-4" />
      <div className="reviews-items">
        <div className="d-flex gap-3 mb-3">
          <div className="img-review">
            <Image
              alt="photo"
              src="/img/review-2.jpg"
              className="img-fluid"
              onContextMenu={(e) => e.preventDefault()}
              width={100}
              height={100}
            />
          </div>
          <div className="reviewer-info">
            <div className="text-xs Mulish color-dark mb-2">
              Savannah Nguyen
            </div>
            <div className="text-xxs color-gray-60">11 Febuari 2023</div>
          </div>
        </div>
        <div className="img-rating mb-3">
          <Image
            alt="photo"
            src="/img/Icon/star.svg"
            className="img-fluid"
            onContextMenu={(e) => e.preventDefault()}
            width={100}
            height={100}
          />
        </div>
        <p className="text-xs Mulish">
          I was extremely satisfied with my recent purchase! The product
          surpassed my expectations with top-notch quality. Ordering was
          seamless, and delivery was prompt. I will definitely purchase again!
        </p>
        <div className="d-flex gap-2">
          <div className="img-list-review">
            <Image
              alt="image"
              src="/img/list-1.jpg"
              className="img-fluid"
              onContextMenu={(e) => e.preventDefault()}
              width={100}
              height={100}
            />
          </div>
          <div className="img-list-review">
            <Image
              alt="image "
              src="/img/list-3.jpg"
              className="img-fluid"
              onContextMenu={(e) => e.preventDefault()}
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
      {false && (
        <Link
          href="/shop/product/review"
          className="Mulish color-red tex-xs text-bold d-inline-block mt-4"
        >
          {t('common.showMoreReview')}
        </Link>
      )}
    </section>
  );
}

export default ProductReview;
