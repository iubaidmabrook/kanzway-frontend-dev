export type TRegionPhoneCode = {
  shortRegion: string;
  region: string;
  code: string;
};

export type TGlance = {
  value: string;
  label: string;
};

export type TLanguage = {
  en: string;
  ar: string;
  id: string;
};

export type TDefaultParams = {
  locale: string;
};

export type TImage = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  type: 'image';
};

export type TMeta = {
  metaKeyword: string;
  metaDescription: string;
};

export type TModalStore = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};
