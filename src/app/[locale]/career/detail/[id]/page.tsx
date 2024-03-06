// React
import React from 'react';

// Next
import { Metadata } from 'next';
import Link from 'next/link';

// Service
import { getCareerById } from '@/api/career.service';

// Components
import CareerApplyForm from '@/app/components/career/CareerApplyForm';

// Types
import { TDefaultParams } from '@/types/common.type';

// Utils
import { getLang } from '@/utils/locale.util';
import { getScopedI18n } from '@/locales/server';

export async function generateMetadata({
  params,
}: {
  params: TDefaultParams & { id: string };
}): Promise<Metadata> {
  const career = await getCareerById(params.id);
  return {
    title: `Kanzway - ${getLang(params, career.title)}`,
    description: career.metaDescription,
    keywords: career.metaKeyword,
  };
}

async function CareerDetailPage({
  params,
}: Readonly<{
  params: TDefaultParams & { id: string };
}>) {
  const tCareer = await getScopedI18n('career');

  const career = await getCareerById(params.id);

  return (
    <section className="main-inner ">
      <div className="container">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb pt-sm-3 pt-lg-4 mb-5">
            <li className="breadcrumb-item">
              <Link href="/career">{tCareer('career')}</Link>
            </li>
            <li
              className="breadcrumb-item active"
              aria-current="page"
            >
              {getLang(params, career.title)}
            </li>
          </ol>
        </nav>

        <div className="box-border rounded-2 p-3 p-sm-4 mb-4 mb-sm-5">
          <h5 className="Mulish color-dark text-semiBold">
            {getLang(params, career.title)}
          </h5>
          <p className="text-xs mb-4">{getLang(params, career.job_location)}</p>
          <div className="d-flex flex-wrap gap-4 gap-sm-5">
            <div className="info-desc">
              <div className="text-xxs mb-1">{tCareer('field')}</div>
              <div className="text-xs color-dark text-medium">
                {getLang(params, career.job_field.name)}
              </div>
            </div>
            <div className="info-desc">
              <div className="text-xxs mb-1">{tCareer('jobPostedOn')}</div>
              <div className="text-xs color-dark text-medium">
                {getLang(params, career.job_date)}
              </div>
            </div>
            <div className="info-desc">
              <div className="text-xxs mb-1">{tCareer('employeeTime')}</div>
              <div className="text-xs color-dark text-medium">
                {getLang(params, career.job_type)}
              </div>
            </div>
            <div className="info-desc">
              <div className="text-xxs mb-1">{tCareer('experienceYear')}</div>
              <div className="text-xs color-dark text-medium">
                {getLang(params, career.experience)}
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 justify-content-between">
          <div className="col-sm-6 col-lg-7 pe-xl-5">
            <p className="text-bold text-md Mulish color-dark">
              {tCareer('roleResponsibility')}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: getLang(params, career.responsibility),
              }}
            />
            <p className="text-bold text-md Mulish color-dark">
              {tCareer('requirements')}
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: getLang(params, career.requirements),
              }}
            />
          </div>
          <div className="col-sm-6 col-lg-5">
            <CareerApplyForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerDetailPage;
