import {axiosClient} from '@/config/axiosClient';
import {endpoints} from '@/constants/endpoints';
import {PLAN_RESPONSE} from '@/models/plans';

export const getPlansService = async () => {
  const result = await axiosClient.get<PLAN_RESPONSE>(endpoints.plan);

  return Promise.resolve(result.data);
};
