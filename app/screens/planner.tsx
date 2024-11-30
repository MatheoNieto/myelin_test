import {PlansList} from '@/containers';
import {HeaderBackButton} from '@/ui/components';
import React from 'react';
import {Text, View} from 'react-native';

export default function Planner() {
  return (
    <>
      <HeaderBackButton />
      <PlansList />
    </>
  );
}
