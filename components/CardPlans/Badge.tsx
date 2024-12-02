import {Box, Text} from '@/ui/components';
import React from 'react';

type Props = {
  numberEvents: number;
};
const Badge: React.FC<Props> = ({numberEvents = 0}) => {
  return (
    <Box
      alignItems="center"
      justifyContent="flex-start"
      borderRightWidth={1}
      borderRightColor="grey200"
      width={60}>
      <Text my="xxs" variant="bodySmallRegular" textAlign="center">
        Events
      </Text>
      <Box
        backgroundColor="primaryText"
        borderRadius="m"
        width={numberEvents > 9 ? 50 : 40}
        alignItems="center">
        <Text variant="badgeNumbersPlans">{numberEvents}</Text>
      </Box>
    </Box>
  );
};

export default Badge;
