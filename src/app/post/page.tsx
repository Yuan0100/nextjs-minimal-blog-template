import styles from './page.module.scss'
import Header from '@/app/components/Header'
import Link from 'next/link'
import { getAllPosts } from './utils'

export default function PostPage() {
  const posts = getAllPosts()

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>Blog Posts</h1>
          
          {posts.length === 0 ? (
            <div className={styles.empty}>
              <p>No posts found. Create your first post in <code>/src/content/post/</code></p>
            </div>
          ) : (
            <div className={styles.posts}>
              {posts.map((post) => (
                <article key={post.slug} className={styles.post_card}>
                  <Link href={`/post/${post.slug}`} className={styles.post_link}>
                    <h2 className={styles.post_title}>{post.title}</h2>
                    {post.description && (
                      <p className={styles.post_description}>{post.description}</p>
                    )}
                    <div className={styles.post_meta}>
                      {post.date && (
                        <time dateTime={post.date}>
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
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}