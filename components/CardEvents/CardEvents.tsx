import {Box, Text} from '@/ui/components';
import {Image, StyleSheet} from 'react-native';
import React from 'react';

type Props = {
  urlImage: string;
  title: string;
};
const CardEvents: React.FC<Props> = ({urlImage, title}) => {
  return (
    <Box mr="xs" my="s">
      <Image
        source={{
          uri: urlImage,
        }}
        width={160}
        height={160}
        resizeMode="cover"
        style={{
          borderRadius: 5,
        }}
      />

      <Box
        width={160}
        height={160}
        borderRadius="s"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'rgba(0, 0,0,0.5)',
        }}>
        <Box p="s" top={100} height={60}>
          <Text mb="xs" color="white">
            {title}
          </Text>
          <Box
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between">
            <Box flexDirection="row">
              <Box style={styles.labels} px="s" borderRadius="s">
                <Text color="white">¡ 2</Text>
              </Box>

              <Box style={styles.labels} px="s" mx="xs" borderRadius="s">
                <Text color="white">¡ 2</Text>
              </Box>
            </Box>

            <Box>
              <Box style={styles.labels} px="s" mx="xs" borderRadius="s">
                <Text color="white">¡¡</Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  labels: {
    backgroundColor: 'rgba(255,255,255, 0.3)',
  },
});

export default CardEvents;
