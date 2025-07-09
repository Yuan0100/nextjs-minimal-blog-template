import { getAllPostSlugs, getPostBySlug } from "../utils";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import MarkdownRenderer from '@/app/components/MarkdownRenderer';
import Header from '@/app/components/Header';
import Link from 'next/link';
import styles from './page.module.scss';

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
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/post">← Back to Posts</Link>
          </nav>

          <article className={styles.article}>
            <header className={styles.header}>
              <h1 className={styles.title}>{post.title}</h1>
              {post.description && (
                <p className={styles.description}>{post.description}</p>
              )}
              <div className={styles.meta}>
                {post.date && (
                  <time className={styles.date} dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('zh-TW')}
                  </time>
                )}
                {post.tags && post.tags.length > 0 && (
                  <div className={styles.tags}>
                    {post.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            <div className={styles.content}>
              <MarkdownRenderer content={post.content} />
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}

// 禁用動態參數（只生成靜態頁面）
export const dynamicParams = false;