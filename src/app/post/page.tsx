import styles from './page.module.scss'
import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

type Props = {}

export default function PostPage({}: Props) {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <div className={styles.container}>
          <h1>Posts</h1>
          
        </div>
      </main>
      <Footer />
    </div>
  )
}