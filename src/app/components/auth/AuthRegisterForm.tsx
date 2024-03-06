'use client';

// React
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

// Next
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Locale
import { useCurrentLocale, useScopedI18n } from '@/locales/client';

// Components
import { Button, Form } from 'react-bootstrap';
import { BaseFormError } from '@/app/components/base';
import toast from 'react-hot-toast';

// Form
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Types
import { TRegionPhoneCode } from '@/types/common.type';
import { TAuthRegister } from '@/types/auth.type';

// Constant
import { REGION_PHONE_CODES } from '@/constant/common.constant';

// Utils
import clsx from 'clsx';

// Api
import { useAuthRegister } from '@/api/auth.api';

const schema = yup.object().shape({
  type: yup.string().required('required'),
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email().required('required'),
  phoneNumber: yup.string().required('required'),
  phoneNumberCode: yup.string().required('required'),
  password: yup.string().required('required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('required'),
});

export default function AuthRegisterForm() {
  // Hooks
  const locale = useCurrentLocale();

  const t = useScopedI18n('register');
  const tCommon = useScopedI18n('common');
  const params = useParams();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    watch,
    reset,
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      type: params.type as string,
      phoneNumberCode: '+93',
      confirmPassword: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      phoneNumber: '',
    },
  });

  const wchPhoneNumberCode = watch('phoneNumberCode');

  // API
  const { mutate, isLoading: loading } = useAuthRegister({
    onSuccess: () => {
      toast.success('Register Successfully');
      reset();
    },
  });

  /**
   * Handle Submit form process
   */
  const handleActualSubmit = useCallback(
    (values: TAuthRegister) => {
      mutate({
        ...values,
        phoneNumber: `${values.phoneNumberCode}${values.phoneNumber}`,
      });
    },
    [mutate],
  );

  // Show hide list number variable
  const [showListNum, setShowListNum] = useState<boolean>(false);

  /**
   * Show hide list number dropdown
   */
  const handleToggleListNumber = useCallback(() => {
    setShowListNum(!showListNum);
  }, [showListNum]);

  // Search Region Code
  const [searchRegion, setSearchRegion] = useState<string>('');

  // Filter Region Phone Codes
  const filteredRegionPhoneCodes = useMemo<TRegionPhoneCode[]>(() => {
    if (searchRegion) {
      return REGION_PHONE_CODES.filter(
        (item) =>
          item.region
            .toLocaleLowerCase()
            .indexOf(searchRegion.toLocaleLowerCase()) !== -1 ||
          item.code
            .toLocaleLowerCase()
            .indexOf(searchRegion.toLocaleLowerCase()) !== -1 ||
          item.shortRegion
            .toLocaleLowerCase()
            .indexOf(searchRegion.toLocaleLowerCase()) !== -1,
      );
    }

    return REGION_PHONE_CODES;
  }, [searchRegion]);

  // Get phone number code
  const getCurrentPhoneCode = useMemo<string>(() => {
    const phoneCode = REGION_PHONE_CODES.find(
      (item) => item.code === wchPhoneNumberCode,
    );
    if (phoneCode) return `${phoneCode.shortRegion} ${phoneCode.code}`;
    return '-';
  }, [wchPhoneNumberCode]);

  /**
   * Handle selected region
   * @param value
   */
  const handleSelectedRegionCode = useCallback(
    (value: TRegionPhoneCode) => {
      setValue('phoneNumberCode', value.code);
      setShowListNum(false);
    },
    [setValue],
  );

  // Password show hide
  const [showPass, setShowPass] = useState<boolean>(false);
  const [showPass2, setShowPass2] = useState<boolean>(false);

  return (
    <section className="main-inner">
      <div className="container">
        <div className="register-wrapper">
          <div className="col-lg-10 mx-auto">
            <Link
              href={`/${locale}/register`}
              className="back-compare"
            >
              <strong>
                <span className="icon-ico-long-arrow"></span>
              </strong>
            </Link>

            <div className="row justify-content-between">
              <div className="col-sm-6 col-lg-5">
                <h4 className="Mulish color-dark text-bold mb-4">
                  {t('personalDetail.title')}
                </h4>
                <p className="text-xs">{t('personalDetail.subTitle')}</p>
              </div>

              <div className="col-sm-6 col-lg-5">
                <Form
                  noValidate
                  onSubmit={handleSubmit(handleActualSubmit)}
                >
                  <div className="mb-4">
                    <p className="text-medium color-dark">{t('yourName')}</p>
                    <Form.Group className="mb-3">
                      <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder={tCommon('firstName')}
                            isInvalid={!!errors.firstName}
                          />
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="firstName"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder={tCommon('lastName')}
                            isInvalid={!!errors.lastName}
                          />
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="lastName"
                      />
                    </Form.Group>
                  </div>

                  <div className="mb-4">
                    <p className="text-medium color-dark">
                      {t('contactInformation')}
                    </p>

                    <Form.Group className="mb-3">
                      <Controller
                        name="email"
                        control={control}
                        render={({ field }) => (
                          <Form.Control
                            {...field}
                            placeholder={tCommon('email')}
                            isInvalid={!!errors.email}
                          />
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="email"
                      />
                    </Form.Group>

                    <div className="number-choose">
                      <div className="list-number">
                        <div
                          role="presentation"
                          className="number-wrapper"
                          onClick={handleToggleListNumber}
                        >
                          {getCurrentPhoneCode}
                        </div>
                        <div
                          className={clsx(
                            'lists-number-wrapper',
                            showListNum ? 'active' : '',
                          )}
                        >
                          <div className="search-number">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search here"
                              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setSearchRegion(e.target.value);
                              }}
                            />
                            <span
                              className="icon-ico-search"
                              id="icon-search"
                            ></span>
                          </div>
                          <ul className="no-list">
                            {filteredRegionPhoneCodes.map((item) => (
                              <li
                                role="presentation"
                                key={item.code}
                                className={clsx(
                                  'number-wrapper-button',
                                  wchPhoneNumberCode === item.code
                                    ? 'active'
                                    : '',
                                )}
                                onClick={() => handleSelectedRegionCode(item)}
                              >
                                {item.region} {item.code}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="input-value">
                        <Controller
                          name="phoneNumber"
                          control={control}
                          render={({ field }) => (
                            <Form.Control
                              {...field}
                              placeholder={tCommon('phoneNumber')}
                              isInvalid={!!errors.phoneNumber}
                            />
                          )}
                        />
                      </div>
                    </div>
                    <BaseFormError
                      errors={errors}
                      name="phoneNumber"
                      asFormText
                    />
                  </div>

                  <div className="mb-5">
                    <p className="text-medium color-dark">{t('password')}</p>

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
                              className={clsx(
                                'btn-eye',
                                showPass ? 'switch' : '',
                              )}
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

                    <Form.Group className="mb-3 position-relative">
                      <Controller
                        name="confirmPassword"
                        control={control}
                        render={({ field }) => (
                          <>
                            <Form.Control
                              {...field}
                              type={showPass2 ? 'text' : 'password'}
                              placeholder={tCommon('confirmPassword')}
                              isInvalid={!!errors.confirmPassword}
                            />

                            <span
                              role="presentation"
                              className={clsx(
                                'btn-eye',
                                showPass2 ? 'switch' : '',
                              )}
                              style={{
                                right: errors.confirmPassword ? '28px' : '10px',
                              }}
                              onClick={() => setShowPass2(!showPass2)}
                            />
                          </>
                        )}
                      />
                      <BaseFormError
                        errors={errors}
                        name="confirmPassword"
                      />
                    </Form.Group>
                  </div>
                  <Button
                    type="submit"
                    variant="secondary"
                    className="w-100"
                    disabled={loading}
                  >
                    {loading ? '...' : 'Register'}
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
