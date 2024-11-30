import {isTablet} from '@/helpers/platform';

const cardVariants = {
  defaults: {
    padding: isTablet ? 'l' : 'm',
    marginBottom: 'm',
    marginHorizontal: 'm',
    backgroundColor: 'white',
    borderRadius: 's',
    shadowOffset: {width: 2, height: 0},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
    shadowColor: 'lightGray',
  },
};

export default cardVariants;
