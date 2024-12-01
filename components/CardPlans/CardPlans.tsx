import {Box, Card, Text} from '@/ui/components';
import React from 'react';
import Badge from './Badge';
import MiniatureCarousel from './MiniatureCarousel';
import {IMAGES_EVENTS_PLANS} from '@/models/plans';

type Props = {
  name: string;
  numberEvents: number;
  imagesEvents: IMAGES_EVENTS_PLANS[];
};

const CardPlans: React.FC<Props> = ({name, imagesEvents, numberEvents}) => {
  return (
    <Card variant="cardPlan">
      <Box flexDirection="row">
        <Badge numberEvents={numberEvents} />
        <Box width={150} px="s" justifyContent="center">
          <Text variant="titleEvent">{name}</Text>
        </Box>
        <MiniatureCarousel carouselItems={imagesEvents} />
      </Box>
    </Card>
  );
};

export default CardPlans;
