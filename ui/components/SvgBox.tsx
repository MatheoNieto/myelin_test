import React from 'react';
import {
  BoxProps,
  boxRestyleFunctions,
  color,
  composeRestyleFunctions,
  createRestyleFunction,
} from '@shopify/restyle';
import {Svg, SvgProps} from 'react-native-svg';
import {Theme, useAppRestyle} from '@/theme';
import {isNumber} from 'lodash';
import {useAsProp} from '@/ui/hooks';
import {forwardRef} from '@/ui/utils';

export type ColorThemeValue = keyof Theme['colors'];

/**
 * Extends SvgProps with support for Restyle's theming and additional SVG attributes.
 */
type RestyleSvgBoxProps = Omit<SvgProps, 'color' | 'fill' | 'stroke'> &
  BoxProps<Theme> & {
    size?: number; // Unified width and height
    color?: ColorThemeValue; // Color mapped to the theme
    fill?: ColorThemeValue; // Fill color mapped to the theme
    stroke?: ColorThemeValue; // Stroke color mapped to the theme
    rx?: number;
    d?: string;
    cd?: number;
    cx?: number;
    cy?: number;
    r?: string;
    points?: string;
    fontSize?: number;
    fontWeight?: string;
    fontFamily?: string;
  };

export type SvgBoxProps = RestyleSvgBoxProps & {
  _dark?: Omit<RestyleSvgBoxProps, 'as'>; // Props for dark mode
  _light?: Omit<RestyleSvgBoxProps, 'as'>; // Props for light mode
};

const restyleFunctions = composeRestyleFunctions([
  ...boxRestyleFunctions,
  color,
  createRestyleFunction({
    property: 'fill',
    themeKey: 'colors',
  }),
  createRestyleFunction({
    property: 'stroke',
    themeKey: 'colors',
  }),
]);

/**
 * A flexible, themable SVG wrapper component.
 * Supports Restyle's theming system and additional SVG-specific properties.
 */
const SvgBox = forwardRef<SvgBoxProps, React.ComponentType<SvgProps>>(
  ({style, width, height, as, _dark, _light, size, ...rest}, ref) => {
    const SvgComponent = useAsProp(Svg, as); // Ensure Svg or 'as' resolves to a valid component type.
    const {
      style: [{fill, stroke, color: currentColor, ...svgStyle}],
      ...props
    } = useAppRestyle(restyleFunctions, {
      ...rest,
      ..._light,
    });

    // Determine size properties
    const sizeProps =
      isNumber(size) && size > 0
        ? {width: size, height: size}
        : {width, height};

    // Render the Svg component
    return (
      <SvgComponent
        ref={ref}
        style={[svgStyle, style]}
        {...props}
        {...sizeProps}
        {...(fill && {fill})}
        {...(stroke && {stroke})}
        {...(currentColor && {color: currentColor})}
      />
    );
  },
);

export default React.memo(SvgBox);
