import React from 'react';
import {
  Animated,
  GestureResponderEvent,
  Platform,
  StyleProp,
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';
import {
  composeRestyleFunctions,
  layout,
  LayoutProps,
  position,
  PositionProps,
  TextProps as ShopifyRestyleTextProps,
  textRestyleFunctions,
} from '@shopify/restyle';
import {useAppRestyle} from '@/theme';
import {useFonts as useFontStyle} from 'expo-font';

import {useAsProp} from '@/ui/hooks';
import {forwardRef} from '@/ui/utils';

import type {FontWeight, Theme} from '@/theme';
import type {Animation} from 'react-native-animatable';

type RestyleTextProps = PositionProps<Theme> &
  LayoutProps<Theme> &
  Omit<ShopifyRestyleTextProps<Theme>, 'fontFamily' | 'fontWeight'> &
  Omit<RNTextProps, 'style'> & {
    fontWeight?: FontWeight;
    isDisabled?: boolean;
    email?: string;
    href?: string;
    phoneNumber?: string;
    style?: Animated.WithAnimatedValue<StyleProp<TextStyle>>;
    animation?: Animation;
    delay?: number;
    useNativeDriver?: boolean;
    easing?: string;
  };

export type TextProps = RestyleTextProps & {
  _dark?: RestyleTextProps;
  _light?: RestyleTextProps;
};

const restyleFunctions = composeRestyleFunctions([
  //@ts-ignore temporaly fix ignore bad type issue
  ...textRestyleFunctions,
  //@ts-ignore temporaly fix ignore bad type issue
  position,
  //@ts-ignore temporaly fix ignore bad type issue
  layout,
]);

const Text = forwardRef<TextProps, typeof RNText>(
  (
    {
      as,
      style,
      onPress,
      isDisabled,
      onPressIn,
      onPressOut,
      _dark,
      _light,
      ...rest
    },
    ref,
  ) => {
    const TextComponent = useAsProp(RNText, as);
    const [isHighlighted, setHighlighted] = React.useState(false);
    const {
      style: [textStyle],
      ...props
    } = useAppRestyle(restyleFunctions, {variant: '', ...rest, ..._light});
    // @ts-ignore
    const fontStyle = useFontStyle(textStyle);
    const highlightedStyle = isHighlighted
      ? {backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 4}
      : undefined;
    const handlePressIn = (ev: GestureResponderEvent) => {
      setHighlighted(true);
      onPressIn?.(ev);
    };

    const handlePressOut = (ev: GestureResponderEvent) => {
      setHighlighted(false);
      onPressOut?.(ev);
    };

    return (
      //@ts-ignore missing prop type
      <TextComponent
        {...props}
        ref={ref}
        style={[fontStyle, textStyle, highlightedStyle, style]}
        onPress={onPress}
        onPressIn={Platform.select({
          ios: onPressIn,
          default: handlePressIn,
        })}
        onPressOut={Platform.select({
          ios: onPressOut,
          default: handlePressOut,
        })}
        disabled={isDisabled}
      />
    );
  },
);

Text.defaultProps = {
  maxFontSizeMultiplier: 1.3,
};

export default React.memo(Text) as typeof Text;
