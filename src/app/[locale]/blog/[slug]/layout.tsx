'use client';

import useLangClient from '@/hooks/useLangClient';

export default function BlogDetailLayout({
  children,
  related,
}: {
  children: React.ReactNode;
  related: React.ReactNode;
}) {
  const { isAr } = useLangClient();
  return (
    <section
      className="main-inner"
      dir={isAr ? 'rtl' : ''}
    >
      <div className="container">
        {children}
        {related}
      </div>
    </section>
  );
}
