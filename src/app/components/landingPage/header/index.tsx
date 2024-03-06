import { useCurrentLocale } from '@/locales/client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

function LpHeader() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isScrolled = scrollY > 50;

  const currentLocale = useCurrentLocale();

  return (
    <header className={`${isScrolled && 'invert'} header home`}>
      {/* <!--Menu Desktop--> */}
      <div className="header-top">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              id="lang"
              className="col-sm-4"
            >
              <div className="dropdown lang">
                <button
                  className="btn btn-lang "
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="lang-img">
                    <img
                      src="img/usa.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-items">
                    <ul>
                      <li>US</li>
                      <li>|</li>
                      <li>EN</li>
                    </ul>
                  </div>
                </button>
                <div className="dropdown-menu language p-0">
                  <div className="row gx-0">
                    <div className="col-6 border-end">
                      <div className="py-3 px-3">
                        <div className="text-md mulish color-dark text-bold">
                          Country
                        </div>
                      </div>
                      <div
                        className="nav nav-tabs border-0"
                        id="lang-tab"
                        role="tablist"
                      >
                        <button
                          className="nav-link "
                          id="lang-1-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#lang-1"
                          type="button"
                          role="tab"
                          aria-controls="lang-1"
                          aria-selected="true"
                        >
                          <div className="img-lang">
                            <img
                              src="img/arab.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="lang-name">Saudi Arabia</div>
                        </button>
                        <button
                          className="nav-link active"
                          id="lang-2-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#lang-2"
                          type="button"
                          role="tab"
                          aria-controls="lang-2"
                          aria-selected="false"
                        >
                          <div className="img-lang">
                            <img
                              src="img/singapore.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="lang-name">Singapore</div>
                        </button>
                        <button
                          className="nav-link"
                          id="lang-3-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#lang-3"
                          type="button"
                          role="tab"
                          aria-controls="lang-3"
                          aria-selected="false"
                        >
                          <div className="img-lang">
                            <img
                              src="img/indonesia.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="lang-name">Indonesia</div>
                        </button>
                        <button
                          className="nav-link"
                          id="lang-4-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#lang-4"
                          type="button"
                          role="tab"
                          aria-controls="lang-4"
                          aria-selected="false"
                        >
                          <div className="img-lang">
                            <img
                              src="img/uk.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="lang-name">England</div>
                        </button>
                        <button
                          className="nav-link"
                          id="lang-5-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#lang-5"
                          type="button"
                          role="tab"
                          aria-controls="lang-5"
                          aria-selected="false"
                        >
                          <div className="img-lang">
                            <img
                              src="img/usa.jpg"
                              className="img-fluid"
                            />
                          </div>
                          <div className="lang-name">USA</div>
                        </button>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3 px-3">
                        <div className="text-md mulish color-dark text-bold">
                          Language
                        </div>
                      </div>
                      <div
                        className="tab-content"
                        id="nav-tabContent"
                      >
                        <div
                          className="tab-pane fade "
                          id="lang-1"
                          role="tabpanel"
                          aria-labelledby="lang-1-tab"
                          tabIndex={0}
                        >
                          <ul className="list-lang">
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 "
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/arab.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Saudi Arabia</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade show active"
                          id="lang-2"
                          role="tabpanel"
                          aria-labelledby="lang-2-tab"
                          tabIndex={0}
                        >
                          <ul className="list-lang">
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 active"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/singapore.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Singapore</div>
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 "
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/indonesia.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Indonesia</div>
                              </a>
                            </li>

                            <li>
                              {' '}
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/usa.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">USA</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="lang-3"
                          role="tabpanel"
                          aria-labelledby="lang-3-tab"
                          tabIndex={0}
                        >
                          <ul className="list-lang">
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 "
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/indonesia.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Indonesia</div>
                              </a>
                            </li>
                            <li>
                              {' '}
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/uk.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">England</div>
                              </a>
                            </li>
                            <li>
                              {' '}
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/usa.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">USA</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="lang-4"
                          role="tabpanel"
                          aria-labelledby="lang-4-tab"
                          tabIndex={0}
                        >
                          <ul className="list-lang">
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 "
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/indonesia.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Indonesia</div>
                              </a>
                            </li>
                            <li>
                              {' '}
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/uk.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">England</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="lang-5"
                          role="tabpanel"
                          aria-labelledby="lang-5-tab"
                          tabIndex={0}
                        >
                          <ul className="list-lang">
                            <li>
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3 "
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/indonesia.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">Indonesia</div>
                              </a>
                            </li>
                            <li>
                              {' '}
                              <a
                                href="#"
                                className="link-list-lang py-2 px-3"
                              >
                                <div className="img-lang">
                                  <img
                                    src="img/usa.jpg"
                                    className="img-fluid"
                                  />
                                </div>
                                <div className="lang-name">USA</div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-top">
                    <button className="btn btn-apply">Apply</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-5">
              <Link
                href={`/${currentLocale}`}
                className="d-block text-center"
              >
                <img
                  src="/img/Logo/logo.svg"
                  className="Image-fluid"
                  alt="Logo"
                />
              </Link>
            </div>
            <div className="col-sm-4 col-6">
              <div className="ul-top-right">
                <li>
                  <button
                    className="btn btn-search-header btn-nohover"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-search"
                  >
                    <span className="icon-ico-search"></span>
                  </button>
                </li>
                <li>
                  <a
                    href="cart.html"
                    className="top-cart"
                  >
                    <span className="icon-ico-cart"></span>
                  </a>
                  <div className="count-items">0</div>
                </li>
                <li>
                  <button className="btn btn-toggle btn-nohover">
                    <span className="icon-ico-toggle"></span>
                  </button>
                </li>
                <li>
                  <Link
                    href="/auth/login"
                    className="btn btn-auth"
                    passHref
                  >
                    Login<span className="hide-tablet"> / Register</span>
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header-bottom">
          <ul className="main-menu">
            <li>
              <a
                href="/shop"
                className="link-main-menu "
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="link-main-menu "
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="link-main-menu "
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="link-main-menu "
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="/contact-us"
                className="link-main-menu "
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!--Menu Mobile--> */}
      <div className="overlay-mobile ">
        <div className="mobile-nav ">
          <div className="nav-mobile-inner">
            <div className="header-menu pt-4">
              <button className="btn btn-close-mobile ">
                <span className="icon-ico-close"></span>
              </button>
              <div className="row align-items-center justify-content-between mb-4">
                <div className="col-6">
                  <a
                    href="index.html"
                    className="logo-mobile"
                  >
                    <img
                      src="img/Logo/logo.svg"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-5">
                  <a
                    href="login.html"
                    className="btn btn-auth  w-100"
                  >
                    <span className="icon-ico-profile pe-2"></span> Login{' '}
                  </a>
                </div>
              </div>
              <p>
                <button
                  className="btn btn-lang "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#language"
                  aria-expanded="false"
                  aria-controls="language"
                >
                  <div className="lang-img">
                    <img
                      src="img/usa.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-items invert">
                    <ul>
                      <li>US</li>
                      <li>|</li>
                      <li>EN</li>
                    </ul>
                  </div>
                </button>
              </p>
              <div
                className="collapse"
                id="language"
              >
                {/* <!--Saudi Arabisa--> */}
                <button
                  className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#saudi-arab"
                  aria-expanded="false"
                  aria-controls="saudi-arab"
                >
                  <div className="img-lang">
                    <img
                      src="img/arab.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-name">Saudi Arabia</div>
                </button>
                <div
                  className="collapse"
                  id="saudi-arab"
                >
                  <ul className="list-lang">
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/arab.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">Saudi Arabia</div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Singapore--> */}
                <button
                  className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#singapore"
                  aria-expanded="false"
                  aria-controls="singapore"
                >
                  <div className="img-lang">
                    <img
                      src="img/singapore.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-name">Singapore</div>
                </button>
                <div
                  className="collapse"
                  id="singapore"
                >
                  <ul className="list-lang">
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/indonesia.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">Indonesia</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/uk.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">England</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/usa.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">USA</div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--Indonesia--> */}
                <button
                  className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#indo"
                  aria-expanded="false"
                  aria-controls="indo"
                >
                  <div className="img-lang">
                    <img
                      src="img/indonesia.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-name">Indonesia</div>
                </button>
                <div
                  className="collapse"
                  id="indo"
                >
                  <ul className="list-lang">
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/indonesia.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">Indonesia</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/uk.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">England</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/usa.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">USA</div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--UK--> */}
                <button
                  className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#uk"
                  aria-expanded="false"
                  aria-controls="uk"
                >
                  <div className="img-lang">
                    <img
                      src="img/uk.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-name">England</div>
                </button>
                <div
                  className="collapse"
                  id="uk"
                >
                  <ul className="list-lang">
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/uk.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">England</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/usa.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">USA</div>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!--USA--> */}
                <button
                  className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#usa"
                  aria-expanded="false"
                  aria-controls="usa"
                >
                  <div className="img-lang">
                    <img
                      src="img/usa.jpg"
                      className="img-fluid"
                    />
                  </div>
                  <div className="lang-name">USA</div>
                </button>
                <div
                  className="collapse"
                  id="usa"
                >
                  <ul className="list-lang">
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/uk.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">England</div>
                      </a>
                    </li>
                    <li className="border-bottom ">
                      <a
                        href="#"
                        className="link-list-lang py-2 px-3 ps-4"
                      >
                        <div className="img-lang">
                          <img
                            src="img/usa.jpg"
                            className="img-fluid"
                          />
                        </div>
                        <div className="lang-name text-xxs">USA</div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-menu">
              <ul className="menu-mobile">
                <li>
                  <a
                    href="product-list.html"
                    className="link-menu-mobile"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="about.html"
                    className="link-menu-mobile"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="blog.html"
                    className="link-menu-mobile"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="faq.html"
                    className="link-menu-mobile"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="contact.html"
                    className="link-menu-mobile"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-menu">
              <p className="text-base text-center Mulish color-dark text-bold mb-4">
                Connect With Us
              </p>
              <div className="social-menu ">
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link color-dark"
                  >
                    <span className="icon-ico-facebook"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-twitter"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-instagram"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-youtube"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-snapchat"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-tiktok"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-wechat"></span>
                  </a>
                </div>
                <div className="social-items">
                  <a
                    href="#"
                    className="social-link"
                  >
                    <span className="icon-ico-telegram"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {openModalSearch && */}
      {/* <ModalSearch/> */}
      {/* } */}
    </header>
  );
}

export default LpHeader;
