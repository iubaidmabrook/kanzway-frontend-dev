import { getI18n } from '@/locales/server';

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: `KanzWay - ${t('termsAndConditions.title')}`,
  };
}

export default async function TermsAndConditionsPage() {
  const t = await getI18n();
  return (
    <>
      <section className="bg-banner-gradient">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
                {t('termsAndConditions.title')}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-section">
        <div className="container text-policy">
          <div className="row justify-content-center">
            <div className="col-xl-8">
              <p className="color-dark">
                Please read the following terms and conditions carefully.
              </p>

              <p className="color-dark">
                Any agreements made between the parties with respect to the sale
                of products shall be governed solely by these terms and
                conditions of sale. All proposals, negotiations, conversations,
                discussions, agreements, and/or representations made prior to
                the execution of these terms and conditions are hereby null and
                void. This agreement constitutes the sole agreement between the
                parties relating to the sale of products and supersedes all
                prior agreements or understanding, whether oral or written.
              </p>

              <div className="color-dark mt-5">
                <p className="text-Black mb-4">
                  KanzWay reserves the right to revise these Terms and
                  Conditions at any time.
                </p>
                <p>
                  <ol type="A">
                    <li>
                      <p className="text-Black mb-2">Product Information</p>
                      <ol className="pb-4">
                        <li>
                          <p className="text-Black mb-2">Website Information</p>
                          <p>
                            All content about the products on KanzWay website,
                            catalogues, or datasheets is provided by the
                            manufacturers and/or suppliers. The content
                            displayed on the website or otherwise communicated
                            to the Customer is approximate only and shall not
                            form any part of the contract between KanzWay and
                            the Customer.
                          </p>
                          <p>
                            Product illustrations shown are for illustrative
                            purposes only. Possession of, or access to, any of
                            the content does not constitute the right to
                            purchase products. KanzWay reserves the right to
                            revise publishing mistakes without prior notice and
                            cancel any and all orders resulting from such
                            mistakes, even if the Customer has received an order
                            confirmation from KanzWay.
                          </p>
                          <p>
                            KanzWay shall not be liable to the Customer for any
                            mistakes on the website, the catalogues, datasheets,
                            or other product advertisements.
                          </p>
                        </li>
                        <li>
                          <p className="text-Black mb-2">Discontinuation</p>
                          Without prior notice, KanzWay reserves the right to
                          discontinue any product or make design changes as part
                          of its continuous program of product improvement, or
                          product availability.
                        </li>
                      </ol>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Sales of Products</p>
                      <div className="list-nested">
                        <ol>
                          <li>
                            <span className="text-Black mb-2">Prices</span>
                            <ol>
                              <li className="mb-3">
                                The prices offered on KanzWay for the Customer
                                do not have other pricing agreements with
                                KanzWay. All such prices are subject to these
                                terms and conditions and are available for
                                orders placed on the website. Prices provided
                                are in SGD and do not include freight fees,
                                handling fees, taxes, and/or duties fees. Prices
                                are subject to change or correction without
                                prior notice. In the event of a conflict between
                                prices listed in the physical catalogue and
                                prices listed on the website, prices listed on
                                the website shall prevail.
                              </li>
                              <li className="mb-3">
                                Customers in KanzWay have different pricing
                                options. Customers who have an account with
                                KanzWay can view their prices, depending on the
                                tier, and the applicable prices to which
                                discounts or promotions, if any, are applied.
                                Export orders may be subject to special pricing
                                arrangements.
                              </li>
                            </ol>
                          </li>
                          <li>
                            <span className="text-Black mb-2">Sales Tax</span>
                            <ol>
                              <li className="mb-3">
                                All prices displayed exclude VAT, PST, HST,
                                and/or GST taxes and shall be the responsibility
                                of the Customer.
                              </li>
                            </ol>
                          </li>
                          <li>
                            <span className="text-Black mb-2">Payments</span>
                            <p>
                              All payments have to be made in advance prior to
                              delivery in the currency billed on the original
                              invoice. A wide range of major credit cards, and
                              bank debit cards for payment. This includes
                              MasterCard, VISA, Diners Club, Discover, and
                              American Express.
                            </p>
                            <p>
                              In the prevention of fraud, KanzWay takes the
                              security of our customers’ data seriously. Billing
                              information must be verified on the new Customer
                              prior to shipment of the order. We ensure that
                              your data will be protected.
                            </p>
                          </li>
                        </ol>
                      </div>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Goods and Service Tax</p>
                      <p>
                        All customers in Saudi Arabia purchasing products
                        through our website after January 1, 2024, will be
                        subject to a Goods and Services Tax (GST) of 9% as per
                        the prevailing government regulations.
                      </p>
                      <p>
                        The price of the products displayed on our website is
                        inclusive of a GST of 9% as of January 1, 2024.
                      </p>
                      <p>
                        The GST amount will be clearly mentioned on the invoice
                        issued for each purchase made on or after January 1,
                        2024
                      </p>
                      <p>
                        The customer is solely responsible for paying the GST
                        amount in addition to the product price displayed at the
                        time of purchase.
                      </p>
                      <p>
                        We reserve the right to revise the GST percentage as per
                        government regulations and will inform our customers
                        about any changes made to the tax amount.
                      </p>
                      <p>
                        In case of cancellation or refund of the purchase, the
                        GST amount will be refunded along with the product price
                        as per the applicable policies.
                      </p>
                      <p>
                        All other terms and conditions related to the purchase
                        and delivery of products will remain the same.
                      </p>
                      <p>
                        By making a purchase on our website, you agree to these
                        terms and conditions related to GST of 9% as of January
                        1, 2024.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Orders</p>
                      <p>
                        KanzWay reserves the right to decline to trade with any
                        company or person. KanzWay may decline to accept any
                        order, whether or not payment has been made, by giving
                        notice of non-acceptance to the Customer within a
                        reasonable period of receipt of the order by KanzWay.
                      </p>
                      <p>
                        KanzWay may cancel orders which have been accepted by
                        giving written notice of such cancellation to the
                        Customer within a reasonable period of receipt of the
                        order by KanzWay. If KanzWay rejects or cancels an order
                        for which payment has been taken, it will refund the
                        amount to the Customer as soon as reasonably
                        practicable.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Product Warranty</p>
                      <p>
                        KanzWay warrants that its products be free from defects
                        in material and workmanship during the Warranty Period,
                        subject to manufacturer.
                      </p>
                      <p>
                        As Warantee’s sole and exclusive remedy, and KanzWay’s
                        entire liability, for any Product that does not conform
                        in all material respects to the Standards, KanzWay
                        shall, as its sole option and expense to i) Repair, ii)
                        Replace, iii) Refund, as determined by KanzWay. This
                        warranty shall give the Warantor specific legal rights,
                        and the Warrantee may also have other rights which vary
                        from jurisdiction to jurisdiction.
                      </p>
                      <p>
                        KanzWay makes no warranty respecting the merchantability
                        of the products or their suitability or fitness for any
                        particular purpose or use, or respecting infringement.
                        Furthermore, no warranty will apply if the Product has
                        been subject to misuse, static discharge, neglect,
                        accident, modification, or has been soldered, or altered
                        in any way.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Liability</p>
                      <p>
                        KanzWay shall not be liable for any damage, loss, cost,
                        claim, or expense resulting from the failure to give
                        advice or information or the giving of incorrect advice
                        or information. This includes but is not limited to,
                        damages resulting from negligence on the part of the
                        KanzWay, its employees, agents, or subcontractors. In
                        order to avoid such liability, it is essential that the
                        Customer takes steps to verify the accuracy and
                        completeness of that advice of information. KanzWay does
                        not guarantee the accuracy or completeness of any advice
                        or information provided and accepts no responsibility
                        for any errors or omissions. Any reliance on the advice
                        or information provided by KanzWay is at the sole risk
                        of the recipient.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Force Majeure</p>
                      <p>
                        In one event shall KanzWay be responsible or liable for
                        delay in delivery and failure to perform hereunder
                        arising out of or caused by, directly or indirectly,
                        forces beyond its control, including, without
                        limitation, product allocations, material shortages,
                        labor disputes, transportation delays, unforeseen
                        circumstances, acts of God, acts or omissions of other
                        parties, acts or omissions of civil or military
                        authorities, Government priorities, fires, strikes,
                        floods, severe weather conditions, computer
                        interruptions, terrorism, epidemics, quarantine
                        restrictions, riots or war. KanzWay shall use reasonable
                        efforts which are consistent with accepted practices to
                        resume performance as soon as practicable under the
                        circumstances, without liability by giving notice to the
                        Customer.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Intellectual property</p>
                      <p>
                        Customer shall have no right, title, or interest in the
                        trade names, trademarks, trade dress, copyrights,
                        patents, domain names, product names, catalogs, or any
                        other intellectual property rights (“IP”) reserved by
                        KanzWay, or any IP owned by manufacturers and/or
                        suppliers to KanzWay. All materials contained in KanzWay
                        catalogs or on its websites are subject to the ownership
                        rights of KanzWay and its manufacturers and/or
                        suppliers. The Customer shall have no right to copy or
                        use any IP of KanzWay or its manufacturers and/or
                        suppliers without KanzWay’s permission.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">Export Control</p>
                      <p>
                        Certain products sold by KanzWay are subject to export
                        control regulations of Saudi Arabia, subject to United
                        Nations Security Council Sanctions. The Customer shall
                        comply with all such Export Laws and obtain any license
                        or permit required to transfer, export, re-export, or
                        import the products.
                      </p>
                      <p>
                        The Customer is responsible at its own expense for
                        obtaining any license and complying with any export
                        regulations in force within Saudi Arabia and any import
                        or export regulations in force in the country for which
                        the Products are destined.
                      </p>
                      <p>
                        The Customer agrees the Products will not use them in
                        relation to chemical, biological, nuclear weapons,
                        nuclear explosive activities, nuclear fuel cycle, rocket
                        systems (including ballistic missile systems, space
                        launch vehicles, and sounding rockets), or unmanned air
                        vehicles capable of delivering chemical, biological or
                        nuclear payloads.
                      </p>
                      <p>
                        KanzWay reserves the right not to supply to certain
                        customers or to certain countries and to require from
                        the Customer full details of the end-use and final
                        destination of the Products.
                      </p>
                      <p>
                        The customer acknowledges its responsibility to obtain
                        any license to export, re-export, or import as may be
                        required.
                      </p>
                    </li>

                    <li>
                      <p className="text-Black mb-2">3rd Party Providers</p>
                      <p>
                        KanzWay will not be responsible or liable for the
                        services offered to customers or for anything in
                        connection with such 3rd Party Provider(s). KanzWay does
                        not endorse or approve and makes no warranties,
                        representations, or undertakings relating to the content
                        of the 3rd Party Provider(s). KanzWay disclaims
                        liability for any loss, damage, and any other
                        consequence resulting directly or indirectly from or
                        relating to your access to the 3rd Party Provider(s) or
                        any information that you may provide or any transaction
                        conducted or the failure of any information, goods or
                        services posted or offered by 3rd Party Provider(s) or
                        any error, omission or misrepresentation or any computer
                        virus arising from or system failure associated with the
                        3rd Party Provider(s).
                      </p>
                    </li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
