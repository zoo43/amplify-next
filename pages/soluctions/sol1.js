import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prova</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Era semplicissimo</p>
        </h1>
        <img src="/images/Sol quiz 1.jpg" alt="Sol Quiz uno"  />
      </main>

      <footer className={styles.footer}>
          <p>Powered by Pego</p>
      </footer>
    </div>
  )
}
