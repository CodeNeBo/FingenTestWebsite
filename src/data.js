import { getHomePermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
      icon: 'Home',
    },
    {
      text: 'About',
      href: '#',
      icon: 'About',
    },
    {
      text: 'Next',
      href: '#',
      icon: 'Next',
    },
    {
      text: 'Trade',
      href: '#',
      icon: 'Trade',
    },
    {
      text: 'Hive',
      href: '#',
      icon: 'Hive',
    },
  ],
};
  
export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'Instagram', href: '#' },
    { ariaLabel: 'Twitter', icon: 'Twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'LinkedIn', href: '#' },   
    { ariaLabel: 'Facebook', icon: 'Facebook', href: '#' },
  ]
};
