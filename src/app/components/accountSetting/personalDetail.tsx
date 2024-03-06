import { useI18n } from '@/locales/client';

function PersonalDetail() {
  const t = useI18n();

  return (
    <div
      className="tab-pane fade show active"
      id="order-1"
      role="tabpanel"
      aria-labelledby="order-1-tab"
    >
      <div className="pt-3">
        <div className="Mulish text-bold mb-3 color-dark">
          {t('profile.profilePicture')}
        </div>
        <div className="d-flex align-items-center flex-sm-wrap gap-4 mb-4">
          <div className="profile-thumb">
            <img
              src="/img/profile.png"
              className="img-fluid"
            />
          </div>
          <div className="profile-upload-button">
            <div className="upload-file-btn">
              <input
                type="file"
                id="upload-thumb"
                className="hidden"
              />
              <label
                htmlFor="upload-thumb"
                className="btn btn-red"
              >
                {t('profile.chooseFile')}
              </label>
            </div>
            <div className="text-xxs">{t('profile.maxSize')}</div>
          </div>
        </div>

        <p className="text-xxl color-dark text-bold">{t('common.details')}</p>
        <div className="row g-4 mb-4">
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.firstName')}
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                placeholder=""
                id=""
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.lastName')}
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                placeholder=""
                id=""
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.email')}
              </label>
              <input
                type="email"
                className="form-control"
                name=""
                placeholder=""
                id=""
              />
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile required">
                {t('common.phoneNumber')}
              </label>
              <div className="phone-form">
                <div className="box-phone">+62</div>
                <div className="input-value">
                  <input
                    type="text"
                    className="form-control rounded-0 border-0"
                    name=""
                    placeholder=""
                    id=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile ">
                {t('common.birthDate')}
              </label>
              <div className="position-relative date-picker">
                <input
                  type="date"
                  className="form-control datepicker"
                  name=""
                  placeholder=""
                  id=""
                />
                <div className="ico-date">
                  <span className="icon-ico-calendar color-red"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="form-profile">
              <label className="label-form-profile ">
                {t('common.gender')}
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected></option>
                <option value="1">{t('common.male')}</option>
                <option value="2">{t('common.female')}</option>
                <option value="3">{t('common.other')}</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-4 mx-auto">
          <button className="btn btn-secondary w-100">
            {t('common.save')}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetail;
