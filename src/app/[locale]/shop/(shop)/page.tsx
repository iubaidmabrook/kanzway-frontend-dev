import { useLangServer } from '@/hooks/useLangServer';
import { getScopedI18n } from '@/locales/server';
import { TShopPageParams } from '@/types/page.type';

export default async function ShopPage({ searchParams }: TShopPageParams) {
  const search = searchParams.search ?? '';
  const t = await getScopedI18n('shop');
  const { isAr } = await useLangServer();

  return (
    <>
      <div
        className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4"
        dir={isAr ? 'rtl' : ''}
      >
        {search === '' ? t('title') : `${t('searchResult')} '${search}'`}
      </div>
      <p className="text-center color-dark text-xs">{t('subTitle')}</p>
    </>
  );
}
