import { DUMMY_BLOG } from '@/constant/faker.constant';
import { getI18n } from '@/locales/server';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type TPageParams = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({
  params,
}: TPageParams): Promise<Metadata> {
  return {
    title: `Kanzway - ${params.slug}`,
    description: '',
    keywords: '',
  };
}

export default async function BlogDetailPage({ params }: TPageParams) {
  const blog = DUMMY_BLOG;
  const t = await getI18n();
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb pt-sm-3 pt-lg-4">
          <li className="breadcrumb-item">
            <Link href="/blog">{t('blog.blog')}</Link>
          </li>
          <li
            className="breadcrumb-item active"
            aria-current="page"
          >
            New Product Launch - 40ECP Slotless Motor {params.slug}
          </li>
        </ol>
      </nav>
      <div className="mt-5 text-center">
        <p className="text-xs color-gray-60">10 November 2023</p>
        <h1 className="color-dark text-3xl mt-4">
          New Product Launch - 40ECP Slotless Motor
        </h1>
      </div>
      <div className="blog-thumb position-relative">
        <Image
          src={`https://picsum.photos/1500/1001?random=${params.slug}`}
          className="img-fluid"
          fill
          alt={blog.title.en}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className="my-5 row justify-content-center">
        <div className="col-xl-8">
          <p className="text-md text-bold color-black">
            Brushless Slotless Motors 40ECP
          </p>
          <p className="color-dark">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos
            repellendus delectus iste enim facere sit quaerat consequatur
            debitis, quas labore fuga temporibus vitae, magnam amet est minus
            atque ducimus voluptates. Veritatis repudiandae totam similique
            enim?
          </p>
          <p className="color-dark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea!
            Vitae aliquam ipsam id! Quidem illum magni fugiat dicta sit dolorum
            ipsum in nesciunt nulla temporibus mollitia excepturi nam nostrum
            illo, consectetur aspernatur architecto delectus rerum totam
            obcaecati dolore sint expedita! Exercitationem consectetur quidem
            quo quam, expedita itaque.
          </p>
          <div className="p-5 bg-gray-1 text-dark text-md my-5">
            <p>Key Features</p>
            <ul>
              <li>Active cooling with integrated fan (40ECP55)</li>
              <li>Available in 2 lengths</li>
              <li>Speeds up to 30,000 rpm</li>
              <li>Peak torque up to 1.1Nm</li>
              <li>Low weight of 230 grams</li>
              <li>Thermal sensor option</li>
            </ul>
          </div>
          <p className="color-dark">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, ea!
            Vitae aliquam ipsam id! Quidem illum magni fugiat dicta sit dolorum
            ipsum in nesciunt nulla temporibus mollitia excepturi nam nostrum
            illo, consectetur aspernatur architecto delectus rerum totam
            obcaecati dolore sint expedita! Exercitationem consectetur quidem
            quo quam, expedita itaque.
          </p>
          <div className="d-flex flex-column flex-lg-row mt-5 align-items-stretch gap-4">
            <div className="col-lg-6">
              <div className="bg-gray-1 p-5 text-md color-dark">
                <p>Applications</p>
                <ul>
                  <li>Riveting hand tools</li>
                  <li>Tightening hand tools</li>
                  <li>Crimping hand tools</li>
                  <li>Instrumentation</li>
                  <li>Factory automation</li>
                  <li>Electric grippers</li>
                  <li>Robotic actuators</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-gray-1 h-100 p-5 text-md color-dark">
                <p>Compatibility</p>
                <ul>
                  <li>R32 gearhead</li>
                  <li>M-Sense22 encoder</li>
                </ul>
              </div>
            </div>
          </div>
          <p className="color-dark mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quos
            repellendus delectus iste enim facere sit quaerat consequatur
            debitis, quas labore fuga temporibus vitae, magnam amet est minus
            atque ducimus voluptates. Veritatis repudiandae totam similique
            enim?
          </p>
          <div className="mt-5 border-top border-bottom py-5">
            <div className="d-flex gap-3 justify-content-center">
              <div className="contact-social-item">
                <a
                  href="#"
                  className="social-icon color-red"
                >
                  <span className="icon-ico-telegram" />
                </a>
              </div>
              <div className="contact-social-item">
                <a
                  href="#"
                  className="social-icon color-red"
                >
                  <span className="icon-ico-facebook" />
                </a>
              </div>
              <div className="contact-social-item">
                <a
                  href="#"
                  className="social-icon color-red"
                >
                  <span className="icon-ico-linkedin" />
                </a>
              </div>
              <div className="contact-social-item">
                <a
                  href="#"
                  className="social-icon color-red"
                >
                  <span className="icon-ico-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
