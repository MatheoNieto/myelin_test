import {PLAN_RESPONSE} from '@/models/plans';

export const mockPlanResponse: PLAN_RESPONSE = {
  allplans: [
    {
      id: 1,
      name: 'Beach Getaway',
      destination: 'Maldives',
      duration: '7 days',
      cost: 2000,
      imageUrl: 'https://example.com/images/maldives_beach.jpg',
    },
    {
      id: 2,
      name: 'Mountain Adventure',
      destination: 'Switzerland',
      duration: '10 days',
      cost: 3000,
      imageUrl: 'https://example.com/images/switzerland_mountains.jpg',
    },
    {
      id: 3,
      name: 'City Break',
      destination: 'New York',
      duration: '5 days',
      cost: 1500,
      imageUrl: 'https://example.com/images/newyork_cityscape.jpg',
    },
    {
      id: 4,
      name: 'Desert Safari',
      destination: 'Dubai',
      duration: '4 days',
      cost: 1200,
      imageUrl: 'https://example.com/images/dubai_desert.jpg',
    },
  ],
  quickPlans: [
    {
      id: 101,
      name: 'Weekend in Paris',
      destination: 'France',
      duration: '2 days',
      cost: 500,
      imageUrl: 'https://example.com/images/paris_weekend.jpg',
    },
    {
      id: 102,
      name: 'Day Trip to Niagara Falls',
      destination: 'Canada',
      duration: '1 day',
      cost: 200,
      imageUrl: 'https://example.com/images/niagara_falls.jpg',
    },
  ],
  monthData: {
    December: {
      plans: [
        {
          name: 'Christmas Markets in Germany',
          imageUrl: 'https://example.com/images/germany_christmas.jpg',
        },
        {
          name: 'Ski Trip to Aspen',
          imageUrl: 'https://example.com/images/aspen_ski.jpg',
        },
      ],
      highlights: 'Holiday travel',
    },
    January: {
      plans: [
        {
          name: "New Year's Celebration in Sydney",
          imageUrl: 'https://example.com/images/sydney_newyear.jpg',
        },
      ],
      highlights: 'Winter sports and celebrations',
    },
    February: {
      plans: [
        {
          name: "Valentine's Day in Venice",
          imageUrl: 'https://example.com/images/venice_valentines.jpg',
        },
      ],
      highlights: 'Romantic destinations',
    },
    March: {
      plans: [
        {
          name: 'Spring Festival in Japan',
          imageUrl: 'https://example.com/images/japan_cherryblossoms.jpg',
        },
      ],
      highlights: 'Cherry blossoms',
    },
    April: {
      plans: [
        {
          name: 'Safari in Kenya',
          imageUrl: 'https://example.com/images/kenya_safari.jpg',
        },
      ],
      highlights: 'Wildlife spotting',
    },
    May: {
      plans: [
        {
          name: 'Road Trip in California',
          imageUrl: 'https://example.com/images/california_roadtrip.jpg',
        },
      ],
      highlights: 'Scenic drives and national parks',
    },
    June: {
      plans: [
        {
          name: 'Beach Holiday in Bali',
          imageUrl: 'https://example.com/images/bali_beach.jpg',
        },
      ],
      highlights: 'Summer travel',
    },
    July: {
      plans: [
        {
          name: 'Cruise in the Mediterranean',
          imageUrl: 'https://example.com/images/mediterranean_cruise.jpg',
        },
      ],
      highlights: 'Island hopping',
    },
    August: {
      plans: [
        {
          name: 'Festival of Lights in India',
          imageUrl: 'https://example.com/images/india_festival.jpg',
        },
      ],
      highlights: 'Cultural experiences',
    },
    September: {
      plans: [
        {
          name: 'Oktoberfest in Munich',
          imageUrl: 'https://example.com/images/munich_oktoberfest.jpg',
        },
      ],
      highlights: 'Beer and festivities',
    },
    October: {
      plans: [
        {
          name: 'Halloween in Salem',
          imageUrl: 'https://example.com/images/salem_halloween.jpg',
        },
      ],
      highlights: 'Spooky experiences',
    },
    November: {
      plans: [
        {
          name: 'Autumn Colors in Kyoto',
          imageUrl: 'https://example.com/images/kyoto_autumn.jpg',
        },
      ],
      highlights: 'Scenic landscapes',
    },
  },
};
