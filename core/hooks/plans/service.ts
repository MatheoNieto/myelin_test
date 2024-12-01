import {axiosClient} from '@/config/axiosClient';
import {configApp} from '@/config/config';
import {endpoints} from '@/constants/endpoints';
import {mockPlanResponse} from '@/constants/mockData';
import {EVENT_TYPE} from '@/models/events';
import {
  OPTION_FILTER_TYPE,
  PLAN_MONTH_TYPE,
  PLAN_RESPONSE,
} from '@/models/plans';

export const getPlansService = async (
  filterOptions: OPTION_FILTER_TYPE,
): Promise<EVENT_TYPE[]> => {
  let dataService: PLAN_RESPONSE = mockPlanResponse;

  if (!configApp.mocks) {
    const result = await axiosClient.get<PLAN_RESPONSE>(endpoints.plan);
    dataService = result.data;
  }

  const isNotMonth = ['allplans', 'quickPlans'].includes(filterOptions);
  const filterData = isNotMonth
    ? (dataService as PLAN_RESPONSE)[filterOptions as 'allplans' | 'quickPlans']
    : (dataService.monthData as PLAN_MONTH_TYPE)[
        filterOptions as keyof PLAN_MONTH_TYPE
      ];

  return Promise.resolve(filterData);
};
