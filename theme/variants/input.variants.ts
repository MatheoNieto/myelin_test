import {isTablet} from '@/helpers/platform';
import AppFonts from '@/theme/constants/AppFonts';

const inputVariants = {
  defaults: {
    fontFamily: AppFonts['Roboto-Medium'],
    fontWeight: '300',
    fontSize: isTablet ? 20 : 16,
    color: 'textPrimary',
    backgroundColor: 'input',
    paddingHorizontal: 'm',
    height: isTablet ? 80 : 60,
    borderRadius: 's',
    borderWidth: 1,
    borderColor: 'inputBorder',
  },
  error: {
    borderColor: 'errorAlert',
  },
  disabled: {
    opacity: 0.6,
    backgroundColor: 'inputDisabled',
  },
  small: {
    backgroundColor: 'transparent',
    color: 'textPrimary',
    borderWidth: 0,
  },
  focused: {
    borderColor: 'inputBorderFocused',
    fontWeight: '700',
  },
};

export default inputVariants;
