import AuthLoginForm from '@/app/components/auth/AuthLoginForm';
import { Metadata } from 'next';

export function generateMetadata(): Metadata {
  return {
    title: `Kanzway - Login`,
  };
}

function Login() {
  return <AuthLoginForm />;
}

export default Login;
