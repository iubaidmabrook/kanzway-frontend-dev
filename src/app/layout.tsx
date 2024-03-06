'use client';

// React

// Style
import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css/bundle';
import '@/styles/global.scss';
import '@/styles/icomoon.css';

// Components
import { BaseFooter, BaseHeader } from '@/app/components/base';
import { Toaster } from 'react-hot-toast';

// Locales
import { I18nProviderClient, useCurrentLocale } from '@/locales/client';

// Fonts
import { Mulish, Poppins } from 'next/font/google';

// Next

// React Query
import { QueryClient, QueryClientProvider } from 'react-query';
import Next13ProgressBar from 'next13-progressbar';

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-mulish',
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentLocale = useCurrentLocale();

  // Get query client;
  const queryClient = new QueryClient();
  return (
    <html
      className={`${mulish.variable} ${poppins.variable} no-js`}
      lang={currentLocale}
    >
      <body className="">
        <I18nProviderClient locale={currentLocale}>
          <QueryClientProvider client={queryClient}>
            <Next13ProgressBar
              height="4px"
              color="#ff3b23"
              options={{ showSpinner: false }}
              showOnShallow
            />
            <BaseHeader />
            {children}
            <BaseFooter />
            <Toaster position="top-right" />
          </QueryClientProvider>
        </I18nProviderClient>
      </body>
    </html>
  );
}
