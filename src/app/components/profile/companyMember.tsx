import { useI18n } from '@/locales/client';
import { TCompanyMember } from '@/types/companyMember.type';
import { ReactNode } from 'react';

function CompanyMember() {
  const t = useI18n();

  const FAKE_MEMBER: TCompanyMember[] = [
    {
      id: 2,
      type: 'company',
      fistName: 'Jhon',
      lastName: 'Doe',
      email: 'email@kanzway.com',
      phoneNumber: '077364634',
      gender: 'F',
      dob: '1990-10-10',
      profilePicture: 'https://www.demoapp.xyz/kanzway/html/img/profile-1.jpg',
      roles: [
        {
          id: 1,
          code: '001',
          name: 'Finance',
        },
      ],
      departements: [
        {
          id: 1,
          code: '001',
          name: 'Logistics',
        },
      ],
    },
    {
      id: 3,
      type: 'company',
      fistName: 'Charlie',
      lastName: '-',
      email: 'email@kanzway.com',
      phoneNumber: '077364635',
      gender: 'F',
      dob: '1990-10-10',
      profilePicture: 'https://www.demoapp.xyz/kanzway/html/img/profile-1.jpg',
      roles: [
        {
          id: 1,
          code: '001',
          name: 'Finance',
        },
      ],
      departements: [
        {
          id: 1,
          code: '001',
          name: 'Logistics',
        },
      ],
    },
  ];

  const renderCompanyMember = () => {
    let returnList: ReactNode = '';

    if (FAKE_MEMBER.length === 0) {
      returnList = (
        <div className="empty-wrapper">
          <div className="box-ew p-3">
            <div className="d-flex justify-content-between align-items-center">
              <div className=" Mulish text-bold color-dark">Company Member</div>
            </div>
            <hr className="my-3" />
            <div className="text-xs mb-4">
              Add new member by clicking the button below.{' '}
            </div>
            <div className="row g-3">
              <div className="col-sm-12">
                <a
                  href="add-member.html"
                  className="btn btn-secondary w-100"
                >
                  Add member
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      returnList = (
        <>
          <div className="head-table">
            <div className="td-1 tr">{t('common.name')}</div>
            <div className="td-2 tr">{t('common.role')}</div>
            <div className="td-3 tr">{t('common.department')}</div>
            <div className="td-4 tr">{t('common.email')}</div>
            <div className="td-5 tr">{t('common.phoneNumber')}</div>
            <div className="td-6 tr">{t('common.action')}</div>
          </div>
          {FAKE_MEMBER.map((items) => (
            <div className="body-table">
              <div className="td-1 tr">{`${items.fistName} ${items.lastName}`}</div>
              <div className="td-2 tr">{items.roles[0].name}</div>
              <div className="td-3 tr">{items.departements[0].name}</div>
              <div className="td-4 tr ">
                <div className="text-hidden">{items.email}</div>
              </div>
              <div className="td-5 tr">{items.phoneNumber}</div>
              <div className="td-6 tr">
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="detail-company-member.html"
                    className="d-inline-block"
                  >
                    <img
                      src="/img/Icon/ico-eye.svg"
                      className="img-fluid"
                    />
                  </a>
                  <a
                    href="#"
                    type="button"
                    className="btn delete-member btn-nohover delete-cart delete-carts"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-delete"
                  >
                    <img
                      src="/img/Icon/ico-delete-fill.svg"
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </>
      );
    }

    return returnList;
  };

  return (
    <div className="col-xl-9 col-sm-8">
      <div className="big-search mb-3">
        <span className="ico-search-r ps-3 pe-2">
          <span className="icon-ico-search"></span>
        </span>
        <input
          type="text"
          className="form-control border-0"
          name=""
          placeholder={t('common.searchMember')}
          id=""
        />
        <div className="col-lg">
          <button
            className="btn btn-red px-4"
            type="button"
          >
            {t('common.search')}
          </button>
        </div>
      </div>
      <p className="Mulish text-bold color-dark">
        {t('profile.companyMember')}
      </p>
      {renderCompanyMember()}
    </div>
  );
}

export default CompanyMember;
