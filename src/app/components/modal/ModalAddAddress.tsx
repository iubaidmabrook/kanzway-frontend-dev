'use client';

import useModalAddAddressStore from '@/store/modal-add-address.store';
import React from 'react';
import { Modal, ModalBody } from 'react-bootstrap';

export default function ModalAddAddress() {
  const { isOpen, onClose } = useModalAddAddressStore();
  return (
    <Modal
      className=""
      id="modal-address"
      show={isOpen}
      onHide={onClose}
      size="lg"
      centered
      scrollable
    >
      <ModalBody className="">
        <div className="modal-content border-0">
          <div className="d-flex justify-content-between px-3">
            <p className="color-dark text-extraBold Mulish mb-0">Add Address</p>
            <button
              type="button"
              className="btn-close btn-nohover"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            />
          </div>
          <div className="p-3">
            <div className="row g-3">
              <div className="col-sm-12">
                <label className="text-xs">Label</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name=""
                  defaultValue=""
                  id=""
                  placeholder="Example : Home, Apartment, Office etc"
                />
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Receipment</label>
                <input
                  type="text"
                  className="form-control rounded-0"
                  name=""
                  defaultValue=""
                  id=""
                  placeholder=""
                />
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Phone Number</label>
                <input
                  type="tel"
                  className="form-control rounded-0"
                  name=""
                  defaultValue=""
                  id=""
                  placeholder=""
                />
              </div>
              <div className="col-sm-12">
                <label className="text-xs">Pinpoint</label>
                <a
                  href="#"
                  type="button"
                  className="pinpoint"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-maps"
                >
                  Select pin location
                </a>
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Province</label>
                <select
                  className="form-select rounded-0"
                  aria-label="Default"
                >
                  <option selected />
                  <option value={1}>Province 1</option>
                  <option value={2}>Province 2</option>
                  <option value={3}>Province 3</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Kota/Kabupaten</label>
                <select
                  className="form-select rounded-0"
                  aria-label="Default"
                >
                  <option selected />
                  <option value={1}>City 1</option>
                  <option value={2}>City 2</option>
                  <option value={3}>City 3</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Kel/Kec</label>
                <select
                  className="form-select rounded-0"
                  aria-label="Default"
                >
                  <option selected />
                  <option value={1}>kel 1</option>
                  <option value={2}>kel 2</option>
                  <option value={3}>kel 3</option>
                </select>
              </div>
              <div className="col-sm-6">
                <label className="text-xs">Postal Code</label>
                <select
                  className="form-select rounded-0"
                  aria-label="Default"
                >
                  <option selected />
                  <option value={1}>Postal Code 1</option>
                  <option value={2}>Postal Code 2</option>
                  <option value={3}>Postal Code 3</option>
                </select>
              </div>
              <div className="col-sm-12">
                <label className="text-xs">Address Detail</label>
                <div className="form-group position-relative ">
                  <textarea
                    className="form-control rounded-0"
                    rows={3}
                    name=""
                    placeholder="Cth : Jalan Awiligar No 24 RT 01 RW 24"
                    id=""
                    value=""
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <button
                  className="btn btn-secondary w-100"
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}
