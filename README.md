# Next.js Minimal Blog Template

A clean, minimal blog template built with Next.js 15, TypeScript, and SCSS modules. Perfect for developers who want a simple starting point for their blog.

## ✨ Features

- **Next.js 15** with App Router
- **TypeScript** for type safety  
- **SCSS Modules** for component-scoped styling
- **MDX Support** - Write content in Markdown or MDX
- **Syntax Highlighting** with Shiki
- **Dynamic Routing** for blog posts
- **Static Generation** for optimal performance
- **Minimal Components** - Easy to customize and extend
- **SEO Optimized** with metadata generation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

```bash
# Clone this template
git clone <your-repo-url>
cd nextjs-blog-template

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── MarkdownRenderer.tsx
│   │   ├── CodeBlock.tsx
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── post/               # Blog functionality
│   │   ├── [slug]/         # Dynamic post pages
│   │   └── utils.ts        # Post utilities
│   └── styles/             # Global styles
├── content/
│   └── post/               # Your blog posts (.md/.mdx)
└── public/                 # Static assets
```

## ✍️ Writing Content

### Blog Posts

Create new blog posts in `src/content/post/`:

```markdown
---
title: "Your Post Title"
description: "Post description for SEO"
date: "2024-01-01"
tags: ["nextjs", "react"]
author: "Your Name"
---

# Your Content Here

Write your blog post content in Markdown or MDX format.
```

### Static Pages

Create static pages as `.mdx` files in the `app` directory for direct routing.

## 🎨 Customization

### Styling

- Modify `src/app/styles/globals.css` for global styles
- Update component SCSS modules for specific styling
- Customize the Shiki theme in `next.config.ts`

### Components

All components use SCSS modules and are fully customizable:

- `MarkdownRenderer` - Handles all markdown rendering with Shiki
- `CodeBlock` - Enhanced syntax highlighting
- `Header` & `Footer` - Layout components

## 🔧 Configuration

### MDX Support

The template supports both approaches:

1. **File-based MDX** - Direct `.mdx` files as pages
2. **Dynamic routing** - `.md` files processed through utilities

### Path Aliases

TypeScript path aliases are configured for cleaner imports:

```typescript
"@/*": ["./src/*"]
```

## 📦 Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **Content**: MDX + Markdown
- **Syntax Highlighting**: Shiki
- **Package Manager**: pnpm
- **Content Processing**: gray-matter, react-markdown

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Other Platforms

Compatible with any platform supporting Next.js:
- Netlify
- Cloudflare Pages  
- AWS Amplify

## 📄 License

MIT License

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Shiki](https://shiki.matsu.io/)
- [MDX](https://mdxjs.com/)
- [SCSS](https://sass-lang.com/)
