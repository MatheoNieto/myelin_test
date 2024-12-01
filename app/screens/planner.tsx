import {PlansList} from '@/containers';
import {HeaderBox} from '@/ui/components';
import React from 'react';

export default function Planner() {
  return (
    <>
      <HeaderBox title="Planner" />
      <PlansList />
    </>
  );
}
