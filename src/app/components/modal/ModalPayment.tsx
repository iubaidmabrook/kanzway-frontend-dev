'use client';

import useModalPaymentStore from '@/store/modal-payment.store';
import useModalSelectPaymentStore from '@/store/modalSelectPayment';
import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalPayment() {
  const { onClose, isOpen } = useModalPaymentStore();
  const { onOpen } = useModalSelectPaymentStore();
  return (
    <Modal
      className="modal fade"
      id="modal-pay"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      centered
      scrollable
      onHide={onClose}
      show={isOpen}
    >
      <Modal.Body className="">
        <div className="modal-content border-0">
          <div className="modal-body p-4 ">
            <div className="d-flex justify-content-start align-items-center px-3">
              <a
                type="button"
                className="me-2"
                data-bs-toggle="modal"
                data-bs-target="#modal-payment"
                role="presentation"
                onClick={() => {
                  onClose();
                  onOpen();
                }}
              >
                <span className="icon-ico-short-arrow" />
              </a>
              <p className="color-dark text-extraBold Mulish mb-0">
                Pembayaran
              </p>
            </div>
            <div className="p-3">
              <p className="text-xs color-dark mb-2">Bank Transfer</p>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-xs">Payment Method</div>
                <div className="text-xs color-dark">Tranfer Bank Mandiri</div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-xs">Price (1 product)</div>
                <div className="text-xs color-dark">SAR 240</div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-xs">Promo</div>
                <div className="text-xs color-dark">SAR 0</div>
              </div>
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-xs">Shipping Cost</div>
                <div className="text-xs color-dark">SAR 0</div>
              </div>
              <hr className="my-3" />
              <div className="d-flex justify-content-between align-items-center my-3">
                <div className="text-xs">Total</div>
                <div className="text-bold color-dark">SAR 240</div>
              </div>
              <a
                href="payment-summary.html"
                className="btn btn-secondary w-100"
              >
                Pay
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
