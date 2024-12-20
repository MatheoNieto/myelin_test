import * as React from 'react';
import {View} from 'react-native';
import {
  BoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
  createVariant,
  VariantProps,
} from '@shopify/restyle';
import {Theme, useAppRestyle} from '@/theme';

import {useAsProp} from '@/ui/hooks';
import {forwardRef} from '@/ui/utils';

import type {Animation} from 'react-native-animatable';

type RestyleCardProps = VariantProps<Theme, 'cardVariants'> & BoxProps<Theme>;

export type CardProps = React.PropsWithChildren<
  RestyleCardProps & {
    _dark?: RestyleCardProps;
    _light?: RestyleCardProps;
    animation?: Animation;
    duration?: number;
    useNativeDriver?: boolean;
    onPress?: (() => Promise<any> | void) | Function | null;
  }
>;

const variant = createVariant({
  themeKey: 'cardVariants',
});

const restyleFunctions = composeRestyleFunctions([
  //@ts-ignore temporaly fix ignore bad type issue
  ...boxRestyleFunctions,
  //@ts-ignore temporaly fix ignore bad type issue
  variant,
]);

const Card = forwardRef<CardProps, typeof View>(
  ({as, _dark, _light, ...rest}, ref) => {
    const CardComponent = useAsProp(View, as);
    const passedProps = useAppRestyle(restyleFunctions, {
      variant: '',
      ...rest,
    });
    // @ts-ignore
    return <CardComponent ref={ref} {...passedProps} />;
  },
);

export default Card;
