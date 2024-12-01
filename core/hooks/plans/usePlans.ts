import {useQuery, UseQueryResult} from '@tanstack/react-query';
import {getPlansService} from './service';
import {PLAN_RESPONSE} from '@/models/plans';

export const useGetPlans = (
  optionFilter: string,
): UseQueryResult<PLAN_RESPONSE, any> =>
  useQuery({
    queryFn: () => getPlansService(),
    queryKey: ['getting_plans'],
  });
