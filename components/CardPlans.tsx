import {Card, Text} from '@/ui/components';
import React from 'react';

type Props = {
  name: string;
};

const CardPlans: React.FC<Props> = ({name}) => {
  return (
    <Card>
      <Text variant="bodyBold">{name}</Text>
    </Card>
  );
};

export default CardPlans;
