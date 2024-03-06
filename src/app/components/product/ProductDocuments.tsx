'use client';

// React
import React, { memo } from 'react';

// Next
import { useParams } from 'next/navigation';

// Types
import { TProductCommonProps } from '@/types/product.type';

// Locales
import { useI18n } from '@/locales/client';
import { getLang } from '@/utils/locale.util';

function ProductDocuments(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const params = useParams();
  const t = useI18n();

  return (
    <section
      id="section-document"
      className="secion-pd"
    >
      <p className="text-bold Mulish color-dark">{t('common.document')}</p>
      {product.documents.map((item) => (
        <div
          key={item.id}
          className="document-download mb-3"
        >
          <span>{getLang(params, item.name)}</span>
          <a
            href={item.url}
            target="_blank"
            download
            rel="noreferrer"
          >
            <span className="icon-ico-download"></span>
          </a>
        </div>
      ))}
    </section>
  );
}

export default memo(ProductDocuments);
