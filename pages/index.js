import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prova</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <p>Ecco il gioco! Trova il gatto nelle seguenti foto!</p>
        </h1>
        <img src="/images/Quiz 1.jpg" alt="Quiz uno"  />
        <p><a href="soluctions/sol1"> Clicca qui per la soluzione!</a></p>
        <img src="/images/Quiz 2.jpg" alt="Quiz due"  />
        <p><a href="soluctions/sol2"> Clicca qui per la soluzione! </a></p>
      </main>

      <footer className={styles.footer}>
          <p>Powered by Pego</p>
      </footer>
    </div>
  )
}
