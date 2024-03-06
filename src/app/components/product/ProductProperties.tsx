'use client';

// React
import React, { memo } from 'react';

// Next
import Image from 'next/image';
import { useParams } from 'next/navigation';

// Components
import { Col, Row } from 'react-bootstrap';

// Types
import {
  TProductCommonProps,
  TProductPropertyItem,
} from '@/types/product.type';
import { TLanguage } from '@/types/common.type';

// Locale
import { getLang } from '@/utils/locale.util';

function ProductProperties(props: Readonly<TProductCommonProps>) {
  const { product } = props;

  // Hooks
  const params = useParams();

  return product.properties.map((property) => (
    <React.Fragment key={property.id}>
      <section
        id={`section-${property.name.en.replace(/\s+/g, '-').toLowerCase()}`}
        className="secion-pd"
      >
        <p className="text-bold Mulish color-dark">
          {getLang(params, property.name)}
        </p>

        {property.type === 'table' && (
          <>
            {property.groups.map((group) => (
              <div
                className="table-responsive"
                key={`${property.id}${group.name.en}`}
              >
                <table className="table table-spec">
                  <thead>
                    {property.groups.length > 1 ? (
                      <>
                        <tr>
                          <th colSpan={property.fields.length}>
                            {getLang(params, group.name) ??
                              getLang(params, group.group as TLanguage)}
                          </th>
                        </tr>
                        <tr>
                          {property.fields.map((header) => (
                            <td key={`${property.id}${header.en}`}>
                              {getLang(params, header)}
                            </td>
                          ))}
                        </tr>
                      </>
                    ) : (
                      <tr>
                        {property.fields.map((header) => (
                          <th key={`${property.id}${header.en}`}>
                            {getLang(params, header)}
                          </th>
                        ))}
                      </tr>
                    )}
                  </thead>
                  <tbody>
                    {group.items.map((item, index) => (
                      <tr
                        // eslint-disable-next-line react/no-array-index-key
                        key={`${property.id}${item.description.en}${index}`}
                      >
                        <td>{getLang(params, item.description)}</td>
                        {Array.from(
                          Array(property.fields.length - 1).keys(),
                        ).map((f) => {
                          const valueKey = `value${f + 1}`;
                          const valueUnitKey = `unit${f + 1}`;

                          const itemValue =
                            item[valueKey as keyof TProductPropertyItem];

                          const itemUnitValue =
                            item[valueUnitKey as keyof TProductPropertyItem];

                          return (
                            <td key={`${property.id}${f}`}>
                              {
                                (itemValue as unknown as keyof TLanguage)?.[
                                  (params.locale as any) ?? 'en'
                                ]
                              }{' '}
                              {
                                (itemUnitValue as unknown as keyof TLanguage)?.[
                                  (params.locale as any) ?? 'en'
                                ]
                              }
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </>
        )}

        {property.type === 'image' && (
          <>
            {property.groups.map((group) => (
              <Row key={`${property.id}${group.id}`}>
                {group.items.map((item, index) => (
                  <Col
                    sm={6}
                    // eslint-disable-next-line react/no-array-index-key
                    key={`${property.id}${group.id}${index}`}
                  >
                    <div className="d-flex align-items-start gap-3 mb-3">
                      <div
                        className="img-fature"
                        style={{ flex: 'none' }}
                      >
                        {item.image && (
                          <Image
                            src={item.image.url}
                            width={40}
                            height={40}
                            priority
                            className="img-fluid"
                            alt={item.image.name}
                            onContextMenu={(e) => e.preventDefault()}
                          />
                        )}
                      </div>
                      <div className="text-xs Mulish">
                        {getLang(params, item.value1)}
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </>
        )}
      </section>
      <hr />
    </React.Fragment>
  ));
}

export default memo(ProductProperties);
