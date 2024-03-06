'use client';

import { useI18n } from '@/locales/client';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { BaseFormError } from '../base';

const contactSchema = yup.object().shape({
  name: yup.string().required('required'),
  email: yup.string().email('email').required('required'),
  phoneNumber: yup.string().required('required'),
  subject: yup.string().required('required'),
  message: yup.string().required('required'),
});

type ContactSchema = yup.InferType<typeof contactSchema>;

export default function ContactForm() {
  const t = useI18n();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ContactSchema>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit: SubmitHandler<ContactSchema> = useCallback(() => {}, []);

  return (
    <div className="box-contact-form border rounded-3 p-5 me-lg-5">
      <div className="text-center">
        <p className="text-3xl color-dark text-bold Mulish">
          {t('contact.letsTalk')}
        </p>
      </div>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className=" mt-5"
      >
        <div className="mb-4">
          <label
            htmlFor=""
            className="contact-form-label text-xxs color-black text-medium mb-2"
          >
            {t('common.name')} <span className="color-red">*</span>
          </label>
          <Form.Group>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder={t('common.name')}
                  isInvalid={!!errors.name}
                />
              )}
            />
            <BaseFormError
              errors={errors}
              name="name"
            />
          </Form.Group>
        </div>
        <div className="mb-4 row g-3">
          <div className="form-group col position-relative">
            <label
              htmlFor=""
              className="contact-form-label text-xxs color-black text-medium mb-2"
            >
              {t('common.email')} <span className="color-red">*</span>
            </label>
            <Form.Group>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder={t('common.email')}
                    isInvalid={!!errors.email}
                  />
                )}
              />
              <BaseFormError
                errors={errors}
                name="email"
              />
            </Form.Group>
          </div>
          <div className="form-group col position-relative">
            <label
              htmlFor=""
              className="contact-form-label text-xxs color-black text-medium mb-2"
            >
              {t('common.phoneNumber')} <span className="color-red">*</span>
            </label>
            <Form.Group>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field }) => (
                  <Form.Control
                    {...field}
                    placeholder={t('common.phoneNumber')}
                    isInvalid={!!errors.phoneNumber}
                    onChange={(e) => {
                      const { value } = e.target;
                      const numericValue = value.replace(/[^0-9]/g, '');
                      field.onChange(numericValue);
                    }}
                  />
                )}
              />
              <BaseFormError
                errors={errors}
                name="phoneNumber"
              />
            </Form.Group>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor=""
            className="contact-form-label text-xxs color-black text-medium mb-2"
          >
            {t('common.subject')} <span className="color-red">*</span>
          </label>
          <Form.Group>
            <Controller
              control={control}
              name="subject"
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder={t('common.subject')}
                  isInvalid={!!errors.subject}
                />
              )}
            />
            <BaseFormError
              errors={errors}
              name="subject"
            />
          </Form.Group>
        </div>
        <div className="mb-5">
          <label
            htmlFor=""
            className="contact-form-label text-xxs color-black text-medium mb-2"
          >
            {t('common.message')} <span className="color-red">*</span>
          </label>
          <Form.Group>
            <Controller
              control={control}
              name="message"
              render={({ field }) => (
                <Form.Control
                  {...field}
                  as="textarea"
                  placeholder={t('common.message')}
                  isInvalid={!!errors.message}
                />
              )}
            />
            <BaseFormError
              errors={errors}
              name="message"
            />
          </Form.Group>
        </div>
        <Button
          variant="secondary"
          type="submit"
          className="w-100"
        >
          {t('common.submit')}
        </Button>
      </Form>
    </div>
  );
}
