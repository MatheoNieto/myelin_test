import {PlansList} from '@/containers';
import ExpiresEvents from '@/containers/ExpiresEvents';
import {formatDate, getGreeting} from '@/helpers';
import {Box, HeaderBox, Text} from '@/ui/components';
import React from 'react';

export default function Planner() {
  const getDateToday = formatDate(new Date(), 'dddd, DD MMM');
  const greeting = getGreeting();
  return (
    <Box flex={1} backgroundColor="white">
      <HeaderBox title="Planner" />
      <Box px="m" backgroundColor="white">
        <Text fontWeight="600">{getDateToday}</Text>
        <Text variant="headerBold">{greeting}</Text>
      </Box>
      <PlansList />
      <ExpiresEvents />
    </Box>
  );
}
