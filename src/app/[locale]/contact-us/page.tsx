import ContactForm from '@/app/components/contact/ContactForm';
import { useLangServer } from '@/hooks/useLangServer';
import { getI18n } from '@/locales/server';
import clsx from 'clsx';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanzWay - Contact Us',
  description: '',
};

export default async function ContactUsPage() {
  const { isAr } = await useLangServer();
  const t = await getI18n();
  return (
    <section
      className={clsx('contact-section w-100', { arab: isAr })}
      dir={isAr ? 'rtl' : ''}
    >
      <div className="main-inner">
        <div className="container">
          <div className="row gap-5 gap-lg-0 justify-content-between">
            <div className="col-xl-6 col-lg-6 pt-lg-5 ">
              <div className="">
                <h1
                  className={clsx(
                    'heading-related text-extraBold Mulish color-dark mb-4 pt-lg-5',
                    { 'text-end': isAr },
                  )}
                >
                  {t('contact.title')}
                </h1>
                <p>{t('contact.subtitle')}</p>
              </div>
              <div className="mt-5 py-1 d-flex flex-column gap-3 align-items-start">
                <p className="color-red Mulish text-xxl text-bold">
                  {t('common.address')}
                </p>
                <p className="color-black text-md contact-value-item">
                  Alkhaleej Kaki Center Office Number 213 <br /> 7947 Ash
                  Sharafiyah Dist Jeddah 223218
                </p>
              </div>
              <hr />
              <div className="mt-5 py-1  d-flex flex-column gap-3 align-items-start">
                <h4 className="color-red  Mulish text-xxl text-bold">
                  {t('common.phone')}
                </h4>
                <p className="color-black text-md contact-value-item">
                  +966 9200 66051
                </p>
              </div>
              <hr />
              <div className="mt-5 py-1 d-flex flex-column gap-3 align-items-start">
                <h4 className="color-red  Mulish text-xxl text-bold">
                  {t('common.email')}
                </h4>
                <p className="color-black text-md contact-value-item">
                  support@kanzway.com
                </p>
              </div>
              <hr />
              <div className="mt-5 py-1 d-flex flex-column gap-3 align-items-start">
                <h4 className="color-red  Mulish text-xxl text-bold">
                  {t('common.socialMedia')}
                </h4>
                <div className="d-flex gap-3 mt-4 flex-wrap justify-content-lg-start justify-content-center">
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className=" fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-facebook" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-twitter" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-instagram" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-youtube" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-snapchat" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-tiktok" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-wechat" />
                    </a>
                  </div>
                  <div className="contact-social-item">
                    <a
                      href="#"
                      className="fs-3 color-dark p-2"
                    >
                      <span className="icon-ico-telegram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col">
              <div className="d-flex justify-content-end">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
