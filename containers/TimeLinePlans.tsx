import {CardPlans} from '@/components';
import Pointer from '@/components/Pointer';
import {useGetPlansAllMonth} from '@/core/hooks/plans/usePlans';
import {EVENT_TYPE} from '@/models/events';
import {PLAN_MONTH_TYPE} from '@/models/plans';
import {Box, Text} from '@/ui/components';
import React from 'react';
import {FlatList} from 'react-native';

const TimeLinePlans = () => {
  const [height, setHeight] = React.useState(60);

  const {data: plansMonthly, isLoading} = useGetPlansAllMonth();

  if (!plansMonthly || isLoading) {
    return null;
  }

  const renderEvents = ({item, index}: {item: EVENT_TYPE; index: number}) => {
    return (
      <Box my="s">
        <Pointer title={`Plan ${index + 1}`} type="standard" />
        <Box px="m" mt="s">
          <CardPlans imagesEvents={[]} name={item.name} numberEvents={1} />
        </Box>
      </Box>
    );
  };

  const renderMonth = ({item}: {item: string}) => {
    return (
      <>
        <Pointer title={item} type="default" />
        <FlatList data={plansMonthly[item]} renderItem={renderEvents} />
      </>
    );
  };

  return (
    <Box px="m" onLayout={event => setHeight(event.nativeEvent.layout.height)}>
      <Box
        position="absolute"
        height={height - 20}
        left={23}
        borderLeftColor="grayIcon"
        borderLeftWidth={1}
      />
      <FlatList
        data={Object.keys(plansMonthly)}
        renderItem={renderMonth}
        keyExtractor={(_, index) => `timeLineMonth-${index}`}
      />
    </Box>
  );
};

export default TimeLinePlans;
