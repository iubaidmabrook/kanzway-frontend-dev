import { useCurrentLocale, useI18n } from '@/locales/client';
import useProfileNavStore from '@/store/profileNav.store';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

function BaseProfileNav() {
  const t = useI18n();
  const pathname = usePathname();
  const currentLocale = useCurrentLocale();
  const router = useRouter();
  const { tab, add: selectedTab } = useProfileNavStore();

  const isProfilePage = useMemo(
    () => pathname === `/${currentLocale}/profile`,
    [currentLocale, pathname],
  );

  const selectNavTab = (key: string) => {
    if (isProfilePage) {
      selectedTab(key);
    } else {
      selectedTab(key);
      router.push(`/${currentLocale}/profile`);
    }
  };

  return (
    <div className="bg-white p-4 rounded-2">
      <div className="company-name mb-3">
        <div className="img-sm">
          <Image
            src="https://picsum.photos/100/100?random=1"
            className="img-fluid"
            width={48}
            height={48}
            alt=""
          />
        </div>
        <div className="name-c text-xxxs text-hidden color-dark text-medium">
          {`${isProfilePage ? 'Company Makmur Jaya Abadi' : 'Company Makmur Jaya'}`}
        </div>
      </div>
      <div className="d-flex align-items-center gap-3">
        <div className="img-profile">
          <Image
            src="https://picsum.photos/100/100?random=2"
            className="img-fluid"
            width={48}
            height={48}
            alt=""
          />
        </div>
        <div className="profile-name">
          <div className="text-xs Mulish color-dark text-extraBold mb-2">
            Lia Anger
          </div>
          <div className="text-xxs ">Manager</div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="dropdown">
        <button
          id="btn-profile"
          className="btn btn-secondary w-100 btn-profile"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <div>
            <span className="icon-ico-myorder me-2"></span>
            {t('profile.myorder')}
          </div>
        </button>
        <div
          id="menu-resize"
          className="profile"
        >
          <ul className="menu-profile">
            <li>
              <span
                onClick={() => selectNavTab('myorder')}
                role="presentation"
                className={`${tab === 'myorder' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-myorder"></span>
                {t('profile.myorder')}
              </span>
            </li>
            <li>
              <span
                onClick={() => selectNavTab('refund')}
                role="presentation"
                className={`${tab === 'refund' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-refund"></span>
                {t('profile.refund')}
              </span>
            </li>
            <li>
              <span
                onClick={() => selectNavTab('exchange')}
                role="presentation"
                className={`${tab === 'exchange' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-exchange"></span>
                {t('profile.exchange')}
              </span>
            </li>
            <li>
              <span
                onClick={() => selectNavTab('whislist')}
                role="presentation"
                className={`${tab === 'whislist' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-whislist"></span>
                {t('profile.whislist')}
              </span>
            </li>
            <li>
              <span
                onClick={() => selectNavTab('member')}
                role="presentation"
                className={`${tab === 'member' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-company-member"></span>
                {t('profile.companyMember')}
              </span>
            </li>
            <li>
              <span
                onClick={() => selectNavTab('account_setting')}
                role="presentation"
                className={`${tab === 'account_setting' ? 'active' : ''} link-menu-profile`}
              >
                <span className="icon-ico-account-management"></span>{' '}
                {t('profile.accountSetting')}
              </span>
            </li>
            <li>
              <a
                type="button"
                className="link-menu-profile"
                data-bs-toggle="modal"
                data-bs-target="#modal-logout"
              >
                {t('profile.logout')}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BaseProfileNav;
