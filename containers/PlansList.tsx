import {CardPlans, HeaderFilterPlans} from '@/components';
import MiniatureCarousel from '@/components/CardPlans/MiniatureCarousel';
import {useGetPlans} from '@/core/hooks/plans/usePlans';
import {getCurrentAndNextMonth} from '@/helpers';
import {OPTION_FILTER_TYPE} from '@/models/plans';
import {Box} from '@/ui/components';
import React from 'react';

const PlansList = () => {
  const {currentMonth, nextMonth} = getCurrentAndNextMonth();

  const [_, setOptionFilter] = React.useState<OPTION_FILTER_TYPE>('quickPlans');
  const {data: listFilter} = useGetPlans('allplans');

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
