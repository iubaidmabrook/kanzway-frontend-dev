import { TGlance, TRegionPhoneCode } from '@/types/common.type';

export const REGION_PHONE_CODES: TRegionPhoneCode[] = [
  { shortRegion: 'AF', region: 'Afghanistan', code: '+93' },
  { shortRegion: 'ALB', region: 'Albania', code: '+355' },
  { shortRegion: 'ALG', region: 'Algeria', code: '+213' },
  { shortRegion: 'AS', region: 'American Samoi', code: '+1' },
  { shortRegion: 'AN', region: 'Andorra', code: '+376' },
  { shortRegion: 'ANG', region: 'Angola', code: '+244' },
  { shortRegion: 'ARG', region: 'Argentina', code: '+54' },
  { shortRegion: 'ARM', region: 'Armenia', code: '+374' },
  { shortRegion: 'AR', region: 'Aruba', code: '+297' },
  { shortRegion: 'AUS', region: 'Australia', code: '+61' },
  { shortRegion: 'AU', region: 'Austria', code: '+43' },
  { shortRegion: 'AZ', region: 'Azerbaijan', code: '+994' },
];

export const GLANCE_LIST: TGlance[] = [
  { value: '9.9M', label: 'Buyers Per Monts' },
  { value: '12M', label: 'Visit Per Monts' },
  { value: '40K', label: 'Manufacturers' },
  { value: '60K', label: 'Sellers' },
  { value: '2M+', label: 'Products' },
  { value: '10K', label: 'Catalogs' },
];
