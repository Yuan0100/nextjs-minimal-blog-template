import styles from "./page.module.scss";
import Header from "./components/Header";
import { SITE_CONFIG } from "./consts";

export default async function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>{SITE_CONFIG.name}</h1>
          <p className={styles.description}>{SITE_CONFIG.description}</p>
          
          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="/post"
            >
              Read Blog Posts
            </a>
          </div>
        </div>

        <section className={styles.features}>
          <h2>Getting Started</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>📝 Write Content</h3>
              <p>Add your blog posts in the <code>/src/content/post/</code> directory using Markdown or MDX.</p>
            </div>
            <div className={styles.card}>
              <h3>🎨 Customize Styles</h3>
              <p>Modify the SCSS files to match your design preferences.</p>
            </div>
            <div className={styles.card}>
              <h3>⚡ Deploy</h3>
              <p>Deploy to Vercel, Netlify, or any static hosting platform.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
