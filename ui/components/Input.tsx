import React, {ReactElement, useCallback, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  NativeSyntheticEvent,
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputEndEditingEventData,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
} from 'react-native';
import {
  backgroundColor,
  backgroundColorShorthand,
  border,
  color,
  composeRestyleFunctions,
  createRestyleFunction,
  createVariant,
  layout,
  opacity,
  spacing,
  spacingShorthand,
  typography,
} from '@shopify/restyle';
import {useAppRestyle} from '@/theme';

import {useFonts as useFontStyle} from 'expo-font';
import {useAsProp} from '@/ui/hooks';
import {forwardRef, getKeys} from '@/ui/utils';

import type {
  BackgroundColorProps,
  BackgroundColorShorthandProps,
  BorderProps,
  ColorProps,
  LayoutProps,
  OpacityProps,
  SpacingProps,
  SpacingShorthandProps,
  TypographyProps,
  VariantProps,
} from '@shopify/restyle';
import type {Theme} from '@/theme';
import {useCombinedRefs} from '@/hooks/useCombinedRefs';
import Box from '@/ui/components/Box';
import Text from '@/ui/components/Text';
import {isTablet} from '@/helpers/platform';

export type RestyleInputProps = VariantProps<Theme, 'inputVariants'> &
  VariantProps<Theme, 'colors', 'placeholderTextColor'> &
  TypographyProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  BackgroundColorShorthandProps<Theme> &
  SpacingProps<Theme> &
  SpacingShorthandProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  OpacityProps<Theme> &
  TextInputProps & {
    isDisabled?: boolean;
    isInvalid?: boolean;
    rightIcon?: ReactElement;
    name?: string;
    onChangeValue?: (() => Promise<any> | void) | Function | null;
    autoCompleteType?:
      | 'password'
      | 'email'
      | 'street-address'
      | 'name'
      | 'cc-csc'
      | 'tel';
    label?: string | null;
    styleContent?: StyleProp<TextStyle>;
    isRequired?: boolean;
    suffix?: string;
  };
