import {Box} from '@/ui/components';
import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('screen');
const MiniatureCarousel = () => {
  const carouselItems = [
    {
      image:
        'https://uncle.co.uk/app/uploads/2024/04/UNCLE-LEEDS_Area_FINAL-183.jpg',
    },
    {
      image:
        'https://youmedia-cdn.s3.eu-west-2.amazonaws.com/wp-content/uploads/2024/02/28110212/leeds-skyline_402434702-as.jpg',
    },
    {
      image:
        'https://pic.uhomes.com/onlineblog/cdn/uploads/2024/02/leeds-city-centre.jpg',
    },
    {
      image:
        'https://static.leonardo-hotels.com/image/Leeds_2048x1367_desktop_2.jpeg',
    },
  ];

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
