'use client';

import useModalPaymentStore from '@/store/modal-payment.store';
import useModalSelectPaymentStore from '@/store/modalSelectPayment';
import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ModalSelectPayment() {
  const { isOpen, onClose } = useModalSelectPaymentStore();
  const { onOpen } = useModalPaymentStore();
  return (
    <Modal
      className="modal fade"
      id="modal-payment"
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
            <div className="d-flex justify-content-between px-3">
              <p className="color-dark text-extraBold Mulish mb-0">
                Pilih Metode Pembayaran
              </p>
              <button
                type="button"
                className="btn-close btn-nohover"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="p-3">
              <p className="text-bold color-dark mb-0">Bank Transfer</p>
              <a
                role="presentation"
                className="list-bank"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-pay"
                onClick={() => {
                  onClose();
                  onOpen();
                }}
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="logo-bank">
                    <img
                      src="/img/Logo/mandiri.png"
                      className="img-fluid"
                    />{' '}
                  </div>
                  <div className="text-xs color-dark">Bank Mandiri</div>
                </div>
              </a>
              <a
                href="#"
                className="list-bank"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-pay"
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="logo-bank">
                    <img
                      src="/img/Logo/bca.jpg"
                      className="img-fluid"
                    />{' '}
                  </div>
                  <div className="text-xs color-dark">Bank BCA</div>
                </div>
              </a>
              <a
                href="#"
                className="list-bank"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-pay"
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="logo-bank">
                    <img
                      src="/img/Logo/bni.png"
                      className="img-fluid"
                    />{' '}
                  </div>
                  <div className="text-xs color-dark">Bank BNI</div>
                </div>
              </a>
              <a
                href="#"
                className="list-bank"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-pay"
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="logo-bank">
                    <img
                      src="/img/Logo/bri.png"
                      className="img-fluid"
                    />{' '}
                  </div>
                  <div className="text-xs color-dark">Bank BRI</div>
                </div>
              </a>
              <a
                href="#"
                className="list-bank"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#modal-pay"
              >
                <div className="d-flex gap-3 align-items-center">
                  <div className="logo-bank">
                    <img
                      src="/img/Logo/cimb.png"
                      className="img-fluid"
                    />{' '}
                  </div>
                  <div className="text-xs color-dark">Bank CIMB Niaga</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
