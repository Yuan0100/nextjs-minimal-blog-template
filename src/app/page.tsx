import styles from "./page.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default async function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <h1>Uanuanshi</h1>
      </main>
      <Footer />
    </div>
  );
}
