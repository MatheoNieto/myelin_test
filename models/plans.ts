import {EVENT_TYPE} from './events';

export type PLAN_MONTH_TYPE = {
  December: EVENT_TYPE[];
  January: EVENT_TYPE[];
  February: EVENT_TYPE[];
  March: EVENT_TYPE[];
  April: EVENT_TYPE[];
  May: EVENT_TYPE[];
  June: EVENT_TYPE[];
  July: EVENT_TYPE[];
  August: EVENT_TYPE[];
  September: EVENT_TYPE[];
  October: EVENT_TYPE[];
  November: EVENT_TYPE[];
};

export type PLAN_RESPONSE = {
  allplans: EVENT_TYPE[];
  quickPlans: EVENT_TYPE[];
  monthData: PLAN_MONTH_TYPE;
};

export type OPTION_FILTER_TYPE =
  | 'allplans'
  | 'quickPlans'
  | keyof PLAN_MONTH_TYPE;

export type IMAGES_EVENTS_PLANS = {
  image: string;
};
