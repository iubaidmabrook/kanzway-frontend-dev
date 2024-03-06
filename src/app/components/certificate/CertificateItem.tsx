'use client';

// React
import React from 'react';

// Next
import { useParams } from 'next/navigation';

// Utils
import { getLang } from '@/utils/locale.util';

// Types
import { TCertificateItemProps } from '@/types/certificate.type';

function CertificateItem(props: Readonly<TCertificateItemProps>) {
  const { certificate } = props;
  const params = useParams();

  return (
    <div className="col-sm-4 col-6 col-lg-3">
      <div className="certification-items">
        <div className="certificate-img">
          <img
            src="/img/certification.png"
            className="img-fluid"
          />
        </div>
        <div className="my-3 Mulish color-dark text-bold text-center">
          {getLang(params, certificate.title)}
        </div>
      </div>
    </div>
  );
}

export default CertificateItem;
