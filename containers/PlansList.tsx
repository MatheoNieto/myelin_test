import {CardPlans} from '@/components';
import {formatDate, getGreeting} from '@/helpers';
import {Box, Text} from '@/ui/components';
import React from 'react';

const PlansList = () => {
  const getDateToday = formatDate(new Date(), 'dddd, DD MMM');
  const greeting = getGreeting();

  return (
    <Box flex={1} p="m" backgroundColor="white">
      <Box mb="m">
        <Text fontWeight="600">{getDateToday}</Text>
        <Text variant="headerBold">{greeting}</Text>
      </Box>

      <CardPlans name="bla" />
    </Box>
  );
};

export default PlansList;
