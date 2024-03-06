// Locales
import { getI18n } from '@/locales/server';

// Components
import CertificateItem from '@/app/components/certificate/CertificateItem';
import CertificateSorting from '@/app/components/certificate/CertificateSorting';

// Locales
import { getCertificates } from '@/api/certificate.api';

// Types
import { TCertificatePageParams } from '@/types/certificate.type';

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: `KanzWay - ${t('certification.title')}`,
    description: t('certification.subTitle'),
  };
}

async function CertificationPage({
  searchParams,
}: Readonly<TCertificatePageParams>) {
  const sort = searchParams.sort ?? 'id';
  const order = searchParams.order ?? 'desc';
  const certificates = await getCertificates({ sort, order });

  const t = await getI18n();

  return (
    <section className="main-inner default">
      <div
        className="hero-inner"
        style={{ backgroundImage: `url(/img/hero-certificate.jpg)` }}
      >
        <div className="container">
          <h3 className="color-white Mulish text-extraBold mb-4">
            {t('certification.title')}
          </h3>
          <p className="color-white text-xs">{t('certification.subTitle')}</p>
        </div>
      </div>

      <div className="main-section">
        <div className="container">
          <CertificateSorting />

          <div className="row g-4">
            {certificates.content.map((certificate) => (
              <CertificateItem
                key={certificate.id}
                certificate={certificate}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CertificationPage;
