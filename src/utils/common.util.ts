import { TImage } from '@/types/common.type';
import { TPathParamsReplacements } from '@/types/util.type';

/**
 * Replace {placeholder} value
 * @param text
 * @param replacements
 * @returns
 */
export function pathParams(
  text = '',
  replacements: TPathParamsReplacements = {},
): string {
  return text.replace(
    /{\w+}/g,
    (placeholder) =>
      replacements[placeholder.substring(1, placeholder.length - 1)] ??
      placeholder,
  );
}

/**
 * Calculate discount
 * @param price
 * @param originalPrice
 * @returns
 */
export function calculateDiscount(
  price: number,
  originalPrice: number,
): number {
  const discount = ((originalPrice - price) / originalPrice) * 100;

  return Math.ceil(discount);
}

/**
 * Image props
 */
export function commonImageProps(props: TImage) {
  return {
    src: props.url,
    width: props.width,
    height: props.height,
    alt: props.name,
  };
}

export default function formatNumberToKmb(num: number, precision = 2) {
  const map = [
    { suffix: 'T', threshold: 1e12 },
    { suffix: 'B', threshold: 1e9 },
    { suffix: 'M', threshold: 1e6 },
    { suffix: 'K', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
