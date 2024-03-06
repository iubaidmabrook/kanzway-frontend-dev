import { HTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';

export type TBaseFormErrorProps = {
  errors: FieldErrors;
  name: string;
  asFormText?: boolean;
};

export type TBaseQtyInputProps = {
  value: number;
  onChange: (value: number) => void;
  max: number;
  min: number;
};

export type TBasePaginationProps = {
  currentPage: number;
  totalPage: number;
};

export type TBaseSkeletonProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  height: string;
};
