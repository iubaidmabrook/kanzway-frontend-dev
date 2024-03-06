'use client';

import React from 'react';
import { Dropdown } from 'react-bootstrap';

export default function SelectShippingCourier() {
  return (
    <Dropdown
      className="dropdown"
      placement="bottom"
    >
      <Dropdown.Toggle
        className="btn btn-nohover btn-shipping"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <div className="shiping-name">Select shipping courier</div>
        <div className="shipping-price" />
      </Dropdown.Toggle>
      <Dropdown.Menu className="dropdown-menu ships">
        <li>
          <a
            id="ship-1"
            className="shipping-item active"
            href="#"
          >
            <div
              id="named-1"
              className="text-bold named color-dark "
            >
              Next Day
            </div>
            <div
              id="priced-1"
              className="text-xs priced color-dark"
            >
              SAR 0
            </div>
          </a>
        </li>
        <li>
          <a
            id="ship-2"
            className="shipping-item"
            href="#"
          >
            <div
              id="named-2"
              className="text-bold named color-dark"
            >
              Same Day
            </div>
            <div
              id="priced-2"
              className="text-xs priced color-dark"
            >
              SAR 0
            </div>
          </a>
        </li>
        <li>
          <a
            id="ship-3"
            className="shipping-item"
            href="#"
          >
            <div
              id="named-3"
              className="text-bold named color-dark"
            >
              Instant
            </div>
            <div
              id="priced-3"
              className="text-xs priced color-dark"
            >
              SAR 0
            </div>
          </a>
        </li>
      </Dropdown.Menu>
    </Dropdown>
  );
}
