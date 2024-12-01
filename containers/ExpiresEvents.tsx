import {CardEvents} from '@/components';
import {Box} from '@/ui/components';
import React from 'react';
import {FlatList} from 'react-native';

const ExpiresEvents = () => {
  const data = [
    {
      urlImage:
        'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbCUyMHdhbGxwYXBlcnxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  const renderItems = ({item}: {item: {urlImage: string}}) => (
    <CardEvents urlImage={item.urlImage} />
  );

  return (
    <Box>
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
