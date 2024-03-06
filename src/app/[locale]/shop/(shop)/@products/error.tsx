'use client';

import { useRouter } from 'next/navigation';
import { Button } from 'react-bootstrap';

export default function ShopProductsError({ reset }: { reset: () => void }) {
  const router = useRouter();
  return (
    <div className="col-xl-9 col-lg-8 d-flex flex-column justify-content-center align-items-center">
      <p>Error when getting products</p>

      <div className=" mt-3 d-flex justify-content-center gap-3">
        <Button
          variant="secondary"
          onClick={router.back}
        >
          Back
        </Button>
        <button
          className=" btn btn-auth"
          onClick={reset}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
