import { useI18n } from '@/locales/client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PersonalDetail, Security, ShippingAddress } from '../accountSetting';

function AccountSetting() {
  const t = useI18n();
  const [activeFilter, setActiveFilter] = useState('personal_detail');

  const TAB_ITEMS = [
    {
      key: 'personal_detail',
      value: t('register.personalDetail.title'),
    },
    {
      key: 'security',
      value: t('profile.security'),
    },
    {
      key: 'shipping_address',
      value: t('profile.shippingAddress'),
    },
  ];

  const getSelectedTab = () => {
    switch (activeFilter) {
      case 'personal_detail':
        return <PersonalDetail />;
        break;
      case 'security':
        return <Security />;
        break;
      case 'shipping_address':
        return <ShippingAddress />;
        break;
      default:
        return null;
        break;
    }
  };

  return (
    <div className="col-xl-9 col-sm-8">
      <Swiper
        loop={false}
        slidesPerView="auto"
        className="tabs"
        wrapperClass="swiper-wrapper nav-tabs border-0 order-tab"
      >
        {TAB_ITEMS.map((items) => (
          <SwiperSlide
            className="swiper-slide add-margin"
            key={Math.random()}
          >
            <button
              className={`${activeFilter === items.key ? 'active' : ''} nav-link`}
              id="order-1-tab"
              data-bs-toggle="tab"
              data-bs-target="#order-1"
              type="button"
              role="tab"
              aria-controls="order-1"
              aria-selected="true"
              onClick={() => setActiveFilter(items.key)}
            >
              {items.value}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        className="tab-content mt-4"
        id="nav-tabContent"
      >
        {getSelectedTab()}
      </div>
    </div>
  );
}

export default AccountSetting;
