import {CardPlans} from '@/components';
import Pointer from '@/components/Pointer';
import {useGetPlansAllMonth} from '@/core/hooks/plans/usePlans';
import {EVENT_TYPE} from '@/models/events';
import {IMAGES_EVENTS_PLANS, PLAN_MONTH_TYPE} from '@/models/plans';
import {Box} from '@/ui/components';
import React from 'react';
import {FlatList} from 'react-native';

const TimeLinePlans = () => {
  const [height, setHeight] = React.useState(60);

  const {data: plansMonthly, isLoading} = useGetPlansAllMonth();

  if (!plansMonthly || isLoading) {
    return null;
  }

  const renderEvents = ({
    item,
    index,
    dataImagesOfEvents,
  }: {
    item: EVENT_TYPE;
    index: number;
    dataImagesOfEvents: IMAGES_EVENTS_PLANS[];
  }) => {
    return (
      <Box my="s">
        <Pointer title={`Plan ${index + 1}`} type="standard" />
        <Box px="m" mt="s">
          <CardPlans
            imagesEvents={dataImagesOfEvents}
            name={item.name}
            numberEvents={dataImagesOfEvents.length}
          />
        </Box>
      </Box>
    );
  };

  const renderMonth = ({item: itemMonth}: {item: string}) => {
    const dataImagesOfEvents: IMAGES_EVENTS_PLANS[] = plansMonthly[
      itemMonth as keyof PLAN_MONTH_TYPE
    ].map(itemEvents => ({
      image: itemEvents.imageUrl,
    }));

    return (
      <>
        <Pointer title={itemMonth} type="default" />
        <FlatList
          data={plansMonthly[itemMonth as keyof PLAN_MONTH_TYPE]}
          renderItem={({item, index}) =>
            renderEvents({item, index, dataImagesOfEvents})
          }
        />
      </>
    );
  };

  return (
    <Box
      mt="l"
      px="m"
      onLayout={event => setHeight(event.nativeEvent.layout.height)}>
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
