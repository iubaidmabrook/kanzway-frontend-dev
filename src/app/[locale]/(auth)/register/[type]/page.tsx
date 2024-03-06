// Next
import { Metadata } from 'next';

// Components
import AuthRegisterForm from '@/app/components/auth/AuthRegisterForm';

export function generateMetadata({
  params,
}: {
  params: { type: string };
}): Metadata {
  const { type } = params;
  return {
    title: `Kanzway - Register -  ${type}`,
  };
}

export default function RegisterByTypePage() {
  return <AuthRegisterForm />;
}
