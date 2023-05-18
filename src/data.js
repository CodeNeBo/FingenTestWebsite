import { getHomePermalink, getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
      icon: 'Home',
    },
    {
      text: 'About',
      href: getPermalink('/about'),
      icon: 'About',
    },
    {
      text: 'Next',
      href: getPermalink('/next'),
      icon: 'Next',
    },
    {
      text: 'Trade',
      href: getPermalink('/trade'),
      icon: 'Trade',
    },
    {
      text: 'Hive',
      href: getPermalink('/hive'),
      icon: 'Hive',
    },
  ],
  
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'Instagram', href: '#' },
    { ariaLabel: 'Twitter', icon: 'Twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'LinkedIn', href: '#' },   
    { ariaLabel: 'Facebook', icon: 'Facebook', href: '#' },
  ]
};
  
export const footerData = {
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'Instagram', href: '#' },
    { ariaLabel: 'Twitter', icon: 'Twitter', href: '#' },
    { ariaLabel: 'LinkedIn', icon: 'LinkedIn', href: '#' },   
    { ariaLabel: 'Facebook', icon: 'Facebook', href: '#' },
  ]
};
