import { BasePagination } from '@/app/components/base';
import BlogItem from '@/app/components/blog/BlogItem';
import BlogSorting from '@/app/components/blog/BlogSorting';
import { DUMMY_BLOGS } from '@/constant/faker.constant';
import { useLangServer } from '@/hooks/useLangServer';
import { getI18n } from '@/locales/server';
import { Metadata } from 'next';

interface PageParams {
  searchParams: {
    page: string | undefined;
    order: string | undefined;
  };
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Kanzway - Blog`,
    description: '',
    keywords: '',
  };
}

export default async function BlogPage({ searchParams }: PageParams) {
  const t = await getI18n();
  const { isAr } = await useLangServer();

  const currentPage =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1;

  return (
    <section
      className="main-inner"
      dir={isAr ? 'rtl' : ''}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
              {t('blog.title')}
            </div>
          </div>
        </div>
        <div className="blog-list-row">
          <BlogSorting />
          <div className="row g-4 gy-5">
            {DUMMY_BLOGS.map((blog, i) => (
              <div
                className="col-xl-4 col-sm-6"
                key={`${(currentPage - 1) * 15 + (i + 1)}`}
              >
                <BlogItem
                  blog={{ ...blog, id: (currentPage - 1) * 15 + (i + 1) }}
                />
              </div>
            ))}
          </div>
          <BasePagination
            totalPage={10}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
}
