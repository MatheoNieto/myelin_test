import {CardPlans, HeaderFilterPlans} from '@/components';
import {useGetPlans} from '@/core/hooks/plans/usePlans';
import {getCurrentAndNextMonth} from '@/helpers';
import {Box, Text} from '@/ui/components';
import React from 'react';

const PlansList = () => {
  const {currentMonth, nextMonth} = getCurrentAndNextMonth();

  const [optionFilter, setOptionFilter] = React.useState<string>('quickPlans');
  const {data: listFilter} = useGetPlans(optionFilter);

  console.log('==>listFilter', JSON.stringify(listFilter));
  return (
    <Box flex={1} p="m" backgroundColor="white">
      <HeaderFilterPlans
        onChangeFilter={setOptionFilter}
        currentMonth={currentMonth}
        nextMonth={nextMonth}
      />
      <CardPlans name="All events saved" />
    </Box>
  );
};

export default PlansList;
