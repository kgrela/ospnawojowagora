import { createElement } from 'react';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';

const NAVIGATION_ITEMS = [
  {
    label: 'Strona główna',
    path: '/',
  },
  {
    label: 'Aktualności',
    path: '/blog',
  },
  {
    label: 'Jednostka',
    links: [
      {
        label: 'Historia',
        path: '/historia',
      },
      {
        label: 'Członkowie',
        path: '/czlonkowie',
      },
      {
        label: 'Młodzieżowa Drużyna Pożarnicza',
        path: '/mlodziezowa-druzyna-pozarnicza',
      },
      {
        label: 'Zarząd',
        path: '/zarzad',
      },
      {
        label: 'Wyposażenie',
        path: '/wyposazenie',
      },
      {
        label: 'Sztandar',
        path: '/sztandar',
      },
    ],
  },
  {
    label: 'Biblioteka',
    path: '/biblioteka',
  },
  {
    label: 'Kontakt',
    path: '/kontakt',
  },
];

const SOCIALS_ITEMS = [
  {
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
    name: 'Facebook',
    icon: createElement(IconBrandFacebook),
  },
  {
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
    name: 'Instagram',
    icon: createElement(IconBrandInstagram),
  },
  {
    href: process.env.NEXT_PUBLIC_YOUTUBE_URL,
    name: 'Youtube',
    icon: createElement(IconBrandYoutube),
  },
];

export { NAVIGATION_ITEMS, SOCIALS_ITEMS };
