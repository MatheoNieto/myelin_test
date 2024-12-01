import {isTablet} from '@/helpers/platform';
import AppFonts from '@/theme/constants/AppFonts';

const textVariants = {
  defaults: {
    color: 'textPrimary',
    fontFamily: AppFonts['Roboto-Medium'],
    letterSpacing: 0.049,
    fontSize: isTablet ? 17 : 14,
  },
  headerBold: {
    fontWeight: 'bold',
    fontSize: 32,
    lineHeight: 40,
    color: 'primaryText',
  },
  subheadLargeBold: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: 32,
  },
  bodyRegular: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
  bodySmallRegular: {
    fontSize: 15,
    lineHeight: 18,
    color: 'lightGray',
  },
  badgeNumbersPlans: {
    fontSize: 21,
    fontWeight: '800',
    color: 'white',
    padding: 's',
  },
  titleEvent: {
    fontSize: 16,
    fontWeight: '800',
    color: 'primaryText',
    padding: 's',
  },
};

export default textVariants;
