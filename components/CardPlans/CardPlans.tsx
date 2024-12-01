import {Box, Card, Text} from '@/ui/components';
import React from 'react';
import Badge from './Badge';

type Props = {
  name: string;
};

const CardPlans: React.FC<Props> = ({name}) => {
  return (
    <Card>
      <Box flexDirection="row">
        <Badge numberEvents={80} />
        <Box px="s" justifyContent="center">
          <Text variant="titleEvent">{name}</Text>
        </Box>
      </Box>
    </Card>
  );
};

export default CardPlans;
