'use client';

// React
import { useCallback, useEffect } from 'react';

// Components
import { BaseFormError } from '@/app/components/base';
import toast from 'react-hot-toast';
import { Button, Form, Modal } from 'react-bootstrap';

// Form
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Api
import { useAuthForgotPassword } from '@/api/auth.api';

// Types
import { TAuthForgotPassword } from '@/types/auth.type';

// Locale
import { useI18n, useScopedI18n } from '@/locales/client';

// Store
import useModalForgotPasswordStore from '@/store/modalForgotPassword.store';

const schema = yup.object().shape({
  email: yup.string().email().required('required'),
});

function AuthModalForgot() {
  // Hooks
  const t = useI18n();
  const tCommon = useScopedI18n('common');

  const { isOpen, onClose } = useModalForgotPasswordStore();

  // Form
  const {
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  // API
  const { mutate, isLoading: loading } = useAuthForgotPassword({
    onSuccess: () => {
      toast.success('Register Successfully');
      reset();
    },
  });

  /**
   * Handle Submit form process
   */
  const handleActualSubmit = useCallback(
    (values: TAuthForgotPassword) => {
      mutate(values);
    },
    [mutate],
  );

  /**
   * Reset form before show dialog
   */
  useEffect(() => {
    if (isOpen) {
      reset();
    }
  }, [isOpen, reset]);

  return (
    <Modal
      show={isOpen}
      centered
    >
      <Modal.Body>
        <div className="p-5">
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="btn-close btn-nohover"
              onClick={onClose}
            />
          </div>

          <h5 className="color-dark text-extraBold Mulish mb-4">
            {t('login.forgot2')}
          </h5>
          <p className="text-xs">{t('login.enterEmail')}</p>

          <Form
            noValidate
            onSubmit={handleSubmit(handleActualSubmit)}
          >
            <Form.Group className="mb-5">
              <label className="text-xxs color-dark">{tCommon('email')}</label>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder={t('login.yourEmailHere')}
                    isInvalid={!!errors.email}
                  />
                )}
              />
              <BaseFormError
                errors={errors}
                name="email"
              />
            </Form.Group>

            <Button
              type="submit"
              variant="secondary"
              className="w-100"
              disabled={loading}
            >
              {loading ? '...' : 'Next'}
            </Button>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default AuthModalForgot;
