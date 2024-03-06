'use client';

import ModalVideo from '@/app/components/ModalVideo';
// import useModalVideoStore from '@/store/modalVideoStore';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';

function LpAboutUs() {
  // const { onOpen } = useModalVideoStore();
  const pathname = usePathname();
  const t = useI18n();
  const { isAr } = useLangClient();

  return (
    <>
      <ModalVideo />
      <section className="main-section section-about">
        <div
          className="container"
          dir={isAr ? 'rtl' : ''}
        >
          <div className="ttl-section mb-4">{t('landingAbout.about')}</div>
          <div className="row justify-content-between ">
            <div className="col-lg-6">
              <h2 className="Mulish color-dark text-extraBold">
                {t('landingAbout.title')}
              </h2>
            </div>
            <div className="col-lg-5 ps-xl-5">
              <p className="text-md color-dark mb-4 mb-xl-5">
                {t('landingAbout.subTitle')}
              </p>
              <a
                href={`${pathname}/about`}
                className="btn btn-sm btn-secondary"
              >
                {t('landingAbout.more')}
              </a>
            </div>
          </div>
          <div className="compro">
            {/* <button
              className="btn btn-nohover btn-popup-video"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#video-compro"
              onClick={onOpen}
            >
              <img
                src="img/Icon/youtube.svg"
                className="img-fluid"
              />
            </button> */}
            <img
              src="img/img-thumb.jpg"
              className="img-fluid"
            />
          </div>
          <h3 className="Mulish color-dark text-extraBold text-center mb-5">
            {t('landingAbout.why')}
          </h3>
          <div className="row g-4">
            <div className="col-xl-8 col-lg-7  order-lg-1">
              <div className="box-qa rounded">
                <h4 className="color-white text-extraBold Mulish mb-4">
                  {t('landingAbout.qa.title')}
                </h4>
                <p className="text-md color-white">
                  {t('landingAbout.qa.content')}
                </p>
                <div className="row align-items-center">
                  <div className="col-xl-5 order-xl-2 mb-4 mb-xxl-0">
                    <div className="qa-list">
                      <div className="qa-items">
                        {t('landingAbout.qa.items1')}
                      </div>
                      <div className="qa-items">
                        {t('landingAbout.qa.items2')}
                      </div>
                      <div className="qa-items">
                        {t('landingAbout.qa.items3')}
                      </div>
                      <div className="qa-items">
                        {t('landingAbout.qa.items4')}
                      </div>
                      <div className="qa-items">
                        {t('landingAbout.qa.items5')}
                      </div>
                      <div className="qa-items">
                        {t('landingAbout.qa.items6')}
                      </div>
                    </div>
                  </div>
                  <div className="col-xl col-lg-12 order-xl-1">
                    <div className="text-center">
                      <img
                        src="img/qa.png"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 order-lg-2">
              <div className="box-gray-1 rounded">
                <h4 className="color-dark text-extraBold Mulish mb-4">
                  {t('landingAbout.diverse.title')}
                </h4>
                <p className="text-md color-dark mb-5">
                  {t('landingAbout.diverse.content')}
                </p>
                <a
                  href={`${pathname}/shop`}
                  className="btn btn-sm btn-secondary"
                >
                  {t('landingAbout.diverse.explore')}
                </a>
              </div>
            </div>
            <div className="col-xl-8 col-lg-7 order-lg-4">
              <div className="box-guide rounded">
                <div className="col-xl-7 col-lg-12 mb-5">
                  <h4 className="color-white text-extraBold Mulish mb-4">
                    {t('landingAbout.expert.title')}
                  </h4>
                  <p className="text-md color-white mb-5">
                    {t('landingAbout.expert.content')}
                  </p>
                  <a
                    href={`${pathname}/contact-us`}
                    className="btn btn-md btn-secondary white-hover"
                  >
                    {t('landingAbout.expert.contact')}
                  </a>
                </div>
                <div className="img-guide">
                  <img
                    src="img/guide.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5  order-lg-3">
              <div className="box-gray-2 rounded">
                <h4 className="color-dark text-extraBold Mulish mb-4">
                  {t('landingAbout.secure.title')}
                </h4>
                <p className="text-md color-dark mb-5">
                  {t('landingAbout.secure.content')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LpAboutUs;
