import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');

const MiniatureCarousel = () => {
  const carouselItems = [
    {id: 1, image: 'https://via.placeholder.com/30', title: 'Image 1'},
    {id: 2, image: 'https://via.placeholder.com/30', title: 'Image 2'},
    {id: 3, image: 'https://via.placeholder.com/30', title: 'Image 3'},
    {id: 4, image: 'https://via.placeholder.com/30', title: 'Image 4'},
  ];

  const renderItem = ({item}: {item: any}) => {
    return <Image source={{uri: item.image}} style={styles.image} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        layout="stack"
        layoutCardOffset={18}
        data={carouselItems}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={100}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 10,
    fontSize: 14,
    color: '#333',
  },
});

export default MiniatureCarousel;
