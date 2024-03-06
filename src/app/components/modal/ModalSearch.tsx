'use client';

import useDebounce from '@/hooks/useDebounce';
import useLangClient from '@/hooks/useLangClient';
import { useScopedI18n } from '@/locales/client';
import useModalSearchStore from '@/store/modal-search.store';
import clsx from 'clsx';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next13-progressbar';
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { Modal, ModalBody } from 'react-bootstrap';

function ModalSearch() {
  // hooks
  const router = useRouter();
  const { isOpen, onClose } = useModalSearchStore();
  const searchParams = useSearchParams();
  const urlSearchParams = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );

  // locale
  const { isAr } = useLangClient();
  const t = useScopedI18n('shop');

  // state
  const [searchValue, setSearchValue] = useState('');

  // debounce
  const debounceSearchValue = useDebounce(searchValue, 300);

  // ref
  const inputRef = useRef<HTMLInputElement>(null);

  // handle change value
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  // handle input focus
  const inputFocus = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // input focus when modal opened
  useEffect(() => {
    if (isOpen) {
      inputFocus();
    }
  }, [isOpen, inputFocus]);

  // clear search value and close modal
  useEffect(() => {
    setSearchValue('');
    onClose();
  }, [searchParams, onClose]);

  // handle search
  const handleSearch = useCallback(() => {
    if (debounceSearchValue === '') {
      router.push('/shop');
    } else {
      urlSearchParams.set('search', debounceSearchValue);
      router.push(`/shop?${urlSearchParams}`);
    }
  }, [urlSearchParams, debounceSearchValue, router]);

  return (
    <Modal
      className="modal fade pt-search"
      show={isOpen}
      onHide={onClose}
      size="lg"
    >
      <ModalBody
        className=" modal-search p-0"
        dir={isAr ? 'rtl' : ''}
      >
        <div className="modal-content">
          <div className="search-wrapper">
            <div className="d-flex align-items-center gap-2 mb-3 w-100">
              <div className="position-relative flex-grow-1">
                <input
                  type="text"
                  className="form-control"
                  name=""
                  id=""
                  placeholder={t('typeHere')}
                  value={searchValue}
                  onChange={handleChange}
                  ref={inputRef}
                />
                <button
                  className={clsx('search-mini btn btn-nohover', {
                    arab: isAr,
                  })}
                  onClick={() => {
                    setSearchValue('');
                    inputFocus();
                  }}
                >
                  <img src="/img/Icon/mini-close.svg" />
                </button>
              </div>
              <button
                className="btn py-2 px-3 search btn-red "
                onClick={handleSearch}
              >
                <span className="icon-ico-search text-xxl"></span>
              </button>
            </div>
            <div className="search-result">
              {debounceSearchValue !== '' && (
                <ul className="list-search">
                  <li>
                    <Link
                      href={`/shop?search=${debounceSearchValue}`}
                      className="link-search-result"
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="ico-result">
                        <span className="icon-ico-search text-xxl color-dark"></span>
                      </div>
                      <div className="text-search-result color-dark">
                        <strong>{debounceSearchValue}</strong>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
              {/*
                <li>
                  <a href="product-detail.html" className="link-search-result">
                    <div className="ico-result">
                      <span className="icon-ico-search text-xxl color-dark"></span>
                    </div>
                    <div className="text-search-result color-dark">Impact <strong>Motor</strong></div>
                  </a>
                </li>
                <li>
                  <a href="product-detail.html" className="link-search-result">
                    <div className="ico-result">
                      <img src="img/list-1.jpg" className="img-fluid"/>
                    </div>
                    <div className="text-search-result color-dark">
                      <div className="text-bold text-dark mb-1">Subland Motor V2</div>
                      <div className="text-xs color-gray-60">Portescap S.A. - A4800M8</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="product-detail.html" className="link-search-result">
                    <div className="ico-result">
                      <img src="img/list-3.jpg" className="img-fluid"/>
                    </div>
                    <div className="text-search-result color-dark">
                      <div className="text-bold text-dark mb-1">Subland Motor V1</div>
                      <div className="text-xs color-gray-60">Portescap S.A. - B5210E2</div>
                    </div>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
}

export default ModalSearch;
