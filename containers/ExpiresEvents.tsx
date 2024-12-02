import {CardEvents} from '@/components';
import Pointer from '@/components/Pointer';
import {Box} from '@/ui/components';
import React from 'react';
import {FlatList} from 'react-native';

const ExpiresEvents = () => {
  const data = [
    {
      urlImage:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
      title: 'Farmhouse Plan',
    },
    {
      urlImage:
        'https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg',
      title: 'Farmhouse Plan',
    },
    {
      urlImage:
        'https://yorkshirefoodguide.co.uk/wp-content/uploads/2019/06/Ox-Club-Leeds-Chop-Night-.jpg',
      title: 'Farmhouse Plan',
    },
    {
      urlImage:
        'https://cdn-3.expansion.mx/dims4/default/2ab5265/2147483647/resize/1280x/quality/90/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F3f%2F58%2Fe40c85894fb291192144ea18ca63%2Faeromexico-viajes.jpg',
      title: 'Farmhouse Plan',
    },
  ];

  const renderItems = ({item}: {item: {urlImage: string; title: string}}) => (
    <CardEvents title={item.title} urlImage={item.urlImage} />
  );

  return (
    <Box px="m">
      <Pointer type="expires" title="Expires in 5 days!" />
      <FlatList
        horizontal
        data={data}
        renderItem={renderItems}
        keyExtractor={(_, index) => `event-${index}`}
      />
    </Box>
  );
};

export default ExpiresEvents;
