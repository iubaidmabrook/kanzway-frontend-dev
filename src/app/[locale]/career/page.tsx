// Component
import { BasePagination } from '@/app/components/base';
import CareerCategories from '@/app/components/career/CareerCategories';
import CareerItem from '@/app/components/career/CareerItem';
import CareerSorting from '@/app/components/career/CareerSorting';

// Locales
import { getI18n } from '@/locales/server';

// Types
import { TCareerPagePageParams } from '@/types/career.type';

// Services
import { getCareerCategories, getCareers } from '@/api/career.service';

import React from 'react';

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: `KanzWay - ${t('career.title')}`,
    description: t('career.subTitle'),
  };
}

async function CareerPage({ searchParams }: Readonly<TCareerPagePageParams>) {
  const t = await getI18n();
  const categories = await getCareerCategories();

  const sort = searchParams.sort ?? 'id';
  const order = searchParams.order ?? 'desc';
  const category = searchParams.category ?? 'all';
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  const careers = await getCareers({
    sort,
    category,
    order,
    page,
  });

  const totalPage = Math.ceil(careers.totalCount / 10);

  return (
    <section className="main-inner default">
      <div
        className="hero-inner"
        style={{ backgroundImage: `url(/img/hero-certificate.jpg)` }}
      >
        <div className="container">
          <h3 className="color-white Mulish text-extraBold mb-4">
            {t('career.title')}
          </h3>
          <p className="color-white text-xs">{t('career.subTitle')}</p>
        </div>
      </div>

      <div className="main-section pt-5">
        <div className="container">
          <CareerCategories categories={categories} />
          <CareerSorting />

          {careers.content.map((career) => (
            <CareerItem
              key={career.id}
              career={career}
            />
          ))}

          <BasePagination
            currentPage={page}
            totalPage={totalPage}
          />
        </div>
      </div>
    </section>
  );
}

export default CareerPage;
