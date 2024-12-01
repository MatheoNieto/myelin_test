import {Card} from '@/ui/components';
import {Image} from 'react-native';
import React from 'react';

type Props = {
  urlImage: string;
};
const CardEvents: React.FC<Props> = ({urlImage}) => {
  return (
    <Card>
      <Image
        source={{
          uri: urlImage,
        }}
        width={100}
        height={100}
        resizeMode="cover"
      />
    </Card>
  );
};

export default CardEvents;
