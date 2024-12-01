import * as React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import type {Theme} from '@/theme/types';

type ThemeColor = keyof Theme['colors'];
type SvgColorThemeProps = {
  color?: ThemeColor;
  fill?: ThemeColor | 'none';
  stroke?: ThemeColor | 'none';
};
type SvgThemeProps = SvgColorThemeProps & {
  _dark?: SvgColorThemeProps;
  _light?: SvgColorThemeProps;
  style?: StyleProp<ViewStyle>;
};
export type SvgFactoryProps = SvgThemeProps & SvgProps;

export const SvgFactory = <
  TProps extends SvgFactoryProps = SvgFactoryProps,
  DefaultProps extends TProps = TProps,
>(
  {default: Component}: {default: React.ComponentClass<TProps>},
  defaultProps: DefaultProps | ((props: TProps) => Partial<DefaultProps>),
) =>
  React.forwardRef<React.ComponentClass<TProps>, TProps>((props, ref) => {
    const _defaultProps =
      typeof defaultProps === 'function' ? defaultProps(props) : defaultProps;
    return (
      <Component
        ref={ref as any}
        {..._defaultProps}
        {...props}
        _dark={{..._defaultProps._dark, ...props._dark}}
        _light={{..._defaultProps._light, ...props._light}}
        style={{...(props.style as any), ...(_defaultProps.style as any)}}
      />
    );
  }) as unknown as React.FC<TProps>;

declare module 'react-native-svg' {
  export interface SvgProps extends SvgThemeProps {}
}
