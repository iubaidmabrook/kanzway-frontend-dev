import { getProductCategories } from '@/api/category.api';
import { getLandingPageBrands } from '@/api/landingPage/landingBrand.api';
import { getProducts } from '@/api/product.api';
import AboutUs from '@/app/components/landingPage/aboutUs';
import Banner from '@/app/components/landingPage/banner';
import Blog from '@/app/components/landingPage/blog';
import Brand from '@/app/components/landingPage/brand';
import Faq from '@/app/components/landingPage/faq';
import FeaturedProduct from '@/app/components/landingPage/featuredProduct';
import Join from '@/app/components/landingPage/join';
import ProductCategory from '@/app/components/landingPage/productCategory';

export default async function Page() {
  const productFamilies = await getProducts();
  // const categories = await getCategories();
  const productCategories = await getProductCategories();
  const brand = await getLandingPageBrands();
  return (
    <section>
      {/* <h3>{t('hello.world')}</h3> */}
      <Banner />
      <AboutUs />
      <ProductCategory categories={productCategories} />
      <Brand brands={brand.content} />
      <FeaturedProduct productFamilies={productFamilies.content} />
      <Join />
      <Blog />
      <Faq />
    </section>
  );
}
