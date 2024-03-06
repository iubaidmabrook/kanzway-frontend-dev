import { getI18n } from '@/locales/server';

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: `KanzWay - ${t('privacyPolicy.title')}`,
  };
}

export default async function PrivacyPolicyPage() {
  const t = await getI18n();
  return (
    <>
      <section className="bg-banner-gradient">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
                {t('privacyPolicy.title')}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container text-policy">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <div className="color-dark mt-5">
                <p className="text-Black mb-4">Privacy Statement</p>
                <p>
                  KanzWay respects the privacy of all our customers and visitors
                  and is committed to safeguarding the personal information
                  provided. Please read the following Personal Data Protection
                  Policy (“Policy”) to learn about how we collect, use and
                  protect your personal information.
                </p>

                <br />
                <p className="text-Black mb-4">Application of Policy</p>
                <p>
                  The Saudi Arabia Personal Data Protection Act 2021 (PDPA) sets
                  out the rules for how personal data may be collected and used
                  in a given country. The PDPC will issue new guidelines from
                  time to time which varies depending on changing requirements
                  or concerns about privacy issues worldwide.
                </p>
                <p>
                  By visiting or using our website, you agree to the terms of
                  this policy. Please review it carefully before providing us
                  with any personal data to avoid misunderstandings about how
                  your information will be used in accordance with the policy.
                </p>

                <br />
                <p className="text-Black mb-4">Collection of Personal Data</p>
                <p>
                  For the conduct of KanzWay business and operational needs, you
                  may be requested to provide your personal particulars, which
                  include but are not limited to the following: Full name,
                  Username, Password, Email address, Contact Number, Job Title,
                  Department, Company Name, Billing Address, Shipping Address,
                  Company’s Business Industry.
                </p>
                <p>
                  KanzWay may capture some other information when asking for
                  quotes for the product(s), technical questions through form
                  submission, or live chat. Information may be captured after
                  the completion of surveys such as product feedback and a
                  buying experience that we use for our research purposes.
                </p>

                <br />
                <p className="text-Black mb-4">COOKIES</p>
                <p>
                  By accessing our website, you agree to receive one or more
                  “cookies” assigned to your computer.
                </p>
                <p>
                  A cookie is a small text file that contains information that
                  can later be analysed by us to facilitate your access to our
                  website, gather statistical data, and personalise your online
                  experience. We use this information for purposes including,
                  but not limited to detecting the capabilities of our visitors
                  web browsers so we can provide customized content; tracking
                  promotional advertisements displayed on these sites as well as
                  maintaining current login credentials insecure sections of the
                  site when you return after visiting another page or tab (i.e
                  shopping cart); identifying users by generating statistics
                  about how people interact with various parts within any given
                  application/website.
                </p>
                <p>
                  Most browsers automatically accept cookies, but you can modify
                  your browser setting to decline cookies. Generally, you can
                  remove these cookies by following the directions provided in
                  your Internet browser’s “help” file. If you choose not to
                  accept our cookies when you visit our website, you may be
                  restricted from some of our interactive features and services,
                  which may be rendered inoperable.
                </p>

                <br />
                <p className="text-Black mb-4">
                  Use of Personal Data Collection
                </p>
                <p>
                  KanzWay currently uses your personal data for purposes not
                  prohibited by existing applicable law, which are to:
                </p>
                <p>
                  <ol type="a">
                    <li>Process and respond to your requests and queries</li>
                    <li>
                      Send you information, updates, and marketing and
                      advertising materials in relation to events/services.
                    </li>
                    <li>
                      Send you information, updates, and marketing and
                      advertising materials in relation to events/activities
                      organised by KanzWay
                    </li>
                    <li>
                      Compile data and conduct statistical or demographic
                      analysis
                    </li>
                    <li>
                      Comply with a court order or other legal processes or
                      other legal requirements of any governmental authorities
                    </li>
                    <li>
                      Maintain the safety and security of its premises with the
                      use of security cameras
                    </li>
                    <li>
                      Allow us to use for any other purposes for which we have
                      obtained your consent
                    </li>
                  </ol>
                </p>
                <p>
                  We will not use, disclose or process your Personal Data for
                  purposes that are not stated above or for which we have not
                  obtained your consent. If we wish to use, disclose or process
                  your Personal Data for another purpose we will seek your prior
                  consent.
                </p>
                <p>
                  Note: For 3 (b) and (c) above, you have the right to opt-out
                  of receiving such marketing information. If you do not
                  exercise your right to opt-out of receiving such marketing
                  information, you will be considered to have consented to
                  receive such marketing information and we may continue to
                  provide such marketing information to you.
                </p>

                <br />
                <p className="text-Black mb-4">
                  Use of Personal Data Collected
                </p>
                <p>
                  All personal data held by KanzWay will be kept confidential
                  but KanzWay may, where such disclosure is necessary to satisfy
                  the purpose, or a directly related purpose for which the data
                  was collected, provide such information to the following
                  parties:
                </p>
                <p>
                  <ol>
                    <li>
                      Any person or company who is acting for or on behalf of
                      KanzWay, or jointly with KanzWay, in respect of the
                      purpose or a directly related purpose for which the data
                      was provided;
                    </li>
                    <li>
                      Any financial institutions, charge or credit card issuing
                      companies, credit bureau, or collection agencies necessary
                      to establish and support the payment of any services due
                      or requested.
                    </li>
                  </ol>
                </p>

                <br />
                <p className="text-Black mb-4">
                  Access and Correction of Personal Data
                </p>
                <p>
                  You may access or edit your personal information at any time
                  by clicking on your Account tab. If you have forgotten your
                  password, you may simply click on the Reset Password button
                  upon logging in.
                </p>
                <p>
                  Should you have any problems accessing the site, please
                  contact us through the Live Chat or Contact Us form.
                </p>

                <br />
                <p className="text-Black mb-4">Protection of Personal Data</p>
                <p>
                  KanzWay protects personal data against loss or theft, as well
                  as unauthorized access, disclosure, copying, use, or
                  modification with security safeguards appropriate to the
                  sensitivity of the personal data, regardless of the format in
                  which it is held. Online security is also a priority and
                  KanzWay incorporates security to protect personal data from
                  unauthorized use, such as firewalls and other security
                  software to protect its servers and networks from unauthorized
                  use, access, and tampering of files and other information that
                  we store.
                </p>

                <br />
                <p className="text-Black mb-4">Retention of Personal Data</p>
                <p>
                  KanzWay will retain personal data only for as long as the
                  purposes for which such data is collected or used (as notified
                  to you) continues, or where necessary for our legal or
                  business purposes. Thereafter, KanzWay will delete or destroy
                  the personal data.
                </p>

                <br />
                <p className="text-Black mb-4">Changes of Policy</p>
                <p>
                  KanzWay reserves the right to modify or change this Policy at
                  any time. We encourage you to review this page periodically to
                  understand our policy regarding the collection and use of your
                  personal data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
