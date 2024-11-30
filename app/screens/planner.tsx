import {PlansList} from '@/containers';
import React from 'react';
import {Text, View} from 'react-native';

export default function Planner() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <PlansList />
    </View>
  );
}
