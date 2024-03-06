'use client';

import { BaseFormError } from '@/app/components/base';
import { useScopedI18n, useI18n } from '@/locales/client';
import useLangClient from '@/hooks/useLangClient';
import useModalForgotPasswordStore from '@/store/modalForgotPassword.store';
import { TAuthLogin } from '@/types/auth.type';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useCallback, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import * as yup from 'yup';
import AuthModalForgot from '@/app/components/auth/AuthModalForgot';
import { useAuthLogin } from '@/api/auth.api';
import { useRouter } from 'next/navigation';
import useLastPathStore from '@/store/lastPathStore';

const schema = yup.object().shape({
  username: yup.string().required('required'),
  password: yup.string().required('required'),
});

function LoginForm() {
  // const currentLocale = useCurrentLocale();
  // const pathname = usePathname();
  const { lastPath } = useLastPathStore();
  const { onOpen } = useModalForgotPasswordStore();

  // const t = useScopedI18n('register');
  const tCommon = useScopedI18n('common');
  const router = useRouter();
  const t = useI18n();
  const { isAr } = useLangClient();

  const [isVisible, setIsVisible] = useState(false);
  const [isRemember, setIsRemember] = useState(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
  });

  const { mutate: save, isLoading: loading } = useAuthLogin({
    onSuccess: () => {
      toast.success('Login Success');
      reset();
      router.push(lastPath);
    },
  });

  const handleActualSubmit = useCallback(
    (values: TAuthLogin) => {
      save(values);
    },
    [save],
  );

  return (
    <>
      <AuthModalForgot />
      <section className="main-inner">
        <div
          className="container"
          dir={isAr ? 'rtl' : ''}
        >
          <div className="login-wrapper">
            <div className="col-lg-10 mx-auto">
              <div className="row justify-content-between">
                <div className="col-sm-6 col-lg-5">
                  <h4 className="Mulish color-dark text-bold mb-4">
                    {t('login.title')}
                  </h4>
                  <p className="text-xs">{t('login.subTitle')}</p>
                  <p className="color-dark text-xs">
                    {t('login.noAccount')}
                    <a
                      href="../register"
                      className="color-red text-semiBold"
                    >
                      {t('login.register')}
                    </a>
                  </p>
                </div>

                <div className="col-sm-6 col-lg-5">
                  <p className="text-medium color-dark">
                    {t('login.enterDetail')}
                  </p>
                  <Form
                    noValidate
                    onSubmit={handleSubmit(handleActualSubmit)}
                  >
                    <Form.Group className="mb-3">
                      <Controller
                        name="username"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder={tCommon('username')}
                            isInvalid={!!errors.username}
                          />
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="username"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 position-relative">
                      <Controller
                        name="password"
                        control={control}
                        render={({ field }) => (
                          <>
                            <Form.Control
                              {...field}
                              type={isVisible ? 'text' : 'password'}
                              placeholder={tCommon('password')}
                              isInvalid={!!errors.password}
                              className="form-control"
                            />
                            <span
                              role="presentation"
                              className={clsx(
                                'btn-eye',
                                'bg-white',
                                isVisible ? 'switch' : '',
                              )}
                              style={{
                                right: errors.password ? '28px' : '10px',
                              }}
                              onClick={() => setIsVisible(!isVisible)}
                            />
                          </>
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="password"
                      />
                    </Form.Group>
                    <div className="d-flex justify-content-between mb-5">
                      <div className="d-flex align-items-center gap-2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          checked={isRemember}
                          id="check-1"
                          onChange={() => setIsRemember(!isRemember)}
                        />
                        <label
                          className="inner-label"
                          htmlFor="check-1"
                        >
                          {t('login.remember')}
                        </label>
                      </div>

                      <a
                        href="#/"
                        className="color-red text-xxs"
                        data-bs-toggle="modal"
                        data-bs-target="#modal-forgot"
                        onClick={onOpen}
                      >
                        {t('login.forgot1')}
                      </a>
                    </div>
                    <Button
                      type="submit"
                      variant="secondary"
                      className="w-100"
                      disabled={loading}
                    >
                      {loading ? '...' : t('login.login')}
                    </Button>
                  </Form>
                  {/* <form>
                                        <div className="form-group mb-3">
                                            <input
                                                type="email"
                                                className="form-control"
                                                name=""
                                                placeholder="Email"
                                                id=""
                                                value={email}
                                                onChange={onEmailChange}
                                            />
                                        </div>
                                        <div className="form-group position-relative mb-3">
                                            <input
                                                type={isVisible ? 'text' : 'password'}
                                                className="form-control"
                                                name=""
                                                placeholder="Password"
                                                id="password"
                                                value={password}
                                                onChange={onPasswordChange}
                                            />
                                            <span
                                                className={`${isVisible && 'switch'} btn-eye`}
                                                onClick={() => setIsVisible(!isVisible)}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mb-5">
                                            <div className="d-flex align-items-center gap-2">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    checked={isRemember}
                                                    id="check-1"
                                                    onChange={() => setIsRemember(!isRemember)}
                                                />
                                                <label
                                                    className="inner-label"
                                                    htmlFor="check-1"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <a
                                                href="#/"
                                                className="color-red text-xxs"
                                                data-bs-toggle="modal"
                                                data-bs-target="#modal-forgot"
                                            >
                                                Forgot password
                                            </a>
                                        </div>
                                        <Link
                                            href={`/${currentLocale}`}
                                            passHref
                                            legacyBehavior
                                        >
                                            <button className="btn btn-secondary w-100">Login</button>
                                        </Link>
                                    </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default LoginForm;
