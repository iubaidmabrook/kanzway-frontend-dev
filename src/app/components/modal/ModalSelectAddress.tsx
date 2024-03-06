'use client';

import useModalAddAddressStore from '@/store/modal-add-address.store';
import useModalSelectAddressStore from '@/store/modal-select-address.store';
import { Modal } from 'react-bootstrap';

export default function ModalSelectAddress() {
  const { isOpen, onClose } = useModalSelectAddressStore();
  const { onOpen } = useModalAddAddressStore();
  return (
    <Modal
      className="modal fade"
      id="modal-edits"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      centered
      scrollable
      show={isOpen}
      onHide={onClose}
    >
      <Modal.Body className="">
        <div className="modal-content border-0">
          <div className="modal-body p-4 ">
            <div className="d-flex justify-content-between px-3">
              <p className="color-dark text-extraBold Mulish mb-0">
                Select Another Address
              </p>
              <a
                role="presentation"
                type="button"
                className="btn-close btn-nohover"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              />
            </div>
            <div className="p-3">
              <div className="mb-3">
                <a
                  // href="#"
                  type="button"
                  className="add-address"
                  role="presentation"
                  onClick={() => {
                    onClose();
                    onOpen();
                  }}
                >
                  Add Address
                </a>
              </div>
              <div className="address-items mb-4">
                <input
                  type="radio"
                  className="hidden"
                  id="la-1"
                  name="lists"
                />
                <label htmlFor="la-1">
                  <div className="col-lg-9">
                    <div className="text-xs color-dark mb-2">
                      <strong>Andri - 0878 8989 8989</strong>
                    </div>
                    <p className="text-xs mb-1">
                      Jalan Sukabumi, Dekat KFC Jawa Barat, Kab Bandung,
                      Cimeunyan, 40141
                    </p>
                  </div>
                  <hr />
                  <a
                    href="#"
                    type="button"
                    className="text-xs color-red"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-address-fill"
                  >
                    Edit address
                  </a>
                </label>
              </div>
              <div className="address-items">
                <input
                  type="radio"
                  className="hidden"
                  id="la-2"
                  name="lists"
                />
                <label htmlFor="la-2">
                  <div className="col-lg-9">
                    <div className="text-xs color-dark mb-2">
                      <strong>Andri - 0878 8989 8989</strong>
                    </div>
                    <p className="text-xs mb-1">
                      Jalan Sukabumi, Dekat KFC Jawa Barat, Kab Bandung,
                      Cimeunyan, 40141
                    </p>
                  </div>
                  <hr />
                  <a
                    href="#"
                    type="button"
                    className="text-xs color-red"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-address-fill"
                  >
                    Edit address
                  </a>
                </label>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
