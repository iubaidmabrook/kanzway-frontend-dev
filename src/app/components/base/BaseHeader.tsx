'use client';

// React
import { useCallback, useEffect, useMemo, useState } from 'react';

// Next
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Utils
import { getCategories } from '@/api/category.api';
import { getCountries, getLanguages } from '@/api/locale.api';
import useWindowDimensions from '@/hooks/useWIndowDimention';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import useLastPathStore from '@/store/lastPathStore';
import useModalSearchStore from '@/store/modal-search.store';
import useModalCategoryStore from '@/store/modal-category.store';
import useSelectedCountryStore from '@/store/selectedCountry.store';
import useSelectedCountryFlagStore from '@/store/selectedCountryFlag.store';
import useSelectedLanguageStore from '@/store/selectedLanguage.store';
import { TCategory } from '@/types/category.type';
import { TCountry } from '@/types/country.type';
import { TLocaleLanguage } from '@/types/language.type';
import clsx from 'clsx';
import Cookies from 'js-cookie';
import Image from 'next/image';
import useStore from '@/hooks/useStore';
import useCartStore from '@/store/cart.store';

function BaseHeader() {
  // hooks
  const pathname = usePathname();
  const currentLocale = useCurrentLocale();
  const { onOpen } = useModalCategoryStore();
  const { width } = useWindowDimensions();
  const { onOpen: onOpenModalSearch } = useModalSearchStore();

  const [, setScrollY] = useState(0);
  const [categories, setCategories] = useState<TCategory[]>([]);
  const [countries, setCounties] = useState<TCountry[]>([]);
  const [languages, setLanguages] = useState<TLocaleLanguage[]>([]);
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [showMobileLanguange, setShowMobileLanguage] = useState<boolean>(false);
  const [isClient, setIsClient] = useState(false);
  const [showMobileLanguangeValue, setShowMobileLanguageValue] =
    useState<boolean>(false);
  const [showMainCategory, setShowMainCategory] = useState<boolean>(false);

  const { add: addLastPath } = useLastPathStore();
  const { country, add: selectedCountry } = useSelectedCountryStore();
  const { language, add: selectedLanguage } = useSelectedLanguageStore();
  const { flag, add: selectedFlag } = useSelectedCountryFlagStore();

  const [selectedCountryState, setSelectedCountryState] = useState(country);
  const [selectedLanguageState, setSelectedLanguageState] = useState(language);
  const [selectedFlagState, setSelectedFlagState] = useState('');

  const categoriesMemo = useMemo(() => categories, [categories]);

  const toggleShowMobileNav = useCallback(() => {
    if (showMobileNav === false) {
      document?.querySelector('body')?.classList.add('overflowHidden');
      document?.querySelector('html')?.classList.add('overflowHidden');
    } else if (showMobileNav === true) {
      document?.querySelector('body')?.classList.remove('overflowHidden');
      document?.querySelector('html')?.classList.remove('overflowHidden');
    }
    setShowMobileNav((prev) => !prev);
  }, [showMobileNav]);

  const t = useI18n();
  const changeLocale = useChangeLocale();

  // Get actual pathname;
  const actualPathName = useMemo<string>(() => {
    const arrPathname = pathname.split('/');
    arrPathname.splice(0, 2);
    return `/${arrPathname.join('/')}`;
  }, [pathname]);

  // Check is landing
  const isLandingPage = useMemo(
    () => pathname === `/${currentLocale}`,
    [currentLocale, pathname],
  );

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

  useEffect(() => {
    setShowMobileNav(false);
  }, [pathname]);

  useEffect(() => {
    setIsClient(true);
    selectedLanguage(currentLocale);
    selectedCountry(Cookies.get('KanzwaySelectedCountry') ?? 'us');
    selectedFlag(Cookies.get('KanzwaySelectedCountryFlag') ?? '/img/usa.jpg');
  }, [selectedLanguage, currentLocale, selectedCountry, selectedFlag]);

  const getMainCategory = useCallback(async () => {
    const res = await getCategories();

    setCategories(res);
  }, []);

  const getCountriesList = useCallback(async () => {
    const res = await getCountries();

    setCounties(res);
  }, []);

  const getLanguageList = useCallback(async () => {
    const res = await getLanguages();

    setLanguages(res);
  }, []);

  useEffect(() => {
    getMainCategory();
    getCountriesList();
    getLanguageList();
  }, [getCountriesList, getLanguageList, getMainCategory]);

  const transformCategories = (
    inputCategories: TCategory[],
    parentId: string | null,
  ): TCategory[] => {
    const transform: TCategory[] = [];

    inputCategories.forEach((category) => {
      if (category.parentId === parentId) {
        const childCategories = transformCategories(
          categories,
          category.id.toString(),
        );
        if (childCategories.length) {
          category.childs = childCategories;
        }
        transform.push(category);
      }
    });

    return transform;
  };

  const transformedCategories = transformCategories(categoriesMemo, null);

  // const isScrolled = scrollY > 50;

  const applyLanguage = () => {
    selectedCountry(selectedCountryState);
    selectedLanguage(selectedLanguageState);
    selectedFlag(selectedFlagState);
    switch (selectedLanguageState) {
      case 'en':
        changeLocale('en');
        break;
      case 'ar':
        changeLocale('ar');
        break;
      default:
        break;
    }
  };

  const isLoggedIn = () => {
    let isLogIn: boolean = false;
    if (typeof window !== 'undefined') {
      if (localStorage.getItem('kanzway-creds')) {
        isLogIn = true;
      } else {
        isLogIn = false;
      }
    }
    return isLogIn;
  };

  const itemsCart = useStore(useCartStore, (state) => state.items);

  return (
    <header className={clsx('header', isLandingPage ? 'home' : 'inner')}>
      {/* Desktop Menu */}
      <div className={clsx('header-top', !isLandingPage ? 'hidden' : '')}>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div
              id="lang"
              className="col-sm-4"
            >
              <div className="dropdown lang">
                <button
                  className="btn btn-lang border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="lang-img">
                    <Image
                      src={isClient ? flag : '/img/usa.jpg'}
                      className="img-fluid"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </div>
                  <div className="lang-items">
                    <ul>
                      <li>{isClient ? country?.toUpperCase() : 'US'}</li>
                      <li>|</li>
                      <li>{currentLocale?.toUpperCase()}</li>
                    </ul>
                  </div>
                </button>
                <div className="dropdown-menu language-sticky p-0">
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
                        {countries.map((countriesItems) => (
                          <button
                            key={countriesItems.id}
                            className={`${selectedCountryState === countriesItems.code.toLocaleLowerCase() && 'active'} nav-link`}
                            id="lang-1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#lang-1"
                            type="button"
                            role="tab"
                            aria-controls="lang-1"
                            aria-selected="true"
                            onClick={() => {
                              setSelectedCountryState(
                                countriesItems.code.toLocaleLowerCase(),
                              );
                              setSelectedFlagState(countriesItems.image.url);
                              // selectedCountry(
                              //   countriesItems.code.toLocaleLowerCase(),
                              // );
                            }}
                          >
                            <div className="img-lang">
                              <Image
                                src={countriesItems.image.url}
                                className="img-fluid"
                                height={countriesItems.image.height}
                                width={countriesItems.image.width}
                                alt={countriesItems.name[currentLocale]}
                              />
                            </div>
                            <div className="lang-name">
                              {countriesItems.name[currentLocale]}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3 px-3">
                        <div className="text-md mulish color-dark text-bold">
                          Language
                        </div>
                      </div>
                      <div
                        className="nav nav-tabs border-0"
                        id="lang-tab"
                        role="tablist"
                      >
                        {languages.map((languagesItems) => (
                          <button
                            key={languagesItems.id}
                            className={`${selectedLanguageState === languagesItems.code.toLowerCase() ? 'active' : ''} nav-link`}
                            id="lang-1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#lang-1"
                            type="button"
                            role="tab"
                            aria-controls="lang-1"
                            aria-selected="true"
                            onClick={() => {
                              setSelectedLanguageState(
                                languagesItems.code.toLowerCase(),
                              );
                              // selectedLanguage(
                              //   languagesItems.code.toLowerCase(),
                              // );
                            }}
                          >
                            <div className="img-lang">
                              <Image
                                src={languagesItems.image.url}
                                className="img-fluid"
                                height={languagesItems.image.height}
                                width={languagesItems.image.width}
                                alt={languagesItems.name[currentLocale]}
                              />
                            </div>
                            <div className="lang-name">
                              {languagesItems.name[currentLocale]}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-top">
                    <button
                      className="btn btn-apply"
                      onClick={applyLanguage}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-4 col-5">
              <a
                href={`/${currentLocale}`}
                className="d-block text-center"
              >
                <img
                  src="/img/Logo/logo.svg"
                  className="Image-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="col-sm-4 col-6">
              <ul className="ul-top-right mb-0 p-0">
                <li>
                  <button
                    className="btn btn-search-header btn-nohover"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#modal-search"
                    onClick={onOpenModalSearch}
                  >
                    <span className="icon-ico-search"></span>
                  </button>
                </li>
                <li>
                  <span
                    // href=""
                    className="top-cart"
                  >
                    <span className="icon-ico-cart"></span>
                  </span>
                  <div className="count-items">{itemsCart?.length || 0}</div>
                </li>
                <li>
                  <button
                    className="btn btn-toggle btn-nohover"
                    onClick={toggleShowMobileNav}
                  >
                    <span className="icon-ico-toggle"></span>
                  </button>
                </li>
                {isLoggedIn() && isClient ? (
                  <li>
                    <span
                      // href="myorder.html"
                      className={
                        isLandingPage ? 'profile-link-white' : 'profile-link'
                      }
                    >
                      <span className="icon-ico-profile" />
                    </span>
                  </li>
                ) : (
                  <li>
                    <Link
                      href="/login"
                      className="btn btn-auth"
                      onClick={() => {
                        addLastPath(pathname);
                      }}
                    >
                      {width < 991 && width !== 0
                        ? t('common.login')
                        : t('header.loginText')}
                      <span className="hide-tablet"> </span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div
          className={clsx(
            ' header-bottom',
            // { sticky: (!isLandingPage && isScrolled) || height < 540 },
            // { 'header-bottom': width > 768 && width !== 0 },
            // {
            //   'header-bottom sticky':
            //     (!isLandingPage && isScrolled && width < 992) || height < 540,
            // },
          )}
        >
          {/* left-side */}
          <div
            id="left-side"
            className={clsx(
              'd-flex align-items-center gap-3',
              !isLandingPage ? '' : 'hidden',
            )}
          >
            <div
              id="logo-sticky"
              className={clsx('logo-center', !isLandingPage ? '' : 'hidden')}
            >
              <a
                href={`/${currentLocale}`}
                className="d-block text-center"
              >
                <img
                  src="/img/Logo/logo.svg"
                  className="img-fluid"
                  alt="Logo"
                />
              </a>
            </div>
            <div
              id="lang"
              className="col-sm-6"
            >
              <div className="dropdown lang">
                <button
                  className="btn btn-lang border-0"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="lang-img">
                    <Image
                      src={isClient ? flag : '/img/usa.jpg'}
                      className="img-fluid"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </div>
                  <div className="lang-items">
                    <ul>
                      <li>{isClient ? country?.toUpperCase() : 'US'}</li>
                      <li>|</li>
                      <li>{currentLocale?.toUpperCase()}</li>
                    </ul>
                  </div>
                </button>
                <div className="dropdown-menu language-sticky p-0">
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
                        {countries.map((countriesItems) => (
                          <button
                            key={countriesItems.id}
                            className={`${selectedCountryState === countriesItems.code.toLocaleLowerCase() && 'active'} nav-link`}
                            id="lang-1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#lang-1"
                            type="button"
                            role="tab"
                            aria-controls="lang-1"
                            aria-selected="true"
                            onClick={() => {
                              setSelectedCountryState(
                                countriesItems.code.toLocaleLowerCase(),
                              );
                              setSelectedFlagState(countriesItems.image.url);
                              // selectedCountry(
                              //   countriesItems.code.toLocaleLowerCase(),
                              // );
                            }}
                          >
                            <div className="img-lang">
                              <Image
                                src={countriesItems.image.url}
                                className="img-fluid"
                                height={countriesItems.image.height}
                                width={countriesItems.image.width}
                                alt={countriesItems.name[currentLocale]}
                              />
                            </div>
                            <div className="lang-name">
                              {countriesItems.name[currentLocale]}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="py-3 px-3">
                        <div className="text-md mulish color-dark text-bold">
                          Language
                        </div>
                      </div>
                      <div
                        className="nav nav-tabs border-0"
                        id="lang-tab"
                        role="tablist"
                      >
                        {languages.map((languagesItems) => (
                          <button
                            key={languagesItems.id}
                            className={`${selectedLanguageState === languagesItems.code.toLowerCase() ? 'active' : ''} nav-link`}
                            id="lang-1-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#lang-1"
                            type="button"
                            role="tab"
                            aria-controls="lang-1"
                            aria-selected="true"
                            onClick={() => {
                              setSelectedLanguageState(
                                languagesItems.code.toLowerCase(),
                              );
                              // selectedLanguage(
                              //   languagesItems.code.toLowerCase(),
                              // );
                            }}
                          >
                            <div className="img-lang">
                              <Image
                                src={languagesItems.image.url}
                                className="img-fluid"
                                height={languagesItems.image.height}
                                width={languagesItems.image.width}
                                alt={languagesItems.name[currentLocale]}
                              />
                            </div>
                            <div className="lang-name">
                              {languagesItems.name[currentLocale]}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="border-top">
                    <button
                      className="btn btn-apply"
                      onClick={applyLanguage}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* center-side */}
          <div className="center-side">
            <ul className="main-menu">
              <li>
                <a
                  role="presentation"
                  onClick={onOpen}
                  className={clsx(
                    'link-main-menu',
                    'active',
                    actualPathName.startsWith('/shop') ? 'bold' : '',
                  )}
                  style={{ cursor: 'pointer' }}
                >
                  {t('header.menu.shop')}
                </a>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/about`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/about') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/blog`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/blog') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/faq`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/faq') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.faq')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/contact-us`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/contact-us') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.contactUs')}
                </Link>
              </li>
            </ul>
          </div>

          {/* right-side */}
          <div
            id="right-side"
            className={clsx('right-side', !isLandingPage ? '' : 'hidden')}
          >
            <ul className="ul-top-right mb-0 p-0">
              <li>
                <button
                  className="btn btn-search-header btn-nohover"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-search"
                  onClick={onOpenModalSearch}
                >
                  <span className="icon-ico-search"></span>
                </button>
              </li>
              <li>
                <span
                  // href=""
                  className="top-cart"
                >
                  <span className="icon-ico-cart"></span>
                </span>
                <div className="count-items">{itemsCart?.length || 0}</div>
              </li>
              <li>
                <button
                  className="btn btn-toggle btn-nohover"
                  onClick={toggleShowMobileNav}
                >
                  <span className="icon-ico-toggle"></span>
                </button>
              </li>
              {isLoggedIn() && isClient ? (
                <li>
                  <Link
                    href="/profile"
                    className={
                      isLandingPage ? 'profile-link-white' : 'profile-link'
                    }
                  >
                    <span className="icon-ico-profile" />
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href="/login"
                    className="btn btn-auth"
                    onClick={() => {
                      addLastPath(pathname);
                    }}
                  >
                    {t('common.login')}
                    <span className="hide-tablet"> </span>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* <ul className="main-menu">
              <li>
                <a
                  role="presentation"
                  onClick={onOpen}
                  className={clsx(
                    'link-main-menu',
                    'active',
                    actualPathName.startsWith('/shop') ? 'bold' : '',
                  )}
                  style={{ cursor: 'pointer' }}
                >
                  {t('header.menu.shop')}
                </a>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/about`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/about') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/blog`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/blog') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.blog')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/faq`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/faq') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.faq')}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${currentLocale}/contact-us`}
                  className={clsx(
                    'link-main-menu',
                    actualPathName.startsWith('/contact-us') ? 'bold' : '',
                  )}
                >
                  {t('header.menu.contactUs')}
                </Link>
              </li>
            </ul> */}
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={clsx('overlay-mobile', { show: showMobileNav })}>
        <div className={clsx('mobile-nav', { show: showMobileNav })}>
          <div className="nav-mobile-inner">
            <div className="header-menu pt-4">
              <button
                className="btn btn-close-mobile "
                onClick={toggleShowMobileNav}
              >
                <span className="icon-ico-close"></span>
              </button>
              <div className="row align-items-center justify-content-between mb-4">
                <div className="col-6">
                  <a
                    href={`/${currentLocale}`}
                    className="logo-mobile"
                  >
                    <img
                      alt=""
                      src="/img/Logo/logo.svg"
                      className="img-fluid"
                    />
                  </a>
                </div>
                <div className="col-5">
                  {isLoggedIn() && isClient ? (
                    <div className="justify-content-end d-flex">
                      <span
                        // href="myorder.html"
                        className="profile-link"
                      >
                        <span className="icon-ico-profile" />
                      </span>
                    </div>
                  ) : (
                    <Link
                      href="/login"
                      className="btn btn-auth  w-100"
                      onClick={() => {
                        addLastPath(pathname);
                      }}
                    >
                      <span className="icon-ico-profile pe-2"></span>{' '}
                      {t('common.login')}{' '}
                    </Link>
                  )}
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
                  onClick={() => setShowMobileLanguage(!showMobileLanguange)}
                >
                  <div className="img-lang">
                    <Image
                      alt=""
                      src={flag}
                      className="Image-fluid"
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="lang-items invert">
                    <ul>
                      <li>{isClient ? country?.toUpperCase() : 'US'}</li>
                      <li>|</li>
                      <li>{currentLocale?.toUpperCase()}</li>
                    </ul>
                  </div>
                </button>
              </p>
              <div
                className={`${showMobileLanguange ? '' : 'collapse'} lang-wrapper`}
                id="language"
              >
                {countries.map((countriesItems) => (
                  <button
                    key={countriesItems.id}
                    className="btn btn-lang-mobile btn-nohover collapsed mb-1"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#saudi-arab"
                    aria-expanded="false"
                    aria-controls="saudi-arab"
                    onClick={() => {
                      selectedCountry(countriesItems.code.toLowerCase());
                      selectedFlag(countriesItems.image.url);
                      setShowMobileLanguageValue(!showMobileLanguangeValue);
                    }}
                    // onClick={() => {
                    //   setShowMobileLanguageValue(!showMobileLanguangeValue);
                    //   if (country === 'sa') {
                    //     selectedCountry('');
                    //   } else {
                    //     selectedCountry('sa');
                    //   }
                    // }}
                  >
                    <div className="img-lang">
                      <Image
                        src={countriesItems.image.url}
                        className="img-fluid"
                        height={countriesItems.image.height}
                        width={countriesItems.image.width}
                        alt={countriesItems.name[currentLocale]}
                      />
                    </div>
                    <div className="lang-name">
                      {countriesItems.name[currentLocale]}
                    </div>
                  </button>
                ))}

                {/* <div
                    className={`${country === 'us' ? '' : 'collapse'} lang-wrapper`}
                    style={{ marginLeft: '10px' }}
                  >
                    <button
                      className="lang-link btn-lang-link-mobile"
                      onClick={() => {
                        changeLocale('ar');
                      }}
                    >
                      <div className="img-lang">
                        <img
                          src="/img/arab.jpg"
                          className="img-fluid"
                        />
                      </div>
                      <div className="lang-name">Arabic</div>
                    </button>
                    <button
                      className="lang-link btn-lang-link-mobile"
                      onClick={() => {
                        changeLocale('en');
                      }}
                    >
                      <div className="img-lang">
                        <img
                          src="/img/usa.jpg"
                          className="img-fluid"
                        />
                      </div>
                      <div className="lang-name">English</div>
                    </button>
                  </div> */}

                <div
                  className={`${showMobileLanguangeValue ? 'show' : ''} lang-value`}
                >
                  <button
                    type="button"
                    className="text-xxs color-dark text-bold back-lang d-inline-block mb-3 btn-back-lang"
                    style={{ border: 0, backgroundColor: 'unset' }}
                    onClick={() =>
                      setShowMobileLanguageValue(!showMobileLanguangeValue)
                    }
                  >
                    <span className="icon-ico-short-arrow me-2"></span>
                    Back
                  </button>
                  {languages.map((languagesItems) => (
                    <button
                      key={languagesItems.id}
                      className="lang-link choose-language"
                      onClick={() => {
                        switch (languagesItems.code.toLowerCase()) {
                          case 'en':
                            changeLocale('en');
                            break;
                          case 'ar':
                            changeLocale('ar');
                            break;
                          default:
                            break;
                        }
                        selectedLanguage(languagesItems.code.toLowerCase());
                        setShowMobileLanguageValue(!showMobileLanguangeValue);
                        setShowMobileLanguage(!showMobileLanguange);
                        toggleShowMobileNav();
                      }}
                    >
                      <div className="img-lang">
                        <Image
                          src={languagesItems.image.url}
                          className="img-fluid"
                          height={languagesItems.image.height}
                          width={languagesItems.image.width}
                          alt={languagesItems.name[currentLocale]}
                        />
                      </div>
                      <div className="lang-name">
                        {languagesItems.name[currentLocale]}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="content-menu">
              <ul className="menu-mobile">
                <li>
                  <a
                    role="presentation"
                    onClick={onOpen}
                    className={clsx(
                      'link-menu-mobile',
                      actualPathName.startsWith('/shop') ? 'active' : '',
                    )}
                  >
                    {t('header.menu.shop')}
                  </a>
                  <button
                    onClick={() => setShowMainCategory(!showMainCategory)}
                    className="shop"
                  ></button>
                  <ul
                    className={`main-category-navbar ${showMainCategory ? 'hide' : ''}`}
                  >
                    {transformedCategories.map((items) => (
                      <li key={items.id}>
                        <a href={`/shop?category=${items.slug}`}>
                          {items.name[currentLocale]}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <Link
                    href="/about"
                    className={clsx(
                      'link-menu-mobile',
                      actualPathName.startsWith('/about') ? 'active' : '',
                    )}
                  >
                    {t('header.menu.aboutUs')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={clsx(
                      'link-menu-mobile',
                      actualPathName.startsWith('/blog') ? 'active' : '',
                    )}
                  >
                    {t('header.menu.blog')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className={clsx(
                      'link-menu-mobile',
                      actualPathName.startsWith('/faq') ? 'active' : '',
                    )}
                  >
                    {t('header.menu.faq')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className={clsx(
                      'link-menu-mobile',
                      actualPathName.startsWith('/contact-us') ? 'active' : '',
                    )}
                  >
                    {t('header.menu.contactUs')}
                  </Link>
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
    </header>
  );
}

export default BaseHeader;
