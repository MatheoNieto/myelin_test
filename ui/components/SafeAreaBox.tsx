import React from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from '@shopify/restyle';
import {
  NativeSafeAreaViewProps,
  SafeAreaView,
} from 'react-native-safe-area-context';
import {useAppRestyle} from '@/theme';

import type {Theme} from '@/theme';

type RestyleSafeAreaBoxProps = ShopifyRestyleBoxProps<Theme> & {
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};
type Props = NativeSafeAreaViewProps &
  RestyleSafeAreaBoxProps & {
    _dark?: RestyleSafeAreaBoxProps;
    _light?: RestyleSafeAreaBoxProps;
  };

const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

const SafeAreaBox = React.forwardRef<typeof SafeAreaView, Props>(
  ({_dark, _light, ...rest}, ref) => {
    const props = useAppRestyle(restyleFunctions, {
      ...rest,
    });
    //@ts-ignore ignore bad ref type
    return <SafeAreaView ref={ref} {...props} />;
  },
);

export type SafeAreaBoxProps = React.ComponentProps<typeof SafeAreaBox>;
export default SafeAreaBox;
