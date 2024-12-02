import {OPTION_FILTER_TYPE, PLAN_MONTH_TYPE} from '@/models/plans';
import {Box, Button, Text} from '@/ui/components';
import React from 'react';

type Props = {
  onChangeFilter: (newValue: OPTION_FILTER_TYPE) => void;
  currentMonth: keyof PLAN_MONTH_TYPE;
  nextMonth: keyof PLAN_MONTH_TYPE;
};
const HeaderFilterPlans: React.FC<Props> = ({
  onChangeFilter,
  currentMonth,
  nextMonth,
}) => {
  const [optionActive, setOptionActive] =
    React.useState<OPTION_FILTER_TYPE>('quickPlans');

  const onChangeOption = (option: OPTION_FILTER_TYPE) => {
    setOptionActive(option);
    onChangeFilter(option);
  };

  return (
    <>
      <Text mb="s" fontWeight="600" fontSize={20}>
        Plans
      </Text>
      <Box flexDirection="row" mb="m">
        <Button
          variant={
            optionActive === 'quickPlans'
              ? 'outlineWhiteActive'
              : 'outlineWhite'
          }
          onPress={() => onChangeOption('quickPlans')}>
          Quick Plans
        </Button>
        <Button
          variant={
            optionActive === currentMonth
              ? 'outlineWhiteActive'
              : 'outlineWhite'
          }
          onPress={() => onChangeOption(currentMonth)}>
          {`${currentMonth}(2)`}
        </Button>
        <Button
          variant={
            optionActive === nextMonth ? 'outlineWhiteActive' : 'outlineWhite'
          }
          onPress={() => onChangeOption(nextMonth)}>
          {`${nextMonth}(2)`}
        </Button>
      </Box>
    </>
  );
};

export default HeaderFilterPlans;
