'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment } from 'react';

export default function AboutVisionMission() {
  const t = useI18n();
  // const { onOpen } = useModalVideoStore();
  const { isAr } = useLangClient();
  return (
    <section
      className=" main-section pt-0"
      dir={isAr ? 'rtl' : ''}
    >
      <div className="container">
        <div className="compro">
          {/* <button
            className="btn btn-nohover btn-popup-video"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#video-compro"
            onClick={onOpen}
          >
            <img
              src="/img/Icon/youtube.svg"
              className="img-fluid"
            />
          </button> */}
          <Image
            alt="about-us"
            src="/img/img-thumb.jpg"
            className="img-fluid"
            fill
          />
        </div>
        <hr />
        <div className="row pt-5 g-4">
          <div className="col-lg-5">
            <h1 className="text-extraBold Mulish color-dark">
              {t('common.our')} <br />
              {t('common.vision')} <br />
              &amp; {t('common.mission')}
            </h1>
          </div>
          <div className="col-lg-7 d-flex flex-column gap-5">
            <div className="">
              <div
                className={clsx(
                  'mb-3',
                  isAr ? 'ttl-offset-section-arab' : 'ttl-offset-section',
                )}
              >
                {t('common.vision')}
              </div>
              {Array.from({ length: 5 }).map((_, i) => (
                <Fragment key={`${i.toString()}`}>
                  <div className="d-flex gap-3 color-dark text-md">
                    <span>
                      {/* @ts-expect-error */}
                      {t(`common.number.${i}`)}.
                    </span>
                    <p className="">
                      {/* @ts-expect-error */}
                      {t(`about.vision.${i}.value`)}
                    </p>
                  </div>
                  {i === 2 &&
                    Array.from({ length: 4 }).map((__, j) => (
                      <p
                        className={clsx('ms-5 color-dark text-md', {
                          'me-4': isAr,
                        })}
                        key={`${j.toString()}`}
                      >
                        <span>-</span> {/* @ts-expect-error */}
                        {t(`about.vision.${i}.commitment.${j}`)}
                      </p>
                    ))}
                </Fragment>
              ))}
            </div>
            <div className="">
              <div
                className={clsx(
                  'mb-3',
                  isAr ? 'ttl-offset-section-arab' : 'ttl-offset-section',
                )}
              >
                {t('common.mission')}
              </div>
              <div className="color-dark text-md d-flex flex-column">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    className="d-flex gap-3"
                    key={`${i.toString()}`}
                  >
                    <span>
                      {/* @ts-expect-error */}
                      {t(`common.number.${i}`)}.
                    </span>
                    <p
                      key={`${i.toString()}`}
                      className=""
                    >
                      {/* @ts-expect-error */}
                      {t(`about.mission.${i}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
