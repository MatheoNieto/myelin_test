import dayjs from 'dayjs';

//@ts-ignore
import utc from 'dayjs-plugin-utc';

//const DEFAULT_LOCALE = 'en-US';

dayjs.extend(utc);

export const formatDate = (
  value: dayjs.ConfigType | undefined,
  format = 'YYYY-MM-DD',
): string => dayjs(value).format(format);

export const getGreeting = () => {
  const currentHour = dayjs().hour();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good Night';
  }
};

export const getCurrentAndNextMonth = () => {
  const currentMonth = dayjs().format('MMMM'); // Full name of the current month
  const nextMonth = dayjs().add(1, 'month').format('MMMM'); // Full name of the next month

  return {
    currentMonth,
    nextMonth,
  };
};
