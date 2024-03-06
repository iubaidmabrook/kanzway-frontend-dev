'use client';

import { useCurrentLocale, useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';
import Link from 'next/link';
import React from 'react';

function BaseFooter() {
  const currentLocale = useCurrentLocale();
  const t = useI18n();
  const { isAr } = useLangClient();

  return (
    <footer className="footer">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="footer-top">
          <div className="row justify-content-between">
            <div className="col-xl-4 mb-4 mb-sm-5 mb-lg-5">
              <div className="row">
                <div className="col-xl-12 mb-4 col-sm-12 col-lg-4 mb-sm-5 mb-xl-5">
                  <a
                    href={`/${currentLocale}`}
                    className="logo-footer"
                    aria-label="Logo"
                  >
                    <img
                      src="/img/Logo/logo.svg"
                      className="img-fluid w-100"
                      alt="Logo"
                    />
                  </a>
                </div>
                <div className="col-xl-12 mb-4 col-sm-6 col-lg-4 mb-xl-4">
                  <div className="info-comp">
                    <div className="ico-ic call">
                      <span className="icon-ico-call" />
                    </div>
                    <div className="text-ic Mulish">+966 9200 66051</div>
                  </div>
                </div>
                <div className="col-xl-12 mb-4 col-sm-6 col-lg-4 mb-xl-4">
                  <div className="info-comp">
                    <div className="ico-ic mail">
                      <span className="icon-ico-mail" />
                    </div>
                    <div className="text-ic Mulish">support@kanzway.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl col-sm-4 col-6 col-lg-4 ps-xl-5">
              <p className="text-xxl Mulish color-white text-bold mb-4">
                {t('footer.company.title')}
              </p>
              <ul className="link-footer">
                <li>
                  <a href={`/${currentLocale}`}>{t('footer.company.home')}</a>
                </li>
                <li>
                  <a href="/about">{t('footer.company.aboutUs')}</a>
                </li>
                <li>
                  <a href="/brands">{t('footer.company.brand')}</a>
                </li>
                <li>
                  <Link href="/career">{t('footer.company.career')}</Link>
                </li>
                <li>
                  <a href="/blog">{t('footer.company.blog')}</a>
                </li>
                <li>
                  <a href="/faq">{t('footer.company.faq')}</a>
                </li>
                <li>
                  <a href="/contact-us">{t('footer.company.contactUs')}</a>
                </li>
              </ul>
            </div>
            <div className="col-xl col-sm-4 col-6 col-lg-4">
              <p className="text-xxl Mulish color-white text-bold mb-4">
                {t('footer.link.title')}
              </p>
              <ul className="link-footer">
                <li>
                  <a href="/catalogue">{t('footer.link.catalogue')}</a>
                </li>
                <li>
                  <Link href="/certification">
                    {t('footer.link.certification')}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    {t('footer.link.tnc')}
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy">
                    {t('footer.link.privacyPolicy')}
                  </Link>
                </li>
                <li>
                  <Link href="/return-exchange-policy">
                    {t('returnExchangePolicy.title')}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-xl mt-4 mt-sm-0 col-sm-4 col-lg-4">
              <p className="text-xxl Mulish color-white text-bold mb-4">
                {t('footer.connect.title')}
              </p>
              <div className="social-footer mb-5">
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-facebook" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-twitter" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-instagram" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-youtube" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-snapchat" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-tiktok" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-wechat" />
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-telegram" />
                  </a>
                </div>
              </div>
              <div className="grid-cer">
                <div className="d-block">
                  <img
                    src="/img/cer-1.png"
                    className="img-fluid"
                  />
                </div>
                <div className="d-block">
                  <img
                    src="/img/cer-2.png"
                    className="img-fluid"
                  />
                </div>
                <div className="d-block">
                  <img
                    src="/img/cer-3.png"
                    className="img-fluid"
                  />
                </div>
                <div className="d-block">
                  <img
                    src="/img/cer-4.png"
                    className="img-fluid"
                  />
                </div>
                <div className="d-block">
                  <img
                    src="/img/cer-5.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-mid">
          <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 mb-4 mb-lg-0">
              <h5 className="Mulish text-semiBold color-white mb-4">
                {t('footer.reliable')}
              </h5>
              <div className="col-lg-9">
                <p
                  className={`${isAr ? 'text-right' : 'pe-xl-5'} text-md color-white Mulish text-semiBold mb-0`}
                >
                  {t('footer.mainGoal')}
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 ps-xl-5">
              <p className="texxt-xs Mulish color-white pe-xl-5">
                {t('footer.subscribeCaption')}
              </p>
              <div className="row g-2">
                <div className="col-lg-8 col-xl-9 col-sm-8">
                  <input
                    type="text"
                    className="form-control rounded-0"
                    name=""
                    placeholder={t('footer.yourEmail')}
                    id=""
                  />
                </div>
                <div className="col-lg-4 col-xl-3 col-sm-4">
                  <button className="btn btn-red w-100 rounded-0">
                    {t('footer.subsribeButton')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div
            className={`${isAr ? 'flex-row-reverse' : ''} row justify-content-between`}
          >
            <div className="col-xl-6 col-lg-8 col-sm-12 order-lg-2 mb-4 mb-lg-0">
              <div className="d-flex text-right text-sm-start flex-wrap justify-content-center justify-sm-content-end justify-content-lg-end gap-2 gap-sm-4">
                <div className="text-xs Mulish color-white col-12 col-sm-auto">
                  CR No. 4030491334
                </div>
                <div className="text-xs Mulish color-white col-12 col-sm-auto">
                  {`${t('footer.vat')} 311462479500003`}
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-4 col-sm-12 order-lg-1 text-center text-lg-start mb-sm-3 mb-lg-0">
              <div className="text-xs Mulish color-white">
                © 2024. <strong> KANZWAY</strong>
                {`. ${t('footer.reserved')}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BaseFooter;
