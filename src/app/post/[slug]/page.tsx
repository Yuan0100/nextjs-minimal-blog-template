import { getAllPostSlugs, getPostBySlug } from "../utils";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';

type Props = {
  params: Promise<{
    slug: string;
  }>
}

// 生成靜態路徑
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

// 生成動態 metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
    },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        {post.description && (
          <p className="text-xl text-gray-600 mb-4">{post.description}</p>
        )}
        {post.date && (
          <time className="text-sm text-gray-500" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString('zh-TW')}
          </time>
        )}
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <MarkdownRenderer 
        content={post.content}
      />
    </article>
  );
}

// 禁用動態參數（只生成靜態頁面）
export const dynamicParams = false;