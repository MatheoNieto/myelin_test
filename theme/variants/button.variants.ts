import {isTablet} from '@/helpers/platform';
import AppFonts from '@/theme/constants/AppFonts';

const buttonVariants = {
  defaults: {
    borderRadius: 's',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    px: 'm',
    py: 's',
    minHeight: 50,
    fontFamily: AppFonts.Poppins,
    fontWeight: '600',
    fontSize: 17,
    letterSpacing: 0.049,
  },

  outlineWhite: {
    minHeight: 40,
    backgroundColor: 'white',
    color: 'black',
    fontSize: '12',
    fontWeight: '700',
    borderWidth: 1,
    borderColor: 'buttonBorder',
    borderRadius: 'l',
    marginRight: 'xs',
    px: 's',
    py: 'xs',
  },
  outlineWhiteActive: {
    minHeight: 40,
    backgroundColor: 'primaryText',
    fontWeight: '700',
    color: 'white',
    fontSize: '12',
    borderWidth: 1,
    borderColor: 'buttonBorder',
    borderRadius: 'l',
    marginRight: 'xs',
    px: 's',
    py: 'xs',
  },
};

export default buttonVariants;
