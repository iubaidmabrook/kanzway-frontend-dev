'use client';

// React
import React from 'react';

// Locales
import { useScopedI18n } from '@/locales/client';

// Types
import { TBaseFormErrorProps } from '@/types/base-component.type';

// Components
import { Form } from 'react-bootstrap';

const BaseFormError = React.forwardRef<HTMLDivElement, TBaseFormErrorProps>(
  (props, ref) => {
    const { errors, name, asFormText = false } = props;

    const t = useScopedI18n('validation');

    if (typeof name === 'string' && errors[name]?.message) {
      if (!asFormText) {
        return (
          <Form.Control.Feedback
            type="invalid"
            ref={ref}
          >
            {t(errors[name]?.message as any)}
          </Form.Control.Feedback>
        );
      }
      return (
        <Form.Text
          className="text-danger"
          ref={ref}
        >
          {t(errors[name]?.message as any)}
        </Form.Text>
      );
    }

    return null;
  },
);

export default BaseFormError;
