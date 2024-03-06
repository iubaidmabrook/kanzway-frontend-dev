'use client';

import React from 'react';
import { BaseQtyInput } from '../base';

export default function CartItem() {
  return (
    <div className="d-flex cart-items gap-3 mb-3">
      <div className="flex-grow-1">
        <div className="row gx-1 ">
          <div className="col-9">
            <div className="d-flex gap-3 mb-3">
              <div className="img-cart">
                <a href="product-detail.html">
                  <img
                    src="/img/list-3.jpg"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="opt-meta">
                <a
                  href="product-detail.html"
                  className="text-xs Mulish color-dark d-inline-block text-bold"
                >
                  Subland Drill 90°
                </a>
                <div className="text-xxs color-gray-60 text-hidden mb-2">
                  Portescap S.A. - A4800M8
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="price-bofore">SAR 280</div>
                  <div className="price-after">SAR 240</div>
                </div>
              </div>
            </div>
            <p className="mb-0 text-xs color-dark">Please add bubble wrap </p>
          </div>
          <div className="col-3">
            <div className="d-flex h-100 justify-content-between flex-column">
              <div className="d-flex justify-content-end"></div>
              <div className="d-flex justify-content-end">
                <div className="box-qty">
                  <div className="ft-11 color-gray-60">Qty :</div>
                  <BaseQtyInput />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
