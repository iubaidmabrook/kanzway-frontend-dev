'use client';

import { I18nProviderClient, useCurrentLocale } from '@/locales/client';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function Providers({ children }: { children: React.ReactNode }) {
  const currentLocale = useCurrentLocale();

  // Get query client;
  const queryClient = new QueryClient();
  return (
    <I18nProviderClient locale={currentLocale}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <Toaster position="top-right" />
    </I18nProviderClient>
  );
}