export type InputProps = RestyleInputProps & {
  _dark?: RestyleInputProps;
  _light?: RestyleInputProps;
};
const variant = createVariant({
  themeKey: 'inputVariants',
});
const inputPlaceholderTextColor = createRestyleFunction({
  themeKey: 'colors',
  property: 'placeholderTextColor',
});
const inputSelectionColor = createRestyleFunction({
  themeKey: 'colors',
  property: 'selectionColor',
});
export const restyleFunctions = composeRestyleFunctions([
  color,
  opacity,
  backgroundColor,
  backgroundColorShorthand,
  spacing,
  spacingShorthand,
  layout,
  border,
  typography,
  //@ts-ignore temporaly fix ignore bad type issue
  inputSelectionColor,
  //@ts-ignore temporaly fix ignore bad type issue
  inputPlaceholderTextColor,
  //@ts-ignore temporaly fix ignore bad type issue
  variant,
]);
const inputStyleProperties = [...typography, ...color].map(
  ({property}) => property as string,
);
const Input = forwardRef<InputProps, typeof TextInput>(
  (
    {
      isRequired = false,
      suffix,
      value,
      label,
      isDisabled,
      isInvalid,
      editable,
      rightIcon,
      style,
      variant: inputVariant = undefined,
      as,
      _dark,
      _light,
      onBlur,
      onFocus,
      placeholder,
      onEndEditing,
      styleContent,
      ...rest
    },
    ref,
  ) => {
    const BaseInputComponent = useAsProp(TextInput, as);
    const internalRef = useRef<TextInput>(null);

    const [isFocused, setIsFocused] = useState(false);
    const labelAnimationRef = useRef(
      new Animated.Value(!!value || !!placeholder || isFocused ? 1 : 0),
    ).current;
    let _inputVariant = inputVariant;
    if (isFocused) {
      _inputVariant = 'focused';
    }
    if (isDisabled) {
      _inputVariant = 'disabled';
    }
    if (isInvalid) {
      _inputVariant = 'error';
    }
    const refs = useCombinedRefs(internalRef, ref);
    const {
      style: [{selectionColor, ...containerStyle}],
      ...props
    } = useAppRestyle<
      InputProps,
      Pick<TextInputProps, 'placeholderTextColor' | 'selectionColor'>
    >(restyleFunctions, {
      variant: _inputVariant,
      ...rest,
    });
    const fontStyle = useFontStyle(containerStyle as TextStyle);
    const isFocusable = !!editable || !isDisabled;
    const inputStyle = getKeys(containerStyle).reduce(
      (styleAcc, styleProperty) => {
        if (inputStyleProperties.indexOf(styleProperty) !== -1) {
          styleAcc[styleProperty] = containerStyle[styleProperty];
          delete containerStyle[styleProperty];
        }
        return styleAcc;
      },
      {} as Record<string, any>,
    );
    const handleExternalFocus = useCallback(() => {
      if (isFocusable) {
        //@ts-ignore ignore bad type related to input mask
        internalRef.current?.focus();
      }
    }, [isFocusable]);
    const handleBlur = useCallback(
      (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(ev);
        setIsFocused(false);
      },
      [],
    );
    const handleFocus = useCallback(
      (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onFocus?.(ev);
        setIsFocused(true);
        Animated.timing(labelAnimationRef, {
          toValue: 1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      },
      [labelAnimationRef],
    );
    const handleEndEditing = useCallback(
      (ev: NativeSyntheticEvent<TextInputEndEditingEventData>) => {
        onEndEditing?.(ev);
        if (ev.nativeEvent.text) return;
        Animated.timing(labelAnimationRef, {
          toValue: 0,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
      },
      [],
    );

    return (
      <Pressable
        style={StyleSheet.flatten([
          styles.inputContainer,
          style,
          {...containerStyle},
          rest.multiline && {
            height: isTablet ? 300 : 200,
          },
        ])}
        onPress={handleExternalFocus}
        accessible={false}>
        <Box flexDirection="row" alignItems="center">
          <Box flex={1}>
            <Text
              as={Animated.Text}
              position="absolute"
              color="grey400"
              style={{
                top: labelAnimationRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: [isTablet ? 25 : 18, isTablet ? 10 : 5],
                }),
                fontSize: labelAnimationRef.interpolate({
                  inputRange: [0, 1],
                  outputRange: [isTablet ? 18 : 16, isTablet ? 18 : 14],
                }),
                textTransform: 'capitalize',
              }}>
              {label}
              {isRequired && <Text color="error500">*</Text>}
            </Text>

            <BaseInputComponent
              ref={refs}
              style={[
                styles.text,
                inputStyle,
                fontStyle,
                {
                  paddingTop: value || placeholder || isFocused ? 25 : 0,
                  marginTop: 2,
                  fontWeight: value || placeholder || isFocused ? '700' : '500',
                  paddingHorizontal: 0,
                },
                styleContent,
              ]}
              selectionColor={selectionColor}
              editable={!isDisabled}
              clearButtonMode="never"
              selectTextOnFocus={true}
              textAlignVertical="center" // make align consistent across platforms
              {...props}
              value={value}
              placeholder={placeholder}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onEndEditing={handleEndEditing}
            />
          </Box>
          {suffix && (
            <Box
              top={value || placeholder || isFocused ? 3 : isTablet ? 14 : 8}
              right={5}>
              <Text
                mt={label ? 's' : 'unset'}
                variant="bodyRegular"
                color="lightGray">
                {suffix}
              </Text>
            </Box>
          )}
          {rightIcon && (
            <Box top={value || placeholder || isFocused ? 7 : 12} right={5}>
              {rightIcon}
            </Box>
          )}
        </Box>
      </Pressable>
    );
  },
);
Input.defaultProps = {
  placeholderTextColor: 'textPlaceholder',
  caretHidden: false,
  maxFontSizeMultiplier: 1.3,
};
export default Input;
const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 60,
  },
  text: {
    lineHeight: 20,
    marginTop: isTablet ? 10 : 8,
  },
  inputLabel: {
    marginTop: 8,
  },
});
