'use client';

import { useI18n } from '@/locales/client';

export default function AboutTeam() {
  const t = useI18n();
  return (
    <section className="main-section">
      <div className="container">
        <h1 className="text-center color-dark text-extraBold Mulish">
          {t('about.glance.teams.title')}
        </h1>
        <div className="mt-5 row g-4 justify-content-center">
          {/* {Array.from({ length: 7 }).map((_, index) => (
            <div
              className="col-lg-3 col-md-6"
              key={`${index.toString()}`}
            >
              <div className="team-item py-5 px-2">
                <div className="d-flex flex-column gap-5 align-items-center">
                  <div className="text-center">
                    <p className="text-md text-extraBold color-dark">
                      @ts-expect-error
                      {t(`about.glance.teams.teams.${index}.name`)}
                    </p>
                    <p className="text-xs">
                      @ts-expect-error
                      {t(`about.glance.teams.teams.${index}.position`)}
                    </p>
                  </div>
                  <div className="team-item-icon linkedin">
                    <span className="icon-ico-linkedin" />
                  </div>
                </div>
              </div>
            </div>
          ))} */}
          <div className="col-xl-10">
            <p className=" color-dark text-md text-center">
              {t('about.glance.teams.description.0')}
            </p>
            <p className=" color-dark text-md text-center">
              {t('about.glance.teams.description.1')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
