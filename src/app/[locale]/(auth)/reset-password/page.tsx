// Next
import { Metadata } from 'next';

// Locale
import { getI18n } from '@/locales/server';

// Components
import AuthResetForm from '@/app/components/auth/AuthResetForm';

export const metadata: Metadata = {
  title: 'Kanzway - Reset Password',
  description: '',
  keywords: '',
};

async function ResetPasswordPage() {
  const t = await getI18n();

  return (
    <section className="main-inner">
      <div className="container">
        <div className="login-wrapper">
          <div className="col-lg-6 mx-auto col-sm-8">
            <h4 className="Mulish color-dark text-bold text-center mb-4">
              {t('resetPassword.title')}
            </h4>
            <p className="text-xs text-center color-dark">
              {t('resetPassword.subtitle')}
            </p>
            <div className="col-lg-7 mx-auto">
              <AuthResetForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResetPasswordPage;
