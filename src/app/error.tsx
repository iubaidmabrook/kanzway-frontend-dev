'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="main-inner text-center mt-5">
      <p>{error.message}</p>
    </div>
  );
}
