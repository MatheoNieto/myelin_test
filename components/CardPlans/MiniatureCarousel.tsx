import {IMAGES_EVENTS_PLANS} from '@/models/plans';
import {Box} from '@/ui/components';
import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('screen');
type Props = {
  carouselItems: IMAGES_EVENTS_PLANS[];
};
const MiniatureCarousel: React.FC<Props> = ({carouselItems}) => {
  const renderItem = ({item}: {item: any}) => {
    return (
      <Box
        width={60}
        mr="s"
        height={60}
        p="xxs"
        borderWidth={1}
        borderColor="grayIcon"
        backgroundColor="white"
        borderRadius="s">
        <Image source={{uri: item.image}} style={styles.image} />
      </Box>
    );
  };

  return (
    <Box>
      <Carousel
        layout="stack"
        layoutCardOffset={-18}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={100}
        itemWidth={width}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 55,
    height: 55,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default MiniatureCarousel;
