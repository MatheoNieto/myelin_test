import {Box, Text} from '@/ui/components';
import React from 'react';

type Props = {
  type?: 'default' | 'expires' | 'standard';
  title: string;
};

const Pointer: React.FC<Props> = ({type = 'default', title}) => {
  const isExpires = type === 'expires';
  const isStandard = type === 'standard';
  const colorPointer = isExpires
    ? 'errorAlert'
    : isStandard
      ? 'primaryText'
      : 'black';

  return (
    <Box flexDirection="row">
      <Box
        width={15}
        height={15}
        backgroundColor="white"
        borderColor={colorPointer}
        alignItems="center"
        justifyContent="center"
        borderRadius="m"
        borderWidth={1}>
        <Box
          width={10}
          height={10}
          backgroundColor={colorPointer}
          borderRadius="m"
        />
      </Box>

      <Text ml="s" color={colorPointer}>
        {title}
      </Text>
    </Box>
  );
};

export default Pointer;
