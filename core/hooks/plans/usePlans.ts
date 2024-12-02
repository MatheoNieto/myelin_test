import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getPlanAllMonthService, getPlansService} from './service';
import {
  IMAGES_EVENTS_PLANS,
  OPTION_FILTER_TYPE,
  PLAN_RESPONSE,
} from '@/models/plans';

export const useGetPlans = (
  optionFilter: OPTION_FILTER_TYPE,
): UseQueryResult<PLAN_RESPONSE, any> =>
  useQuery({
    queryFn: () => getPlansService(optionFilter),
    queryKey: ['getting_plans'],
  });

export const useGetImagesEventOfAllPlans = (): UseQueryResult<
  IMAGES_EVENTS_PLANS[],
  any
> =>
  useQuery({
    queryFn: () => getPlansService('allplans'),
    queryKey: ['getting_images_allPlans'],
    select: data => data.map(item => ({image: item.imageUrl})),
  });

export const useGetPlansAllMonth = (): UseQueryResult<
  PLAN_RESPONSE['monthData'],
  any
> =>
  useQuery({
    queryFn: () => getPlanAllMonthService(),
    queryKey: ['getting_plans_monthly'],
  });
