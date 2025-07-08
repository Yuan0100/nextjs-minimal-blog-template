import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 文章 metadata 介面
export interface PostMetadata {
  title: string;
  description: string;
  date?: string;
  tags?: string[];
  author?: string;
  slug: string;
}

// 完整文章資料介面
export interface Post extends PostMetadata {
  content: string;
}

// 文章目錄路徑
const POSTS_DIRECTORY = path.join(process.cwd(), 'src/content/post');

/**
 * 獲取所有文章的 slug
 */
export function getAllPostSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    return fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map(fileName => fileName.replace(/\.(md|mdx)$/, ''));
  } catch (error) {
    console.error('Error reading posts directory:', error);
    return [];
  }
}

/**
 * 根據 slug 獲取文章資料
 */
export function getPostBySlug(slug: string): Post | null {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
    
    // 如果 .md 不存在，嘗試 .mdx
    let fileContents: string;
    
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
      if (fs.existsSync(mdxPath)) {
        fileContents = fs.readFileSync(mdxPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      description: data.description || '',
      date: data.date || null,
      tags: data.tags || [],
      author: data.author || null,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

/**
 * 獲取所有文章的 metadata
 */
export function getAllPostsMetadata(): PostMetadata[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map(slug => {
      const post = getPostBySlug(slug);
      return post ? {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        author: post.author,
      } : null;
    })
    .filter((post): post is PostMetadata => post !== null);

  // 按日期排序（最新的在前）
  return posts.sort((a, b) => {
    if (!a.date && !b.date) return 0;
    if (!a.date) return 1;
    if (!b.date) return -1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

/**
 * 根據標籤篩選文章
 */
export function getPostsByTag(tag: string): PostMetadata[] {
  const allPosts = getAllPostsMetadata();
  return allPosts.filter(post => 
    post.tags && post.tags.includes(tag)
  );
}

/**
 * 獲取所有標籤
 */
export function getAllTags(): string[] {
  const allPosts = getAllPostsMetadata();
  const tagSet = new Set<string>();
  
  allPosts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tagSet.add(tag));
    }
  });
  
  return Array.from(tagSet).sort();
}

/**
 * 生成靜態路徑參數
 */
export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map(slug => ({
    slug,
  }));
}

/**
 * 檢查文章是否存在
 */
export function postExists(slug: string): boolean {
  const mdPath = path.join(POSTS_DIRECTORY, `${slug}.md`);
  const mdxPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
  return fs.existsSync(mdPath) || fs.existsSync(mdxPath);
}