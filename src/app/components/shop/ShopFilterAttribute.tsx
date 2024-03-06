'use client';

import useLangClient from '@/hooks/useLangClient';
import { useI18n } from '@/locales/client';
import { TAttribute } from '@/types/attribute.type';
import { getLang } from '@/utils/locale.util';
import clsx from 'clsx';
import { concat } from 'lodash';
import { useParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { Collapse } from 'react-bootstrap';

interface TShopFilterAttributeProps {
  attributes: TAttribute[];
}

export default function ShopFilterAttribute({
  attributes,
}: TShopFilterAttributeProps) {
  const t = useI18n();
  const { isAr } = useLangClient();
  const params = useParams();

  const [isOpenAttributes, setIsOpenAttributes] = useState<{
    [string: string]: boolean;
  }>({});
  const toggleCollapse = useCallback((collapseKey: string) => {
    setIsOpenAttributes((prev) => ({
      ...prev,
      [collapseKey]: !prev[collapseKey],
    }));
  }, []);

  const [selectedAttributes, setSelectedAttributes] = useState<
    {
      name: string;
      id: number[];
    }[]
  >(attributes.map((attribute) => ({ name: attribute.name.en, id: [] })));

  return attributes.map((attribute, i) => (
    <div
      className="box-filter mb-3"
      key={attribute.name.en}
    >
      <div className="position-relative">
        <button
          className={clsx('btn btn-filter btn-nohover', {
            collapsed: isOpenAttributes[`collapse${i + 1}`],
          })}
          aria-controls="filter-diameter"
          onClick={() => toggleCollapse(`collapse${i + 1}`)}
        >
          <div className="col-11">
            <div className="d-flex align-items-center justify-content-between">
              <div className="text-semiBold color-dark">
                {getLang(params, attribute.name)}{' '}
                {concat(
                  ...selectedAttributes
                    .filter((sa) => sa.name === attribute.name.en)
                    .map((sa) => sa.id),
                ).length > 0
                  ? `(${
                      concat(
                        ...selectedAttributes
                          .filter((sa) => sa.name === attribute.name.en)
                          .map((sa) => sa.id),
                      ).length
                    })`
                  : ''}
              </div>
            </div>
          </div>
        </button>
        {concat(
          ...selectedAttributes
            .filter((sa) => sa.name === attribute.name.en)
            .map((sa) => sa.id),
        ).length > 0 && (
          <a
            className={clsx('btn btn-reset btn-nohover p-0 reset-inner', {
              arab: isAr,
            })}
            type="button"
          >
            {t('common.apply')}
          </a>
        )}
      </div>
      <Collapse in={isOpenAttributes[`collapse${i + 1}`]}>
        <div id="filter-diameter">
          <ul
            className="list-filter p-0"
            dir={isAr ? 'rtl' : ''}
          >
            {attribute.options.map((option, j) => (
              <li key={`${j.toString()}`}>
                <div className="d-flex align-items-center gap-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`check-${i}${j}`}
                    checked={concat(
                      ...selectedAttributes
                        .filter((sa) => sa.name === attribute.name.en)
                        .map((sa) => sa.id),
                    ).includes(Number(`${i}${j}`))}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedAttributes(
                          selectedAttributes.map((sa) =>
                            sa.name === attribute.name.en
                              ? {
                                  ...sa,
                                  id: [...sa.id, Number(`${i}${j}`)],
                                }
                              : sa,
                          ),
                        );
                      } else {
                        setSelectedAttributes(
                          selectedAttributes.map((sa) =>
                            sa.name === attribute.name.en
                              ? {
                                  ...sa,
                                  id: sa.id.filter(
                                    (id) => id !== Number(`${i}${j}`),
                                  ),
                                }
                              : sa,
                          ),
                        );
                      }
                    }}
                  />
                  <label
                    className="inner-label"
                    htmlFor={`check-${i}${j}`}
                  >
                    {option.value} {getLang(params, option.unit)}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Collapse>
    </div>
  ));
}
