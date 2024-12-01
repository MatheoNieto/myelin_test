import {axiosClient} from '@/config/axiosClient';
import {endpoints} from '@/constants/endpoints';

export const getPlans = async () => {
  const result = await axiosClient.get(endpoints.plan);

  return Promise.resolve(result);
};
