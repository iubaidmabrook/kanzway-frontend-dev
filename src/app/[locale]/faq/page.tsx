import FaqList from '@/app/components/faq/FaqList';
import { useLangServer } from '@/hooks/useLangServer';
import { getI18n } from '@/locales/server';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KanzWay - FAQ',
  description: '',
  keywords: '',
};

export default async function FaqPage() {
  const { isAr } = await useLangServer();
  const t = await getI18n();
  return (
    <>
      <section
        className="bg-banner-gradient"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
                {t('faq.title')}
              </div>
            </div>
          </div>
        </div>
      </section>
      <FaqList />
    </>
  );
}
