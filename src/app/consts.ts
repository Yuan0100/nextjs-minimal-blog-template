// Site configuration constants
// Update these values to customize your blog

export const SITE_URL = 'https://yourdomain.com';
export const SITE_TITLE = 'Your Blog Name';
export const SITE_DESCRIPTION = 'A modern blog built with Next.js';

// Site configuration object
export const SITE_CONFIG = {
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  author: {
    name: "Your Name",
    email: "your.email@example.com",
  },
  social: {
    github: "https://github.com/yourusername",
    twitter: "https://twitter.com/yourusername",
  },
};

// Navigation items
export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Posts", href: "/post" },
  { name: "About", href: "/about" },
];
