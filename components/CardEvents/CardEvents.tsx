import {Box} from '@/ui/components';
import {Image} from 'react-native';
import React from 'react';

type Props = {
  urlImage: string;
};
const CardEvents: React.FC<Props> = ({urlImage}) => {
  return (
    <Box p="m" backgroundColor="white">
      <Image
        source={{
          uri: urlImage,
        }}
        width={130}
        height={130}
        resizeMode="cover"
        style={{
          borderRadius: 5,
        }}
      />
    </Box>
  );
};

export default CardEvents;
