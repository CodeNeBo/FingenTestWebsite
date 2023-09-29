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
