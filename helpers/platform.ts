import {Dimensions, Platform} from 'react-native';

export const isAndroid = Platform.OS === 'android';

let isLandscape =
  Dimensions.get('window').width > Dimensions.get('window').height;

export const checkIsLandscape = () => isLandscape;

Dimensions.addEventListener('change', ({window}) => {
  isLandscape = window.width > window.height;
});

export const isTablet = false;
