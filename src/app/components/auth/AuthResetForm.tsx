'use client';

// React
import { useCallback, useState } from 'react';

// Locale
import { useScopedI18n } from '@/locales/client';

// Components
import { Button, Form } from 'react-bootstrap';
import { BaseFormError } from '@/app/components/base';
import toast from 'react-hot-toast';
import AuthModalOtp from '@/app/components/auth/AuthModalOtp';

// Form
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Types
import { TAuthResetPassword } from '@/types/auth.type';

// Utils
import clsx from 'clsx';

// Api
import { useAuthResetPassword } from '@/api/auth.api';

const schema = yup.object().shape({
  password: yup.string().required('required'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('required'),
});

export default function AuthResetForm() {
  const tCommon = useScopedI18n('common');

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
  });

  // API
  const { mutate, isLoading: loading } = useAuthResetPassword({
    onSuccess: () => {
      toast.success('Reset Successfully');
      reset();
    },
  });

  /**
   * Handle Submit form process
   */
  const handleActualSubmit = useCallback(
    (values: TAuthResetPassword) => {
      mutate(values);
    },
    [mutate],
  );

  // Password show hide
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPass2, setShowPass2] = useState<boolean>(false);

  return (
    <>
      <Form
        noValidate
        onSubmit={handleSubmit(handleActualSubmit)}
      >
        <section className="mb-5">
          <label className="text-xxs color-dark">{tCommon('password')}</label>
          <Form.Group className="mb-3 position-relative">
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <>
                  <Form.Control
                    {...field}
                    type={showPass ? 'text' : 'password'}
                    placeholder={tCommon('password')}
                    isInvalid={!!errors.password}
                  />
                  <span
                    role="presentation"
                    className={clsx('btn-eye', showPass ? 'switch' : '')}
                    style={{
                      right: errors.password ? '28px' : '10px',
                    }}
                    onClick={() => setShowPass(!showPass)}
                  />
                </>
              )}
            />
            <BaseFormError
              errors={errors}
              name="password"
            />
          </Form.Group>

          <label className="text-xxs color-dark">
            {tCommon('confirmPassword')}
          </label>
          <Form.Group className="mb-3 position-relative">
            <Controller
              name="passwordConfirm"
              control={control}
              render={({ field }) => (
                <>
                  <Form.Control
                    {...field}
                    type={showPass2 ? 'text' : 'password'}
                    placeholder={tCommon('confirmPassword')}
                    isInvalid={!!errors.passwordConfirm}
                  />

                  <span
                    role="presentation"
                    className={clsx('btn-eye', showPass2 ? 'switch' : '')}
                    style={{
                      right: errors.passwordConfirm ? '28px' : '10px',
                    }}
                    onClick={() => setShowPass2(!showPass2)}
                  />
                </>
              )}
            />
            <BaseFormError
              errors={errors}
              name="passwordConfirm"
            />
          </Form.Group>
        </section>

        <Button
          type="submit"
          variant="secondary"
          className="w-100"
          disabled={loading}
        >
          {loading ? '...' : 'Save New Password'}
        </Button>
      </Form>
      <AuthModalOtp />
    </>
  );
}
