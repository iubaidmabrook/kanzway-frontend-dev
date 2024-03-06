'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import { TBlog } from '@/types/blog.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

type TBlogItemProps = {
  blog: TBlog;
};

export default function BlogItem({ blog }: TBlogItemProps) {
  const params = useParams();
  const t = useI18n();
  const { isAr } = useLangClient();
  return (
    <div className="blog-item">
      <Link
        href={`/blog/${blog.id}`}
        className="img-blog mb-3"
      >
        <Image
          src={`https://picsum.photos/466/334?random=${blog.id}`}
          className="img-fluid"
          height={blog.thumbnail.height}
          width={blog.thumbnail.width}
          alt={blog.title.en}
        />
      </Link>
      <div className="blog-meta">
        <p className="color-gray-60 text-xs mb-2">{blog.date.toString()}</p>
        <Link
          href={`/blog/${blog.id}`}
          className="blog-title-link Mulish"
        >
          {getLang(params, blog.title)} {blog.id}
        </Link>
        <p className="blog-excerpt">{getLang(params, blog.description)}</p>
        <Link
          href={`/blog/${blog.id}`}
          className={clsx('link-more', { arab: isAr })}
        >
          {t('blog.readMore')}
        </Link>
      </div>
    </div>
  );
}
