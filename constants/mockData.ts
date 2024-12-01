import {PLAN_RESPONSE} from '@/models/plans';

export const mockPlanResponse: PLAN_RESPONSE = {
  allplans: [
    {
      name: 'Beach Getaway',
      imageUrl: 'https://example.com/images/maldives_beach.jpg',
    },
    {
      name: 'Mountain Adventure',
      imageUrl: 'https://example.com/images/switzerland_mountains.jpg',
    },
    {
      name: 'City Break',
      imageUrl: 'https://example.com/images/newyork_cityscape.jpg',
    },
    {
      name: 'Desert Safari',
      imageUrl: 'https://example.com/images/dubai_desert.jpg',
    },
  ],
  quickPlans: [
    {
      name: 'Weekend in Paris',
      imageUrl: 'https://example.com/images/paris_weekend.jpg',
    },
    {
      name: 'Day Trip to Niagara Falls',
      imageUrl: 'https://example.com/images/niagara_falls.jpg',
    },
  ],
  monthData: {
    December: [
      {
        name: 'Christmas Markets in Germany',
        imageUrl: 'https://example.com/images/germany_christmas.jpg',
      },
      {
        name: 'Ski Trip to Aspen',
        imageUrl: 'https://example.com/images/aspen_ski.jpg',
      },
    ],
    January: [
      {
        name: "New Year's Celebration in Sydney",
        imageUrl: 'https://example.com/images/sydney_newyear.jpg',
      },
    ],
    February: [
      {
        name: "Valentine's Day in Venice",
        imageUrl: 'https://example.com/images/venice_valentines.jpg',
      },
    ],
    March: [
      {
        name: 'Spring Festival in Japan',
        imageUrl: 'https://example.com/images/japan_cherryblossoms.jpg',
      },
    ],
    April: [
      {
        name: 'Safari in Kenya',
        imageUrl: 'https://example.com/images/kenya_safari.jpg',
      },
    ],
    May: [
      {
        name: 'Road Trip in California',
        imageUrl: 'https://example.com/images/california_roadtrip.jpg',
      },
    ],
    June: [
      {
        name: 'Beach Holiday in Bali',
        imageUrl: 'https://example.com/images/bali_beach.jpg',
      },
    ],
    July: [
      {
        name: 'Cruise in the Mediterranean',
        imageUrl: 'https://example.com/images/mediterranean_cruise.jpg',
      },
    ],
    August: [
      {
        name: 'Festival of Lights in India',
        imageUrl: 'https://example.com/images/india_festival.jpg',
      },
    ],
    September: [
      {
        name: 'Oktoberfest in Munich',
        imageUrl: 'https://example.com/images/munich_oktoberfest.jpg',
      },
    ],
    October: [
      {
        name: 'Halloween in Salem',
        imageUrl: 'https://example.com/images/salem_halloween.jpg',
      },
    ],
    November: [
      {
        name: 'Autumn Colors in Kyoto',
        imageUrl: 'https://example.com/images/kyoto_autumn.jpg',
      },
    ],
  },
};
