import { getI18n } from '@/locales/server';

export async function generateMetadata() {
  const t = await getI18n();
  return {
    title: `KanzWay - ${t('returnExchangePolicy.title')}`,
  };
}

export default async function ReturnExchangePolicyPage() {
  const t = await getI18n();
  return (
    <>
      <section className="bg-banner-gradient">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="heading-list-product color-dark Mulish pt-sm-4 pt-xl-5 mb-3 mb-sm-4">
                {t('returnExchangePolicy.title')}
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
                <p className="text-Black mb-4">Cancellations</p>
                <p>
                  All product order cancellations must be approved by KanzWay,
                  and may be denied or subject to restocking fees and other
                  charges.
                </p>
                <p>
                  In the event of cancellation of part of any order only, the
                  Customer may be requested to pay a reasonable cancellation
                  fee. These fees are paid to KanzWay by the Customer. Customer
                  requests to reschedule are subjected to acceptance by KanzWay
                  at its sole discretion. Orders that have been submitted by
                  KanzWay to the 3rd party logistics cannot be cancelled or
                  rescheduled.
                </p>
                <p>
                  KanzWay reserves the right to limit or cancel any order and
                  has sole discretion, to allocate sales, limit quantities of
                  selected products, and limit selected products to its
                  customers.
                </p>
                <p>
                  KanzWay reserves the right to reject any order or any part of
                  an order. Product specifications, modifications, and
                  availability are subject to change without prior notice.
                </p>
              </div>

              <div className="color-dark mt-5">
                <p className="text-Black mb-4">Returns</p>
                <p>
                  KanzWay and our manufacturers stand behind the products we
                  represent. KanzWay will undergo an inspection of the defective
                  product before confirmation. If,
                </p>
                <p>
                  i) There is a defective/damaged product is caused by the
                  manufacturing production, packaging, and shipping process, a
                  full refund and or replacement can be issued.
                </p>
                <p>
                  ii) The product has been defected due to improper handling and
                  application of the customer. No refund or replacement will be
                  issued.
                </p>
                <p>
                  Shipping cost has to be incurred by Customer to return
                  location for inspection. If products returned are due to the
                  defects covered from the above clause at (i), all claims will
                  be credited to customers at KanzWay’s expense, else will be at
                  the Customer’s expense.
                </p>
                <p>
                  KanzWay does not take title to returned products until the
                  item is received by KanzWay at the applicable return location.
                  KanzWay accepts no responsibility for any loss of or damage to
                  products in transit from Customer to KanzWay or for any items
                  received by KanzWay with them.
                </p>
                <p>
                  Customers must ensure all original packaging must be clearly
                  labelled and packed. Accessories, including the packaging box,
                  manuals, cables, and other items must be included with the
                  product upon return.
                </p>
                <p>
                  All refunds for defective products have to be made within the
                  warranty period.
                </p>
                <p>
                  Please contact us with your order and details about the
                  defective product and we will respond to you soonest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
