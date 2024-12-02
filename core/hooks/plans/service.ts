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

/**
 * Fetches plan data based on filter options.
 *
 * @param filterOptions - Filter criteria for retrieving plans.
 * @returns Filtered plan data based on `filterOptions`.
 */
const plansService = async (
  filterOptions: OPTION_FILTER_TYPE | 'allMonth',
): Promise<EVENT_TYPE[] | PLAN_MONTH_TYPE> => {
  // Default to mock response if mocks are enabled
  let planData: PLAN_RESPONSE = mockPlanResponse;

  // Fetch data from the API if mocks are disabled
  if (!configApp.mocks) {
    const response = await axiosClient.get<PLAN_RESPONSE>(endpoints.plan);
    planData = response.data;
  }

  // Handle 'allMonth' filter separately
  if (filterOptions === 'allMonth') {
    return planData.monthData;
  }

  // Determine if the filter applies to all plans or quick plans
  const isGeneralFilter = ['allplans', 'quickPlans'].includes(filterOptions);

  // Retrieve data based on the filter type
  return isGeneralFilter
    ? planData[filterOptions as 'allplans' | 'quickPlans']
    : planData.monthData[filterOptions as keyof PLAN_MONTH_TYPE];
};

/**
 * Retrieves plans based on specific filter options.
 *
 * @param filterOptions - The type of plans to filter.
 * @returns A promise resolving to a list of events matching the filter.
 */
export const getPlansService = async (
  filterOptions: OPTION_FILTER_TYPE,
): Promise<EVENT_TYPE[]> => {
  return (await plansService(filterOptions)) as any as Promise<EVENT_TYPE[]>;
};

/**
 * Retrieves all monthly plan data.
 *
 * @returns A promise resolving to all plan data grouped by month.
 */
export const getPlanAllMonthService = async (): Promise<PLAN_RESPONSE> => {
  return (await plansService('allMonth')) as any as Promise<PLAN_RESPONSE>;
};
