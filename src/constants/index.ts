export const SITE_CONFIG = {
  name: 'One Piece Kart',
  description:
    'Modern e-commerce application built with Next.js and Tailwind CSS',
  url: 'https://onepiecekart.vercel.app',
  ogImage: 'https://onepiecekart.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/onepiecekart',
    github: 'https://github.com/onepiecekart',
  },
} as const;

export const NAV_ITEMS = [
  {
    title: 'Products',
    href: '/products',
    description: 'Browse our product catalog',
  },
  {
    title: 'Categories',
    href: '/categories',
    description: 'Shop by category',
  },
  {
    title: 'About',
    href: '/about',
    description: 'Learn more about us',
  },
] as const;

export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports & Outdoors',
  'Books',
  'Toys & Games',
] as const;

export const ORDER_STATUS = {
  PENDING: 'pending',
  PROCESSING: 'processing',
  SHIPPED: 'shipped',
  DELIVERED: 'delivered',
  CANCELLED: 'cancelled',
} as const;
