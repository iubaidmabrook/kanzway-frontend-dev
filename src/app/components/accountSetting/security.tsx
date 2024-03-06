import { useI18n } from '@/locales/client';
import { clsx } from 'clsx';
import { useState } from 'react';

function Security() {
  const t = useI18n();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  return (
    <div
      className="tab-pane show active"
      id="order-2"
      role="tabpanel"
      aria-labelledby="order-2-tab"
    >
      <div className="pt-3">
        <div className="Mulish text-bold mb-3 color-dark">
          {t('profile.changePassword')}
        </div>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.currentPassword')}
              </label>
              <div className="position-relative">
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  className="form-control"
                  name=""
                  placeholder=""
                  id="password"
                />
                {/* <span
                  toggle="#password"
                  className="btn-eye red"
                ></span> */}
                <span
                  role="presentation"
                  className={clsx(
                    'btn-eye',
                    'red',
                    showCurrentPassword ? 'switch' : '',
                  )}
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6"></div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.newPassword')}
              </label>
              <div className="position-relative">
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  className="form-control"
                  name=""
                  placeholder=""
                  id="password2"
                />
                {/* <span
                  toggle="#password2"
                  className="btn-eye red"
                ></span> */}
                <span
                  role="presentation"
                  className={clsx(
                    'btn-eye',
                    'red',
                    showNewPassword ? 'switch' : '',
                  )}
                  onClick={() => setShowNewPassword(!showNewPassword)}
                />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.conFirmNewPassword')}
              </label>
              <div className="position-relative">
                <input
                  type={showConfirmNewPassword ? 'text' : 'password'}
                  className="form-control"
                  name=""
                  placeholder=""
                  id="password3"
                />
                {/* <span
                  toggle="#password3"
                  className="btn-eye red"
                ></span> */}
                <span
                  role="presentation"
                  className={clsx(
                    'btn-eye',
                    'red',
                    showConfirmNewPassword ? 'switch' : '',
                  )}
                  onClick={() =>
                    setShowConfirmNewPassword(!showConfirmNewPassword)
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-6 mx-auto">
        <button className="btn btn-secondary w-100">{t('common.save')}</button>
      </div>
    </div>
  );
}

export default Security;
