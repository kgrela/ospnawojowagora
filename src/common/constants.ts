import { createElement } from 'react';
import { IconBrandFacebook, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';

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

export { SOCIALS_ITEMS };
