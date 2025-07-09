---
title: "Welcome to Your New Blog"
description: "This is a sample blog post to demonstrate the features of your Next.js blog template."
date: "2025-01-01"
tags: ["nextjs", "blog", "template"]
author: "Your Name"
---

# Welcome to Your New Blog! 🎉

This is a sample blog post to demonstrate the features of your Next.js blog template. You can edit or delete this file and create your own content.

## Features Showcase

### Syntax Highlighting

The template includes Shiki for beautiful syntax highlighting:

```javascript
function greetBlogReader(name) {
  return `Hello, ${name}! Welcome to the blog!`;
}

console.log(greetBlogReader("Reader"));
```

```typescript
interface BlogPost {
  title: string;
  description: string;
  date: string;
  tags: string[];
}

const post: BlogPost = {
  title: "My First Post",
  description: "An introduction to my blog",
  date: "2025-01-01",
  tags: ["introduction", "blog"]
};
```

### Markdown Features

You can use all standard Markdown features:

- **Bold text**
- *Italic text*
- ~~Strikethrough text~~
- `Inline code`

### Lists

Ordered lists:

1. First item
2. Second item
3. Third item

Unordered lists:

- Item A
- Item B
- Item C

### Blockquotes

> This is a blockquote. It's useful for highlighting important information or quotes.

### Tables

| Feature             | Status |
| ------------------- | ------ |
| Markdown Support    | ✅      |
| Syntax Highlighting | ✅      |
| Responsive Design   | ✅      |
| SEO Optimized       | ✅      |

### Links

You can create [internal links](/post) or [external links](https://nextjs.org).

## Getting Started

1. Replace this file with your own content
2. Update the site configuration in `src/app/consts.ts`
3. Customize the styling in the SCSS modules
4. Add your own blog posts to `src/content/post/`

Happy blogging! 🚀
