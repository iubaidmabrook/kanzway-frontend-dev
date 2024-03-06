import { useI18n } from '@/locales/client';
import { TShippingAddress } from '@/types/shippingAddress.type';
import { ReactNode } from 'react';

function ShippingAddress() {
  const t = useI18n();

  const FAKE_ADDRESS: TShippingAddress[] = [
    {
      id: 1,
      address_name: 'Work',
      address: 'ABC Street No 1',
      city: 'Bandung',
      country: 'Indonesia',
      lat: '184488',
      long: '889484',
      isMain: true,
    },
    {
      id: 2,
      address_name: 'Home',
      address: 'ABC Street No 10',
      city: 'Bandung',
      country: 'Indonesia',
      lat: '184488',
      long: '889484',
      isMain: false,
    },
  ];

  const renderAddressList = () => {
    let renderedList: ReactNode = '';
    if (FAKE_ADDRESS.length === 0) {
      renderedList = (
        <div className="empty-wrapper">
          <div className="box-ew p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className=" Mulish text-bold color-dark">
                {t('profile.noAddress')}
              </div>
            </div>
            <hr className="my-3" />
            <div className="text-xs mb-4">{t('profile.noAddressSub')}</div>
            <div className="row g-3">
              <div className="col-sm-12">
                <button
                  className="btn btn-secondary w-100"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-address"
                >
                  {t('profile.addNewAddress')}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      renderedList = (
        <>
          <div className="row g-4 gx-lg-5 mb-4">
            {FAKE_ADDRESS.map((items) => (
              <div className="col-sm-6">
                <div
                  className={`${items.isMain ? 'active' : ''} box-address p-3`}
                >
                  <div className="text-xs color-dark text-bold mb-2">
                    {items.address_name}
                  </div>
                  {/* <div className="text-xs color-dark mb-2">
                    Andri - 0878 8989 8989
                  </div> */}
                  <p className="text-xs">{items.address}</p>
                  <hr />
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="text-xs color-red"
                      style={{ border: 0, background: 'transparent' }}
                    >
                      {items.isMain
                        ? t('profile.mainAddress')
                        : t('profile.useAsMainAddress')}
                    </button>
                    {items.isMain ? (
                      <button
                        className="text-xs color-red"
                        style={{ border: 0, background: 'transparent' }}
                        data-bs-toggle="modal"
                        data-bs-target="#modal-edit-address"
                      >
                        {t('common.edit')}
                      </button>
                    ) : (
                      <div className="d-flex gap-3">
                        <button
                          className="text-xs color-default"
                          style={{ border: 0, background: 'transparent' }}
                          data-bs-toggle="modal"
                          data-bs-target="#modal-delete"
                        >
                          {t('common.delete')}
                        </button>
                        <button
                          className="text-xs color-red"
                          style={{ border: 0, background: 'transparent' }}
                          data-bs-toggle="modal"
                          data-bs-target="#modal-edit-address"
                        >
                          {t('common.edit')}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-3 col-6 mx-auto">
            <button
              className="btn btn-secondary w-100"
              data-bs-toggle="modal"
              data-bs-target="#modal-address"
            >
              {t('profile.addNewAddress')}
            </button>
          </div>
        </>
      );
    }

    return renderedList;
  };

  return (
    <div className="pt-3">
      <div className="Mulish text-bold mb-3 color-dark">
        {t('profile.addressList')}
      </div>
      {renderAddressList()}
    </div>
  );
}

export default ShippingAddress;
