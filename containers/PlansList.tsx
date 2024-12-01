import {CardPlans, HeaderFilterPlans} from '@/components';
import MiniatureCarousel from '@/components/CardPlans/MiniatureCarousel';
import {useGetPlans} from '@/core/hooks/plans/usePlans';
import {getCurrentAndNextMonth} from '@/helpers';
import {Box} from '@/ui/components';
import React from 'react';

const PlansList = () => {
  const {currentMonth, nextMonth} = getCurrentAndNextMonth();

  const [optionFilter, setOptionFilter] = React.useState<string>('quickPlans');
  const {data: listFilter} = useGetPlans(optionFilter);

  console.log('==>listFilter', JSON.stringify(listFilter));
  return (
    <Box p="m" backgroundColor="white">
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
