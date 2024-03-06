'use client';

import BaseProfileNav from '@/app/components/base/BaseProfileNav';
import {
  AccountSetting,
  CompanyMember,
  Exchange,
  MyOrder,
  Refund,
} from '@/app/components/profile';
import useProfileNavStore from '@/store/profileNav.store';

function Profile() {
  const { tab } = useProfileNavStore();

  const renderComponent = () => {
    switch (tab) {
      case 'myorder':
        return <MyOrder />;
        break;
      case 'refund':
        return <Refund />;
        break;
      case 'exchange':
        return <Exchange />;
        break;
      case 'whislist':
        return null;
        break;
      case 'member':
        return <CompanyMember />;
        break;
      case 'account_setting':
        return <AccountSetting />;
        break;
      default:
        return null;
        break;
    }
  };

  return (
    <>
      <style>
        {`
          body {
            background: #fafafa;
          }
        `}
      </style>
      <section className="main-inner">
        <div className="container">
          <div className="auth-wrapper">
            <div className="row g-4">
              <div className="col-xl-3 col-sm-4">
                <BaseProfileNav />
              </div>
              {renderComponent()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
