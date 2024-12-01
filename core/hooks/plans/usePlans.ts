import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getPlansService} from './service';
import {OPTION_FILTER_TYPE, PLAN_RESPONSE} from '@/models/plans';

export const useGetPlans = (
  optionFilter: OPTION_FILTER_TYPE,
): UseQueryResult<PLAN_RESPONSE, any> =>
  useQuery({
    queryFn: () => getPlansService(optionFilter),
    queryKey: ['getting_plans'],
  });

export const useGetImagesEventOfAllPlans = (): UseQueryResult<string[], any> =>
  useQuery({
    queryFn: () => getPlansService('allplans'),
    queryKey: ['getting_images_allPlans'],
    select: data => data.map(item => item.imageUrl),
  });
