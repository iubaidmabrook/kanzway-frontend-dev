'use client';

import { getProductsByIds } from '@/api/product.api';
import useLangClient from '@/hooks/useLangClient';
import useStore from '@/hooks/useStore';
import useCompareStore from '@/store/compare.store';
import useModalCompareStore from '@/store/modal-compare.store';
import { Modal } from 'react-bootstrap';
import { useQuery } from 'react-query';
import Skeleton from '../base/BaseSkeleton';
import { CompareList, CompareNav } from '../compare';

export default function ModalCompare() {
  const { isAr } = useLangClient();

  const items = useStore(useCompareStore, (state) => state.items);
  const { isOpen, onClose } = useModalCompareStore();

  const ids = items ? items.map((item) => item.id) : [];

  const { data, isLoading } = useQuery(['compare', ids], () =>
    getProductsByIds(ids),
  );

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      fullscreen
      scrollable
      className="border-0 modal-compare "
      style={{ width: '100%', maxWidth: '100%' }}
    >
      <Modal.Body
        className="p-0 light-scrollbar position-relative"
        dir={isAr ? 'rtl' : ''}
        style={{ width: '100%', maxWidth: '100%' }}
        id="modal-compare"
      >
        <div className="sticky-top">
          <button
            className="btn-close-modal-compare"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="icon-ico-close"></span>
          </button>
        </div>
        <div className="border-0">
          {isLoading ? (
            <>
              <div className="container p-xl-5 p-3 py-5 pb-0 pb-xl-0">
                <h4 className="Mulish text-bold color-dark">
                  Product Comparison
                </h4>
                <div className="row mt-3">
                  <div className="col-2">
                    <Skeleton height="20px" />
                  </div>
                </div>
              </div>
              <div className="container mt-5 p-xl-5 p-3 py-5">
                <div className="row g-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      className="col-lg-3"
                      key={`${i.toString()}`}
                    >
                      <Skeleton height="280px" />
                      <div className="product-meta gap-1 d-flex flex-column">
                        <Skeleton height="20px" />
                        <Skeleton height="24px" />
                        <Skeleton height="20px" />
                        <Skeleton
                          height="24px"
                          className=" mt-2 w-25"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            data && (
              <>
                <CompareNav compare={data} />
                <CompareList compare={data} />
              </>
            )
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
