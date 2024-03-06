'use client';

import useLangClient from '@/hooks/useLangClient';
import { TFaqGroup } from '@/types/faq.type';
import { getLang } from '@/utils/locale.util';
import { useParams } from 'next/navigation';
import {
  Accordion,
  AccordionCollapse,
  AccordionHeader,
  AccordionItem,
} from 'react-bootstrap';
import parser from 'html-react-parser';

export default function FaqList() {
  const { isAr } = useLangClient();
  const params = useParams();
  const FAKER_FAQ: TFaqGroup[] = [
    {
      id: 1,
      code: '001',
      title: {
        en: 'Products',
        id: 'Products',
        ar: 'منتجات',
      },
      description: {
        en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
        id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
        ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
      },
      faqs: [
        {
          id: 1,
          code: '001',
          faqGroupId: 1,
          question: {
            en: 'How can I contact the manufacturer of a product that interests me?',
            id: 'How can I contact the manufacturer of a product that interests me?',
            ar: 'كيف يمكنني الاتصال بالشركة المصنعة للمنتج الذي يهمني؟',
          },
          answer: {
            en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
          },
        },
        {
          id: 2,
          code: '002',
          faqGroupId: 1,
          question: {
            en: 'How can I refine my product search?',
            id: 'How can I refine my product search?',
            ar: 'كيف يمكنني تحسين البحث عن منتجي؟',
          },
          answer: {
            en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
          },
        },
        {
          id: 3,
          code: '003',
          faqGroupId: 1,
          question: {
            en: 'How can I open a product page?',
            id: 'How can I open a product page?',
            ar: 'كيف يمكنني فتح صفحة المنتج؟',
          },
          answer: {
            en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
          },
        },
        {
          id: 4,
          code: '004',
          faqGroupId: 1,
          question: {
            en: 'How can I consult online catalogues?',
            id: 'How can I consult online catalogues?',
            ar: 'كيف يمكنني الرجوع إلى الكتالوجات عبر الإنترنت؟',
          },
          answer: {
            en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
          },
        },
        {
          id: 5,
          code: '005',
          faqGroupId: 1,
          question: {
            en: 'How do I find the products that interest me?',
            id: 'How do I find the products that interest me?',
            ar: 'كيف يمكنني العثور على المنتجات التي تهمني؟',
          },
          answer: {
            en: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            id: '<p>When you have found an interesting product, you can contact either the manufacturer or a member of their sales network by clicking on the following buttons: - “Request a personalized quote” - “Request price options” - Receive documentation Each request is sent directly to the manufacturer and/or the nearest distributor who will reply to you as quickly as possible.</p>',
            ar: '<p>عندما تجد منتجًا مثيرًا للاهتمام، يمكنك الاتصال إما بالشركة المصنعة أو بأحد أعضاء شبكة مبيعاتها من خلال النقر على الأزرار التالية: - اطلب عرض أسعار مخصصًا- اطلب خيارات السعر - احصل على الوثائق، يتم إرسال كل طلب مباشرة إلى الشركة المصنعة و/أو أقرب موزع والذي سيقوم بالرد عليك في أسرع وقت ممكن.</p>',
          },
        },
      ],
    },
  ];
  return (
    <section
      className="main-section"
      dir={isAr ? 'rtl' : ''}
    >
      <div className="container">
        {FAKER_FAQ.map((group) => (
          <div
            className="row"
            key={group.id}
          >
            <div className="col-lg-3 mt-3">
              <h1 className="color-dark text-bold Mulish text-3xl faq-title-section mt-5">
                {getLang(params, group.title)}
              </h1>
            </div>
            <div className="col-lg-9">
              <Accordion
                key={group.id}
                defaultActiveKey="0"
              >
                {group.faqs.map((faq, j) => (
                  <AccordionItem
                    key={faq.id}
                    eventKey={`${j}`}
                  >
                    <AccordionHeader className="">
                      {getLang(params, faq.question)}
                    </AccordionHeader>
                    <AccordionCollapse eventKey={`${j}`}>
                      <div className="color-dark">
                        <article>{parser(getLang(params, faq.answer))}</article>
                      </div>
                    </AccordionCollapse>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
