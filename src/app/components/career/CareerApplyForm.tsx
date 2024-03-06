'use client';

// React
import React, { ChangeEvent, useCallback, useMemo, useRef } from 'react';

// Next
import { useParams } from 'next/navigation';

// Components
import { Button, Form } from 'react-bootstrap';
import { BaseFormError } from '@/app/components/base';
import toast from 'react-hot-toast';

// Form
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Api
import { useCareerApply } from '@/api/career.api';

// Types
import { TCareerApply } from '@/types/career.type';

// Locales
import { useScopedI18n } from '@/locales/client';

const schema = yup.object().shape({
  name: yup.string().required('required'),
  email: yup.string().email().required('required'),
  phoneNumber: yup.string().required('required'),
  cv: yup
    .mixed<File>()
    .test('required', 'You need to provide a file', (file) => {
      if (file) return true;
      return false;
    })
    .required('required'),
});

function CareerApplyForm() {
  const tCommon = useScopedI18n('common');
  const tCareer = useScopedI18n('career');
  const params = useParams();

  const {
    handleSubmit,
    formState: { errors },
    control,
    watch,
    reset,
  } = useForm<yup.InferType<typeof schema>>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      cv: undefined,
    },
  });

  const watchCv = watch('cv');

  // API
  const { mutate, isLoading: loading } = useCareerApply({
    onSuccess: () => {
      toast.success('Successfully submit an application');
      reset();
    },
  });

  /**
   * Handle Submit form process
   */
  const handleActualSubmit: SubmitHandler<TCareerApply> = useCallback(
    (values: TCareerApply) => {
      const fd = new FormData();
      fd.append('name', values.name);
      fd.append('email', values.email);
      fd.append('phoneNumber', values.phoneNumber);
      fd.append('cv', values.cv as File);

      mutate({
        id: params.id as unknown as number,
        payload: fd,
      });
    },
    [mutate, params.id],
  );

  const inputFileRef = useRef<HTMLInputElement | null>(null);

  const handleTriggerFileChange = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click();
    }
  };

  const fileName = useMemo<string>(() => {
    if (watchCv?.name) {
      return watchCv.name;
    }
    return 'Upload CV Form';
  }, [watchCv]);

  return (
    <div className="box-border rounded-2 p-3 p-sm-4">
      <p className="text-bold text-md Mulish color-dark">
        {tCareer('applicationForm')}
      </p>

      <Form
        noValidate
        onSubmit={handleSubmit(handleActualSubmit)}
      >
        <div className="row g-3">
          <Form.Group>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder={tCommon('fullName')}
                  isInvalid={!!errors.name}
                />
              )}
            />
            <BaseFormError
              errors={errors}
              name="email"
            />
          </Form.Group>

          <Form.Group>
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

          <Form.Group>
            <Controller
              name="phoneNumber"
              control={control}
              render={({ field }) => (
                <Form.Control
                  {...field}
                  placeholder={tCommon('phoneNumber')}
                  isInvalid={!!errors.name}
                />
              )}
            />
            <BaseFormError
              errors={errors}
              name="email"
            />
          </Form.Group>

          <Form.Group>
            <Controller
              name="cv"
              control={control}
              render={({ field }) => (
                <div className="file-upload">
                  <input
                    ref={inputFileRef}
                    type="file"
                    className="d-none"
                    accept=".pdf,.docx,.doc"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        field.onChange(file);
                      }
                    }}
                  />
                  <span className="box-file-name flex-grow-1">
                    <span id="custom-text">{fileName}</span>
                  </span>
                  <button
                    onClick={handleTriggerFileChange}
                    type="button"
                    className="btn btn-red-custom btn-nohover"
                  />
                </div>
              )}
            />
            <BaseFormError
              errors={errors}
              asFormText
              name="cv"
            />
          </Form.Group>

          <div className="col-sm-12">
            <Button
              type="submit"
              variant="secondary"
              className="w-100"
              disabled={loading}
            >
              {loading ? '...' : 'Submit'}
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
}

export default CareerApplyForm;
