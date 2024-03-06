/* eslint-disable react/no-unescaped-entities */
import {
  Accordion,
  AccordionCollapse,
  AccordionHeader,
  AccordionItem,
} from 'react-bootstrap';
import { getI18n } from '@/locales/server';
import { useLangServer } from '@/hooks/useLangServer';

async function LpFaq() {
  const t = await getI18n();
  const { isAr } = await useLangServer();

  const FAQ_LIST = [
    {
      group: 'Products',
      id: 'products',
      faqs: [
        {
          question: t('faq.q1'),
          answer: t('faq.a1'),
        },
        {
          question: t('faq.q2'),
          answer: t('faq.a2'),
        },
        {
          question: t('faq.q3'),
          answer: t('faq.a3'),
        },
        {
          question: t('faq.q4'),
          answer: t('faq.a5'),
        },
        {
          question: t('faq.q5'),
          answer: t('faq.a5'),
        },
      ],
    },
  ];

  return (
    <section className="main-section bg-gray-1 faq-section">
      <div
        className="container"
        dir={isAr ? 'rtl' : ''}
      >
        <h2 className="Mulish color-dark text-center text-extraBold mb-5">
          {t('faq.title')}
        </h2>
        {FAQ_LIST.map((list) => (
          <div
            className="row"
            key={list.id}
          >
            <div>
              <Accordion
                key={list.id}
                defaultActiveKey="0"
                className="accordion"
                id="faq"
              >
                {list.faqs.map((faq, j) => (
                  <AccordionItem
                    key={faq.question}
                    eventKey={`${j}`}
                    className="accordion-item"
                  >
                    <AccordionHeader className="accordion-header">
                      {faq.question}
                    </AccordionHeader>
                    <AccordionCollapse eventKey={`${j}`}>
                      <div className="color-dark">{faq.answer}</div>
                    </AccordionCollapse>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="d-flex justify-content-center mt-5">
              <a
                href="/faq"
                className="btn btn-secondary"
              >
                {t('faq.showMore')}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default LpFaq;
