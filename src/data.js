import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Features',
      href: getPermalink('/#features'),
    },
    {
      text: 'Benefits',
      href: getPermalink('/#benefits'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
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
