import {FontWeight} from '@theme/types';
import AppFonts from './AppFonts';

export const VARIABLE_CUSTOM_FONTS = [AppFonts.Poppins];

export const FONT_WEIGHT_MAPPING: Record<FontWeight, string> = {
  '100': '-Thin',
  '200': '-ExtraLight',
  '300': '-Light',
  '400': '-Regular',
  '500': '-Medium',
  '600': '-SemiBold',
  '700': '-Bold',
  '800': '-ExtraBold',
  '900': '-Black',
  normal: '-Regular',
  bold: '-Bold',
  ultralight: '-ExtraLight',
  thin: '-Thin',
  light: '-Light',
  medium: '-Medium',
  regular: '-Regular',
  semibold: '-SemiBold',
  condensedBold: '-Bold',
  condensed: '-Bold',
  heavy: '-Black',
  black: '-Black',
};

export const parseAppFontFamily = (
  fontFamily?: string,
  fontWeight: FontWeight = 'normal',
) =>
  AppFonts[fontFamily as AppFonts] &&
  VARIABLE_CUSTOM_FONTS.includes(fontFamily as AppFonts)
    ? `${fontFamily}${FONT_WEIGHT_MAPPING[fontWeight] ?? ''}`
    : undefined;

export const DEFAULT_SYSTEM_FONTS = [
  ...[...new Array(9)].map(
    (_, index) =>
      parseAppFontFamily(
        AppFonts.Poppins,
        ((index + 1) * 100).toString() as any,
      ) as string,
  ),
];

export {default as palette} from '@theme/constants/palette';
