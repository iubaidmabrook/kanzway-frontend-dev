'use client';

import { TBaseSkeletonProps } from '@/types/base-component.type';
import clsx from 'clsx';

export default function Skeleton({
  className,
  height = '40px',
  ...props
}: TBaseSkeletonProps) {
  return (
    <div
      className={clsx('animate-pulse w-100 bg-body-secondary', className)}
      style={{ height }}
      {...props}
    />
  );
}
